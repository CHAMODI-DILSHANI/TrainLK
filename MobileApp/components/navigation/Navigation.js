import { faArrowDown, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={tw`pl-3 flex-row items-center pb-3 -z-10`}>
        <TouchableOpacity
          style={tw`px-1`}
          onPress={() => {
            this.props.navigate.navigate(this.props.goBack);
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </TouchableOpacity>
        <Text style={tw`text-xl font-bold pb-0.6`}>{this.props.content}</Text>
      </View>
    );
  }
}
