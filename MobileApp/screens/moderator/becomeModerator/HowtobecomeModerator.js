import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { CardImage } from "react-native-cards";
import React from "react";
import tw from "twrnc";

const HowtobecomeModerator = () => {
  return (
    <View style={tw`flex flex-col pl-6 pr-6 py-10 bg-[#ffffff]`}>
      <ScrollView style={tw`flex bg-[#ffffff] flex-col h-full `}>
        <Image
          source={require("./../../../assets/Moderator/howtobecome1.png")}
          style={{
            width: 120,
            height: 120,
            backgroundColor: "#fff",
            alignSelf: "center",
          }}
        />
        <Text
          style={tw`ml-2 text-sm font-medium text-center text-[#000000] flex-1`}
        >
          You can provide us necessary data with a simple click!
        </Text>

        <Image
          source={require("./../../../assets/Moderator/howtobecome2.png")}
          style={{
            width: 180,
            height: 150,
            backgroundColor: "#fff",
            alignSelf: "center",
          }}
        />
        <Text
          style={tw`ml-2 text-sm font-medium text-center text-[#000000] flex-1`}
        >
          We will review your data to help improve the quality of our system.
        </Text>

        <Image
          source={require("./../../../assets/Moderator/howtobecome3.png")}
          style={{
            width: 180,
            height: 150,
            backgroundColor: "#fff",
            alignSelf: "center",
          }}
        />
        <Text
          style={tw`ml-2 text-sm font-medium text-center text-[#000000] flex-1 mb-7`}
        >
          Now you are a moderator contributing to our system!
        </Text>

        <TouchableOpacity
          style={[
            tw`flex flex-row justify-center items-center bg-[#34C759] p-2.3 ml-20 mr-20 mt-5 rounded-md`,
          ]}
          //   onPress={() => {
          //   }}
        >
          <Text style={tw`font-medium text-white`}>Proceed</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default HowtobecomeModerator;

const styles = StyleSheet.create({});
