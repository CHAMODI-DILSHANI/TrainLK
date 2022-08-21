import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { React, useState } from "react";
import tw from "twrnc";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faCalendarDays,
  faWaveSquare,
  faClockFour,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";
import ScheduleSearchResultCardStation from "./ScheduleSearchResultCardStation";

const ScheduleResultCard = ({ startStationInfo, endStationInfo }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={tw`border border-gray-300 rounded-2 bg-white p-2 my-2`}>
      <View style={tw`flex-row justify-end`}>
        {!expanded && (
          <TouchableOpacity
            onPress={() => {
              setExpanded(true);
            }}
          >
            <FontAwesomeIcon icon={faAngleDown} />
          </TouchableOpacity>
        )}

        {expanded && (
          <TouchableOpacity
            onPress={() => {
              setExpanded(false);
            }}
          >
            <FontAwesomeIcon icon={faAngleUp} />
          </TouchableOpacity>
        )}
      </View>

      {/* pass props here */}
      <ScheduleSearchResultCardStation />
      <ScheduleSearchResultCardStation />

      <View style={tw`flex-row justify-between mt-6 px-3.5`}>
        <View style={tw`flex-row items-center`}>
          <FontAwesomeIcon icon={faWaveSquare} style={tw`text-gray-500`} />
          <Text style={tw`ml-2 text-gray-600`}>Express train</Text>
        </View>
        <View style={tw`flex-row items-center`}>
          <FontAwesomeIcon icon={faCalendarDays} style={tw`text-gray-500`} />
          <Text style={tw`ml-2 text-gray-600`}>Daily</Text>
        </View>
      </View>

      {expanded && (
        <View>
          <View
            style={tw`flex-row justify-between px-3 border border-white border-t-gray-300 py-2 mt-3`}
          >
            <View style={tw`flex-row`}>
              <FontAwesomeIcon icon={faRoute} />
              <Text style={tw`text-xs ml-2`}>50 km</Text>
            </View>
            <View style={tw`flex-row`}>
              <FontAwesomeIcon icon={faClockFour} />
              <Text style={tw`text-xs ml-2`}>Travel time 45 minutes</Text>
            </View>
          </View>

          <View style={tw`px-3 py-1`}>
            <Text style={tw`text-xs font-medium`}>Train No: {"4080"}</Text>
            <Text style={tw`text-xs font-medium`}>
              Train Name: {"Samudra devi"}
            </Text>
            <Text style={tw`text-xs font-medium`}>Start: {"Colombo fort"}</Text>
            <Text style={tw`text-xs font-medium`}>End: {"Galle"}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default ScheduleResultCard;

const styles = StyleSheet.create({});
