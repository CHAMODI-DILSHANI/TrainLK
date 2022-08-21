import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const TrainLiveUpdatesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainBody}>
      <Text>TrainLiveUpdatesScreen</Text>
      <View style={tw`mt-5`}>
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
          <Text style={tw`font-medium text-white`}>VIEW AVAILABLE TRAINS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TrainLiveUpdatesScreen;

const styles = StyleSheet.create({
  mainBody: {
    padding: 20,
  },
});
