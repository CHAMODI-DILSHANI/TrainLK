import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as React from "react";
import tw from "twrnc";
import TopBar from "../../components/navigation/TopBar";
import { useNavigation } from "@react-navigation/native";
import LostItemsScreen from "../lostItems/LostItemsScreen";
import FoundItemsScreen from "../foundItems/FoundItemsScreen";
import CommunityNewsUpdatesScreen from "../communityNewsUpdates.js/CommunityNewsUpdatesScreen";

const CommunityUpdatesScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TopBar title="Community Updates" goBack={true} />
      <View style={[tw`mt-2 px-3`]}>
        <TouchableOpacity
          style={[
            tw`flex-row bg-[#ffffff] rounded-xl p-4 mt-5 items-center`,
            { elevation: 3, shadowColor: "black" },
          ]}
          onPress={() => navigation.navigate(LostItemsScreen)}
        >
          <Text>Lost Items</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`flex-row bg-[#ffffff] rounded-xl p-4 mt-5 items-center`,
            { elevation: 3, shadowColor: "black" },
          ]}
          onPress={() => navigation.navigate(FoundItemsScreen)}
        >
          <Text>Found Items</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`flex-row bg-[#ffffff] rounded-xl p-4 mt-5 items-center`,
            { elevation: 3, shadowColor: "black" },
          ]}
          onPress={() => navigation.navigate(CommunityNewsUpdatesScreen)}
        >
          <Text>Community News Updates</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommunityUpdatesScreen;

const styles = StyleSheet.create({});
