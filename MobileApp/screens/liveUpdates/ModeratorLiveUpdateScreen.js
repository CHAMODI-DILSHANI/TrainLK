import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowRight,
  faBell,
  faCaretLeft,
  faCaretRight,
  faCaretUp,
  faCircleInfo,
  faTrainSubway,
  faUser,
  faWaveSquare,
} from "@fortawesome/free-solid-svg-icons";
import tw from "twrnc";
import jwt_decode from "jwt-decode";

import { useFonts } from "expo-font";
import TopBar from "../../components/navigation/TopBar";

import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import utils from "../../utils";
import { AuthContext } from "../../context/AuthContext";

import * as Location from "expo-location";
import Dialog, { DialogContent } from "react-native-popup-dialog";

const ModeratorLiveUpdateScreen = ({ route }) => {
  const [statusLocation, setStatus] = useState("");
  const [stations, setStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState("");
  const [passangerStatus, setPassangerStatus] = useState("");
  // const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const { accessToken, refreshToken } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const [wrongInfo, setWrongInfo] = useState(false);
  const [successInfo, setSuccessInfo] = useState(false);

  const [fontsLoaded] = useFonts({
    "Grotesk-Regular": require("./../../assets/fonts/FamiljenGrotesk-Regular.ttf"),
    "Grotesk-Medium": require("./../../assets/fonts/FamiljenGrotesk-Medium.ttf"),
    "Grotesk-SemiBold": require("./../../assets/fonts/FamiljenGrotesk-SemiBold.ttf"),
    "Grotesk-Bold": require("./../../assets/fonts/FamiljenGrotesk-Bold.ttf"),
  });

  useEffect(() => {
    function fetchStations() {
      const endpoint = `${utils.lanip}/update/stations/${route.params.data.scheduleID}`;
      fetch(endpoint)
        .then(response => response.json())
        .then(json => {
          // console.log(json);
          setStations(json);
          // setAvailableTrains(json);
        });
    }
    fetchStations();
    setSelectedStation(0);
  }, []);

  const selectNextStation = () => {
    if (selectedStation + 1 < stations.length) {
      setSelectedStation(selectedStation + 1);
    }
  };

  const selectPreviousStation = () => {
    if (selectedStation - 1 >= 0) {
      setSelectedStation(selectedStation - 1);
    }
  };

  function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }

  function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    var earthRadiusKm = 6371;

    var dLat = degreesToRadians(lat2 - lat1);
    var dLon = degreesToRadians(lon2 - lon1);

    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);

    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
  }

  const updateStatus = async () => {
    const date = new Date();
    var times = new Date().toLocaleTimeString();

    var decoded = jwt_decode(accessToken);

    // Get current location of the moderator
    setIsLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = null;
    location = await Location.getCurrentPositionAsync({});
    setIsLoading(false);

    // setLocation(location);

    const updateObj = {
      dateNTime: {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        timeH: date.getHours(),
        timeM: date.getMinutes(),
        timeS: date.getSeconds(),
      },
      selectedStation: {
        stationName: stations[selectedStation].stationName,
        stationID: stations[selectedStation].stationID,
        scheduleID: stations[selectedStation].scheduleID,
      },
      moderatorID: decoded.id,
      statusLocation,
      passangerStatus,
      moderatorLocation: {
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      },
    };

    console.log(updateObj);

    // send updateObj to backend
    if (location) {
      console.log(`Moderator latitude  -> ${location.coords.longitude}`);
      console.log(`Moderator longitude -> ${location.coords.latitude}`);

      // check moderator location is whihthin a radius
      const stationCoordinates = {
        latitude: stations[selectedStation].latitude,
        longitude: stations[selectedStation].longitude,
      };

      // check distance between moderator location and station location
      const distanceBetweenModeratorAndStation =
        distanceInKmBetweenEarthCoordinates(
          stationCoordinates.latitude,
          stationCoordinates.longitude,
          location.coords.latitude,
          location.coords.longitude
        );

      console.log(`Arrival Time: ${stations[selectedStation].arrivalTime}`);

      console.log("Distance: ", distanceBetweenModeratorAndStation);

      if (distanceBetweenModeratorAndStation < 0.5) {
        // Update the status
        const endpoint = `${utils.lanip}/update/status/`;
        fetch(endpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateObj),
        })
          .then(response => response.json())
          .then(json => {
            console.log(json);
            setSuccessInfo(true);
          });
      } else {
        // Do not update
        setWrongInfo(true);
      }
    }

    // console.log(updateObj);
  };

  return (
    <ScrollView>
      <Dialog
        visible={wrongInfo}
        onTouchOutside={() => {
          setWrongInfo(false);
        }}
      >
        <DialogContent style={tw`ml-4 mr-4 mt-5`}>
          {
            <View>
              <Text style={tw`font-medium`}>ERROR</Text>
              <View style={tw`w-100% h-0.1 bg-gray-400 mb-2 mt-1`}></View>
              <Text>
                Sorry! You can't update this status. Because you are too far
                away from the station.
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setWrongInfo(false);
                }}
                style={tw`mt-4 border border-gray-50 text-center p-1 rounded`}
              >
                <Text style={tw`text-center text-blue-400 font-medium`}>
                  OK
                </Text>
              </TouchableOpacity>
            </View>
          }
        </DialogContent>
      </Dialog>

      <Dialog
        visible={successInfo}
        onTouchOutside={() => {
          setSuccessInfo(false);
        }}
      >
        <DialogContent style={tw`ml-4 mr-4 mt-5`}>
          {
            <View>
              <Text style={tw`font-medium`}>SUCCESS</Text>
              <View style={tw`w-100% h-0.1 bg-gray-400 mb-2 mt-1`}></View>
              <Text>Thank you for contributing.</Text>
              <TouchableOpacity
                onPress={() => {
                  setSuccessInfo(false);
                }}
                style={tw`mt-4 border border-gray-50 text-center p-1 rounded`}
              >
                <Text style={tw`text-center text-blue-400 font-medium`}>
                  OK
                </Text>
              </TouchableOpacity>
            </View>
          }
        </DialogContent>
      </Dialog>

      <TopBar title="Update" goBack={true} />
      <View
        style={tw`bg-white px-3 py-3 mx-3 rounded-2 border border-1 border-gray-300`}
      >
        {/* TOP SECTION */}
        <View style={tw`flex-row items-center justify-between mb-2`}>
          {/* <View style={tw`w-10 h-0.3 bg-gray-400 mr-2`}></View> */}

          <View style={tw`flex-row items-center justify-between mb-2`}>
            <Text style={tw`font-medium`}>
              {route.params.data.info[0].stationName}
            </Text>
            <FontAwesomeIcon icon={faArrowRight} style={tw`ml-2 mr-2`} />
            <Text style={tw`font-medium`}>
              {route.params.data.info[1].stationName}
            </Text>
          </View>

          {/* <View style={tw`flex-1 h-0.3 bg-gray-400 ml-2 mr-2`}></View> */}
          <FontAwesomeIcon icon={faCircleInfo} style={tw`text-gray-500`} />
        </View>

        <View>
          <View style={tw`flex-row items-center mt-4 mb-1`}>
            <View style={tw`w-3 h-0.3 bg-gray-400 mr-2`}></View>
            <FontAwesomeIcon icon={faTrainSubway} />
            <View style={tw`flex-1 h-0.3 bg-gray-400 ml-2`}></View>
            <FontAwesomeIcon icon={faCaretRight} />
            <View style={tw`flex-1 h-0.3 bg-gray-400 mr-2`}></View>
            <View style={tw`bg-blue-700 rounded-50 p-2.5`}>
              <FontAwesomeIcon icon={faTrainSubway} style={tw`text-white`} />
            </View>
            <View style={tw`flex-1 h-0.3 bg-gray-400 ml-2`}></View>
            <FontAwesomeIcon icon={faCaretRight} />
            <View style={tw`flex-1 h-0.3 bg-gray-400 mr-2`}></View>
            <FontAwesomeIcon icon={faTrainSubway} />
            <View style={tw`w-3 h-0.3 bg-gray-400 ml-2`}></View>
          </View>

          <View style={tw`flex-row justify-between`}>
            <Text style={{ flex: 1 }}>
              {route.params.data.info[0].stationName}
            </Text>
            <FontAwesomeIcon icon={faCaretUp} style={tw`text-blue-800`} />
            <Text
              style={{
                flex: 1,
                textAlign: "right",
              }}
            >
              {route.params.data.info[1].stationName}
            </Text>
          </View>

          <View style={tw`flex-row justify-center `}>
            <FontAwesomeIcon icon={faCaretUp} style={tw`text-blue-800`} />
          </View>

          <View style={tw`flex-row justify-center`}>
            <FontAwesomeIcon icon={faCaretUp} style={tw`text-blue-800`} />
          </View>

          <View style={tw`flex-row items-center justify-between mb-4`}>
            <TouchableOpacity onPress={selectPreviousStation}>
              <View style={tw`bg-gray-200 p-3 rounded-50`}>
                <FontAwesomeIcon icon={faCaretLeft} />
              </View>
            </TouchableOpacity>

            <View
              style={tw`bg-gray-200 flex-1 mx-2 rounded-2 flex items-center py-1.5 border border-blue-800`}
            >
              <Text style={tw`text-lg font-bold text-blue-800`}>
                {stations.length == 0
                  ? "Empty"
                  : stations[selectedStation].stationName}
                {/* {stations && stations[selectedStation].stationName && "Hi"} */}
              </Text>
            </View>
            <TouchableOpacity onPress={selectNextStation}>
              <View style={tw`bg-gray-200 p-3 rounded-50`}>
                <FontAwesomeIcon icon={faCaretRight} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Station Input Feild */}

          {/* Buttons Set */}
          <View>
            {/* <TouchableOpacity
              onPress={() => {
                setStatus("IN");
              }}
            >
              <View>
                <Text
                  style={tw`text-xs font-medium bg-gray-200 p-2 rounded-2 my-1 text-center border border-gray-400 ${
                    statusLocation === "IN"
                      ? "bg-blue-200 border-blue-400 border-1"
                      : ""
                  }`}
                >
                  IN
                </Text>
              </View>
            </TouchableOpacity> */}
            <TouchableOpacity
              onPress={() => {
                setStatus("PASSING");
              }}
            >
              <View>
                <Text
                  style={tw`text-xs font-medium bg-gray-200 p-2 rounded-2 my-1 text-center border border-gray-400 ${
                    statusLocation === "PASSING"
                      ? "bg-green-200 border-green-400 border-1"
                      : ""
                  }`}
                >
                  PASSING
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setStatus("STOPPED");
              }}
            >
              <View>
                <Text
                  style={tw`text-xs font-medium bg-gray-200 p-2 rounded-2 my-1 text-center border border-gray-400 ${
                    statusLocation === "STOPPED"
                      ? "bg-yellow-200 border-yellow-400 border-1"
                      : ""
                  }`}
                >
                  STOPPED
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setStatus("RTL");
              }}
            >
              <View>
                <Text
                  style={tw`text-xs font-medium bg-gray-200 p-2 rounded-2 my-1 text-center border border-gray-400 ${
                    statusLocation === "RTL"
                      ? "bg-amber-200 border-amber-400 border-1"
                      : ""
                  }`}
                >
                  READY TO LEAVE
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setStatus("OUT");
              }}
            >
              <View>
                <Text
                  style={tw`text-xs font-medium bg-gray-200 p-2 rounded-2 my-1 text-center border border-gray-400 ${
                    statusLocation === "OUT"
                      ? "bg-red-200 border-red-400 border-1"
                      : ""
                  }`}
                >
                  OUT
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* BOTTOM SECTION */}
        <View style={tw`flex-row items-center mt-8 mb-2 justify-between`}>
          {/* <View style={tw`w-10 h-0.3 bg-gray-400 mr-2`}></View> */}
          <Text style={{ fontFamily: "Grotesk-Bold" }}>Passangers Status</Text>
          {/* <View style={tw`flex-1 h-0.3 bg-gray-400 ml-2 mr-2`}></View> */}
          <FontAwesomeIcon icon={faCircleInfo} style={tw`text-gray-500`} />
        </View>

        <View style={tw`flex-row justify-between mt-4`}>
          <TouchableOpacity
            onPress={() => {
              if (passangerStatus == 1) {
                setPassangerStatus("");
              } else {
                setPassangerStatus("1");
              }
            }}
          >
            <View
              style={tw`bg-gray-200 border border-1 border-gray-400 rounded-2 p-4 ${
                passangerStatus == 1 ? "bg-green-200 border-green-500" : ""
              }`}
            >
              <MaterialIcons name="event-seat" size={24} color="black" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (passangerStatus == 2) {
                setPassangerStatus("");
              } else {
                setPassangerStatus("2");
              }
            }}
          >
            <View
              style={tw`bg-gray-200 border border-1 border-gray-400 rounded-2 p-4 ${
                passangerStatus == 2 ? "bg-amber-200 border-yellow-500" : ""
              }`}
            >
              <MaterialCommunityIcons name="seatbelt" size={24} color="black" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (passangerStatus == 3) {
                setPassangerStatus("");
              } else {
                setPassangerStatus("3");
              }
            }}
          >
            <View
              style={tw`bg-gray-200 border border-1 border-gray-400 rounded-2 p-4 ${
                passangerStatus == 3 ? "bg-orange-200 border-orange-400" : ""
              }`}
            >
              <Ionicons name="md-man-sharp" size={24} color="black" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (passangerStatus == 4) {
                setPassangerStatus("");
              } else {
                setPassangerStatus("4");
              }
            }}
          >
            <View
              style={tw`bg-gray-200 border border-1 border-gray-400 rounded-2 p-4 ${
                passangerStatus == 4 ? "bg-red-200 border-red-500" : ""
              }`}
            >
              <MaterialCommunityIcons
                name="human-queue"
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              updateStatus();
            }}
          >
            <View style={tw`bg-green-600 p-2 rounded-2 mt-8 mb-4`}>
              <Text style={tw`text-white font-bold text-center`}>
                {isLoading ? "waiting..." : "Update"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ModeratorLiveUpdateScreen;

const styles = StyleSheet.create({});
