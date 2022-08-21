import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../../components/navigation/TopBar";

const TrainLiveUpdatesScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TopBar title="Live Updates" goBack={true} />
      <View style={tw`px-3`}>
        <TouchableOpacity
          style={[
            tw`flex flex-row justify-center items-center bg-[#0074B7] p-2.6 rounded-md`,
          ]}
          onPress={() => navigation.navigate("AvailableTrains")}
        >
          <MaterialCommunityIcons
            style={tw`pr-3`}
            name="train-car-passenger"
            size={20}
            color="white"
          />
          <Text style={tw`font-medium text-white`}>UPDATE TRAINS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TrainLiveUpdatesScreen;

const styles = StyleSheet.create({});
