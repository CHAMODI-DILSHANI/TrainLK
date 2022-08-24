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
import { useNavigation } from "@react-navigation/native";

const BecomeModeratorFeatures = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`flex flex-col pl-6 pr-6 py-10 bg-[#ffffff]`}>
      <ScrollView style={tw`flex bg-[#ffffff] flex-col h-full `}>
        <Image
          style={[
            tw`h-full w-full`,
            {
              width: 150,
              height: 150,
              backgroundColor: "#fff",
              alignSelf: "center",
            },
          ]}
          source={require("./../../../assets/Moderator/feature1.png")}
        />
        <Text
          style={tw`ml-2 text-sm font-medium text-center text-[#000000] flex-1`}
        >
          You are the pillars holding up our community.
        </Text>

        <Image
          style={tw`h-full w-full`}
          source={require("./../../../assets/Moderator/feature2.png")}
          style={{ backgroundColor: "#fff", alignSelf: "center" }}
        />
        <Text
          style={tw`ml-2 text-sm font-medium text-center text-[#000000] flex-1`}
        >
          You will be able to provide data needed for many features in our
          system.
        </Text>

        <Image
          style={tw`h-full w-full`}
          source={require("./../../../assets/Moderator/feature3.png")}
          style={{
            width: 180,
            height: 150,
            backgroundColor: "#fff",
            alignSelf: "center",
          }}
        />
        <Text
          style={tw`ml-2 text-sm font-medium text-center text-[#000000] flex-1 mb-5`}
        >
          Join with us and help improve our application with your valuable
          contribution.
        </Text>

        <TouchableOpacity
          style={[
            tw`flex flex-row justify-center items-center bg-[#34C759] p-2.3 ml-20 mr-20 mt-5 rounded-md`,
          ]}
          onPress={() => {
            navigation.navigate("BecomeModeratorStep2");
          }}
        >
          <Text style={tw`font-medium text-white`}>Proceed</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default BecomeModeratorFeatures;

const styles = StyleSheet.create({});
