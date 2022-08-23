import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import TopBar from "../../components/navigation/TopBar";

const HomeScreen = () => {
  const navigation = useNavigation();

  const { accessToken, refreshToken } = useContext(AuthContext);

  const navigationOptions = [
    {
      id: 1,
      title: "Train Schedule",
      screen: "TrainScheduleSearchScreen",
      img: "https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/premium/calender-dynamic-premium.png",
    },
    {
      id: 2,
      title: "Live Updates",
      screen: "TrainLiveUpdatesScreen",
      img: "https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/premium/map-pin-dynamic-premium.png",
    },
    {
      id: 3,
      title: "News Updates",
      screen: "NewsUpdatesScreen",
      img: "https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/premium/copy-dynamic-premium.png",
    },
    {
      id: 4,
      title: "Community Updates",
      screen: "CommunityUpdatesScreen",
      img: "https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/premium/travel-dynamic-premium.png",
    },
    {
      id: 5,
      title: "Station Info",
      screen: "LostItemsScreen",
      img: "https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/premium/travel-dynamic-premium.png",
    },
    {
      id: 5,
      title: "BookingSearchScreen",
      screen: "BookingSearchScreen",
      img: "https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/premium/travel-dynamic-premium.png",
    },
  ];
  return (
    <SafeAreaView
      style={[tw`px-3`, { backgroundColor: "#fff", height: "100%" }]}
    >
      <TopBar title="TrainLK" />
      <FlatList
        numColumns={2}
        data={navigationOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={tw`flex-1 m-1.5 bg-gray-200 p-3 h-50`}
          >
            <View>
              <Image
                style={{ width: 70, height: 70, marginBottom: 20 }}
                source={{ uri: item.img }}
              />
              <Text style={tw`font-semibold`}>{item.title}</Text>
              <Icon
                type="antdesign"
                name="arrowright"
                color="white"
                style={tw`bg-black rounded-full w-8 h-8 justify-center my-4`}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
