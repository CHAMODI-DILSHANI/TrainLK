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

const ScheduleResultCard = ({ data }) => {
  console.log("inside card");
  console.log(data);
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={tw`border border-gray-400 rounded-2 bg-white p-2 my-2`}>
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
      <ScheduleSearchResultCardStation
        stationName={data.inStation}
        inTime={data.inInfo.in}
        outTime={data.inInfo.out}
      />
      <ScheduleSearchResultCardStation
        stationName={data.outStation}
        inTime={data.outInfo.in}
        outTime={data.outInfo.out}
      />

      <View style={tw`flex-row justify-between mt-6 px-3.5`}>
        <View style={tw`flex-row items-center`}>
          <FontAwesomeIcon icon={faWaveSquare} style={tw`text-gray-500`} />
          <Text style={tw`ml-2 text-gray-600`}>{data.type}</Text>
        </View>
        <View style={tw`flex-row items-center`}>
          <FontAwesomeIcon icon={faCalendarDays} style={tw`text-gray-500`} />
          <Text style={tw`ml-2 text-gray-600`}>{data.frequency}</Text>
        </View>
      </View>

      {expanded && (
        <View>
          <View
            style={tw`flex-row justify-between px-3 border border-white border-t-gray-300 py-2 mt-3`}
          >
            <View style={tw`flex-row`}>
              <FontAwesomeIcon icon={faRoute} />
              <Text style={tw`text-xs ml-2`}>{data.distance} km</Text>
            </View>
            <View style={tw`flex-row`}>
              <FontAwesomeIcon icon={faClockFour} />
              <Text style={tw`text-xs ml-2`}>
                Travel time {data.travelDuration}
              </Text>
            </View>
          </View>

          <View style={tw`px-3 py-1`}>
            <Text style={tw`text-xs font-medium`}>
              Train No: {data.trainInfo[0].trainNo}
            </Text>
            <Text style={tw`text-xs font-medium`}>
              Train Name: {data.trainInfo[0].trainName}
            </Text>
            <Text style={tw`text-xs font-medium`}>
              Start: {data.startStation}
            </Text>
            <Text style={tw`text-xs font-medium`}>End: {data.endStation}</Text>
          </View>

          <Text style={tw`px-3 font-medium text-xs mt-2`}>Stops: </Text>
          <View style={[tw`flex-row flex-wrap mt-2 px-3`]}>
            {data.stations.map(station => (
              <View
                key={station.stationName}
                style={tw`flex-row items-center mr-2`}
              >
                <View style={tw`w-1 h-1 bg-black rounded-100 mr-1`}></View>
                <Text style={tw`text-xs font-medium text-gray-500`}>
                  {station.stationName}
                </Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default ScheduleResultCard;

const styles = StyleSheet.create({});
