import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrainSubway, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

const ScheduleSearchResultCardStation = ({ stationName, inTime, outTime }) => {
  return (
    <View style={tw`px-2`}>
      <View style={tw`flex-row`}>
        <View style={tw`h-15 w-7 items-center justify-center`}>
          <View style={tw`w-0.4 flex-1 bg-gray-600`}></View>
          <FontAwesomeIcon
            icon={faTrainSubway}
            style={tw`text-gray-600 my-2`}
          />
          <View style={tw`w-0.4 flex-1 bg-gray-600`}></View>
        </View>
        <View style={tw`h-15 w-30 p-2`}>
          <View style={tw`m-auto`}>
            <View style={tw`flex-row mb-1`}>
              <View
                style={{
                  backgroundColor: "#FFDA58",
                  width: 40,
                  borderRadius: 4,
                  marginRight: 7,
                }}
              >
                <Text style={tw`text-center text-xs font-medium`}>IN</Text>
              </View>
              <View>
                <Text style={tw`text-xs font-medium text-gray-500`}>
                  11:45AM
                </Text>
              </View>
            </View>
            <View style={tw`flex-row`}>
              <View
                style={{
                  backgroundColor: "#62E57F",
                  width: 40,
                  borderRadius: 4,
                  marginRight: 7,
                }}
              >
                <Text style={tw`text-center text-xs font-medium`}>OUT</Text>
              </View>
              <View>
                <Text style={tw`text-xs font-medium`}>11:45AM</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={tw`h-15 w-7 flex-row items-center`}>
          <FontAwesomeIcon icon={faCaretLeft} style={tw` m-auto`} />
        </View>
        <View style={tw`flex-1 h-15 justify-center`}>
          <Text style={tw`font-medium my-auto ml-2`}>Colombo Fort</Text>
        </View>
      </View>
    </View>
  );
};

export default ScheduleSearchResultCardStation;

const styles = StyleSheet.create({});
