import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faTrainSubway,
  faCaretRight,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useState } from "react";
import utils from "../../utils";

const LiveUpdateCard = props => {
  const [selectedColor, setSelectedColor] = useState("");
  const [trainInfo, setTrainInfo] = useState(null);
  const [stationName, setStationName] = useState(null);
  const [currentStationArrivalTime, setCurrentStationArrivalTime] =
    useState(null);

  useEffect(() => {
    // Fetch station info
    function fetchTrainInfo() {
      const endpoint = `${utils.lanip}/update/status/${props.data.scheduleID}`;
      fetch(endpoint)
        .then(response => response.json())
        .then(json => {
          // console.log(json);
          setTrainInfo(json);
        })
        .catch(err => {});
    }

    fetchTrainInfo();

    const reloadData = setInterval(() => {
      fetchTrainInfo();
    }, 5000);
    return () => clearInterval(reloadData);
  }, []);

  useEffect(() => {
    function fetchStationName() {
      const endpoint = `${utils.lanip}/update/station/${trainInfo.stationID}`;
      fetch(endpoint)
        .then(response => response.json())
        .then(json => {
          // console.log(json.stationName);
          setStationName(json.stationName);
        });
    }

    // 192.168.1.4:8080/api/v1/update/get-station-arrival-time/2/87

    function fetchStationArrivalTime() {
      const endpoint = `${utils.lanip}/update/get-station-arrival-time/${props.data.scheduleID}/${trainInfo.stationID}`;
      fetch(endpoint)
        .then(response => response.json())
        .then(json => {
          console.log("------------");
          console.log(json);
          setCurrentStationArrivalTime(json.arrivalTime);
        })
        .catch(err => {});
    }

    if (trainInfo) {
      fetchStationName();
      fetchStationArrivalTime();
    }

    if (trainInfo && trainInfo.status == "STOPPED") {
      setSelectedColor("red-500");
    } else if (trainInfo && trainInfo.status == "OUT") {
      setSelectedColor("green-600");
    } else {
      setSelectedColor("black");
    }

    // var newArray = props.data.stations.filter(function (el) {
    //   return el.stationName == stationName;
    // });
    // console.log("---------Station OBJ---------");

    // console.log(props.data.stations);
    // console.log(newArray);
  }, [trainInfo]);

  return (
    <View style={tw`w-full p-3 my-2 bg-white border border-gray-400 rounded-2`}>
      {/* Top Part */}

      <View style={tw`flex-row items-center mb-2`}>
        <Text style={[tw`font-medium mr-2`, { fontSize: 18 }]}>
          {props.data.start}
        </Text>
        <FontAwesomeIcon icon={faCaretRight} />
        <Text style={[tw`font-medium ml-2`, { fontSize: 18 }]}>
          {props.data.end}
        </Text>
      </View>
      {/* Middle Part */}
      <View style={tw`flex-row justify-between items-center`}>
        <FontAwesomeIcon icon={faTrainSubway} style={tw`text-gray-600`} />
        <View style={tw`w-2 h-0.2 bg-gray-700 ml-1`}></View>
        <View style={tw`flex-row justify-between flex-1 items-center`}>
          {props.data.stations.map(station => {
            // change 87 to selected station id
            if (trainInfo && station.stationID == trainInfo.stationID) {
              return (
                <View
                  key={station.stationID}
                  style={tw`flex-col items-center mt-5`}
                >
                  <View
                    style={tw`p-2 bg-${selectedColor} border border-${selectedColor} rounded-50`}
                  >
                    <FontAwesomeIcon
                      icon={faTrainSubway}
                      style={tw`text-white`}
                    />
                  </View>
                  <FontAwesomeIcon
                    icon={faCaretUp}
                    style={tw`text-${selectedColor}`}
                  />
                </View>
              );
            } else {
              return (
                <View
                  key={station.id}
                  style={tw`w-1 h-1 rounded-50 bg-blue-500`}
                ></View>
              );
            }
          })}
        </View>
        <View style={tw`w-2 h-0.3 bg-gray-700 mr-1`}></View>
        <FontAwesomeIcon icon={faTrainSubway} style={tw`text-gray-600`} />
      </View>

      {/* middle horizontal line Part */}
      <View style={tw`w-full h-0.4 mt-2 bg-${selectedColor}`}></View>

      {/* middle data part */}
      <View style={tw`flex-row items-center mt-2`}>
        <Text style={tw`font-black text-${selectedColor}`}>{stationName}</Text>
        <FontAwesomeIcon icon={faCaretRight} style={tw`mx-2 text-gray-400`} />
        <Text style={tw`font-black text-${selectedColor}`}>
          {trainInfo && trainInfo.status}
        </Text>
        <FontAwesomeIcon icon={faCaretRight} style={tw`mx-2 text-gray-400`} />
        <Text style={tw`font-black text-${selectedColor}`}>
          {trainInfo && trainInfo.time}
        </Text>
      </View>

      <View style={tw`mt-3`}>
        <Text style={tw`text-xs text-gray-800`}>
          {/* last update 30 seconds ago */}
          {`Expected arrival time: ${currentStationArrivalTime}`}
        </Text>
      </View>
    </View>
  );
};

export default LiveUpdateCard;

const styles = StyleSheet.create({});
