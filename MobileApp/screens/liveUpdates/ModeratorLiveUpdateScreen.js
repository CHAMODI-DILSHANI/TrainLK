import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
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

import { useFonts } from "expo-font";
import TopBar from "../../components/navigation/TopBar";

import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const ModeratorLiveUpdateScreen = () => {
  const [status, setStatus] = useState("");
  const [stations, setStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState("");
  const [passangerStatus, setPassangerStatus] = useState("");

  const [fontsLoaded] = useFonts({
    "Grotesk-Regular": require("./../../assets/fonts/FamiljenGrotesk-Regular.ttf"),
    "Grotesk-Medium": require("./../../assets/fonts/FamiljenGrotesk-Medium.ttf"),
    "Grotesk-SemiBold": require("./../../assets/fonts/FamiljenGrotesk-SemiBold.ttf"),
    "Grotesk-Bold": require("./../../assets/fonts/FamiljenGrotesk-Bold.ttf"),
  });

  useEffect(() => {
    setStations([
      "Colombo fort",
      "Mount Lavinia",
      "Moratuwa",
      "Panadura",
      "Kaluthara south",
      "Aluthgama",
      "Benthota",
      "Ambalangoda",
      "Hikkaduwa",
      "Galle",
    ]);

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

  return (
    <ScrollView>
      <TopBar title="Update" goBack={true} />
      <View
        style={tw`bg-white px-3 py-3 mx-3 rounded-2 border border-1 border-gray-300`}
      >
        {/* TOP SECTION */}
        <View style={tw`flex-row items-center justify-between mb-2`}>
          {/* <View style={tw`w-10 h-0.3 bg-gray-400 mr-2`}></View> */}
          <Text>Train Status</Text>
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
            <Text style={{ flex: 1 }}>Colombo Fort</Text>
            <FontAwesomeIcon icon={faCaretUp} style={tw`text-blue-800`} />
            <Text
              style={{
                flex: 1,
                textAlign: "right",
              }}
            >
              Beliaththa
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
                {stations[selectedStation]}
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
                    status === "IN"
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
                    status === "PASSING"
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
                    status === "STOPPED"
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
                    status === "RTL"
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
                    status === "OUT" ? "bg-red-200 border-red-400 border-1" : ""
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
          <TouchableOpacity>
            <View style={tw`bg-green-600 p-2 rounded-2 mt-8 mb-4`}>
              <Text style={tw`text-white font-bold text-center`}>Update</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ModeratorLiveUpdateScreen;

const styles = StyleSheet.create({});
