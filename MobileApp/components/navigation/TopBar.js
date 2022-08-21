import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBell,
  faUser,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const TopBar = props => {
  const navigation = useNavigation();

  return (
    <View style={tw`px-3 py-3 flex-row items-center justify-between bg-white`}>
      {props.goBack && (
        <TouchableOpacity
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            }
          }}
        >
          <View style={[tw`bg-gray-100 p-3 rounded-50`]}>
            <FontAwesomeIcon icon={faChevronLeft} style={tw`text-blue-400`} />
          </View>
        </TouchableOpacity>
      )}
      <Text style={tw`text-lg font-bold`}>{props.title}</Text>
      <View style={tw`flex-row items-center`}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ProfileScreen");
          }}
        >
          <FontAwesomeIcon icon={faUser} style={tw`mr-4`} />
        </TouchableOpacity>
        <FontAwesomeIcon icon={faBell} />
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({});
