import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import TopBar from "../../components/navigation/TopBar";

const AvailableTrainsScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <TopBar title="Available Trains" goBack={true} />

      <View style={tw`px-3`}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ModeratorLiveUpdateScreen");
          }}
        >
          <View
            style={[
              tw`flex-row bg-[#ffffff] p-3.5 rounded-md my-3.5 border-[#444444]`,
              { elevation: 3, shadowColor: "black" },
            ]}
          >
            <MaterialIcons
              style={tw`self-center`}
              name="train"
              size={35}
              color="#444444"
            />
            <View style={tw`flex-col ml-3 flex-1`}>
              <Text style={tw`text-lg font-medium`}>Train Name</Text>
              <View style={tw`flex-row`}>
                <Text style={tw`flex-0.5 text-[#444444] text-base font-normal`}>
                  Starting station
                </Text>
                <Text style={tw`flex-0.5 text-[#444444] text-base font-normal`}>
                  Ending station
                </Text>
              </View>
              <View style={tw`flex-row`}>
                <Text style={tw`flex-0.5 text-[#444444] text-xs font-light`}>
                  10.25 AM
                </Text>
                <Text style={tw`flex-0.5 text-[#444444] text-xs font-light`}>
                  4.30 PM
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AvailableTrainsScreen;

const styles = StyleSheet.create({
  mainBody: {
    padding: 20,
  },
});
