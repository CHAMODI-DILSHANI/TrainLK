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

const LiveUpdateCard = props => {
  const [selectedColor, setSelectedColor] = useState("");
  useEffect(() => {
    if (props.data.status.mode == "stopped") {
      setSelectedColor("red-500");
    } else if (props.data.status.mode == "passing") {
      setSelectedColor("amber-600");
    } else if (props.data.status.mode == "rtl") {
      setSelectedColor("blue-400");
    } else if (props.data.status.mode == "in") {
      setSelectedColor("green-600");
    } else if (props.data.status.mode == "out") {
      setSelectedColor("amber-800");
    }
  }, []);
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
            if (station.id == props.data.status.stationId) {
              return (
                <View key={station.id} style={tw`flex-col items-center mt-5`}>
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
      <View style={tw`w-full h-0.4 bg-${selectedColor}`}></View>

      {/* middle data part */}
      <View style={tw`flex-row items-center mt-2`}>
        <Text style={tw`font-black text-${selectedColor}`}>
          {props.data.status.station}
        </Text>
        <FontAwesomeIcon icon={faCaretRight} style={tw`mx-2 text-gray-400`} />
        <Text style={tw`font-black text-${selectedColor}`}>
          {props.data.status.mode.toUpperCase()}
        </Text>
        <FontAwesomeIcon icon={faCaretRight} style={tw`mx-2 text-gray-400`} />
        <Text style={tw`font-black text-${selectedColor}`}>
          {props.data.status.time}
        </Text>
      </View>

      <View style={tw`mt-3`}>
        <Text style={tw`text-xs text-gray-800`}>
          last update 30 seconds ago
        </Text>
      </View>
    </View>
  );
};

export default LiveUpdateCard;

const styles = StyleSheet.create({});
