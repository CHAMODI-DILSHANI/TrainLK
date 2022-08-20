import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

const LostItemsScreen = () => {
  return (
    <View style={tw`h-full`}>
      {/* <Text>LostItemsScreen</Text> */}
      <View style={tw`h-1/4`}>
        <Image
          style={tw`h-full w-full`}
          blurRadius={10}
          // resizeMode="cover"
          source={require("./../../assets/lost_and_found/lost-found.png")}
        />
      </View>
      <View style={tw`h-1/5 px-15 -mt-24`}>
        <Image
          style={tw`h-full rounded-2xl w-full`}
          // blurRadius={10}
          resizeMode="cover"
          source={require("./../../assets/lost_and_found/lost-found.png")}
        />
      </View>
      <View style={[styles.mainBody, tw`mt-2`]}>
        {/* <TouchableOpacity> */}
        <TouchableOpacity
          style={[
            tw`flex-row h-40 bg-[#ffffff] rounded-xl p-4 mt-5`,
            { elevation: 3, shadowColor: "black" },
          ]}
          // style={tw`flex-row h-40 bg-[#e4e7e7] rounded-xl p-4 mt-5`}
        >
          <Image
            style={tw`h-25 w-25 flex-0.25 `}
            // blurRadius={10}
            // resizeMode="cover"
            source={{
              uri: "https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/premium/wallet-dynamic-premium.png",
            }}
            resizeMode={"cover"}
          />
          <View style={[tw`flex-col flex-0.75`]}>
            <Text
              style={[
                tw`px-4 text-base text-justify flex-auto text-[#444444]`,
                { flexWrap: "wrap" },
              ]}
              numberOfLines={4}
            >
              On 01.08.2022, a leather wallet was left in the train running from
              Mirigama to Colombo Fort. National Identity Card , Bank Cards and
              Driving License
            </Text>
            <View style={[tw`flex-row px-4 flex-row-reverse`]}>
              <Text style={tw`pl-2 text-[#444444] font-semibold`}>
                3 hrs ago
              </Text>
              <FontAwesomeIcon icon={faClockRotateLeft} color={"#444444"} />
            </View>
          </View>
        </TouchableOpacity>
        {/* </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default LostItemsScreen;

const styles = StyleSheet.create({
  mainBody: {
    padding: 15,
    // fontFamily: "Poppins-Regular",
  },
});
