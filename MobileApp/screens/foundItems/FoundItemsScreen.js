import { StyleSheet, View, ScrollView } from "react-native";
import { Provider, FAB } from "react-native-paper";
import * as React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

import TopBar from "../../components/navigation/TopBar";
import InfoCard from "../../components/communityUpdates/InfoCard";
import FoundItemDataScreen from "./FoundItemDataScreen";

const FoundItemsScreen = () => {
  const navigation = useNavigation();

  return (
    <Provider>
      <View style={tw`h-full`}>
        <View>
          <TopBar title="Found Items" goBack={true} />
        </View>
        <ScrollView style={[tw`my-2 px-4`]}>
          <View style={tw`mb-6`}>
            <InfoCard
              imageUri="https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/premium/wallet-dynamic-premium.png"
              data="On 01.08.2022, a leather wallet was left in the train runningm from Mirigama to Colombo Fort. National Identity Card , Bank
                Cards and Driving License
                (071-1234567)"
              time="3 hrs"
            ></InfoCard>
          </View>
        </ScrollView>
        <FAB
          icon="pen"
          style={tw`absolute bottom-10 right-6 bg-[#8aade6]`}
          onPress={() => navigation.navigate(FoundItemDataScreen)}
          mode="flat"
          // color="#8aade6"
        />
      </View>
    </Provider>
  );
};

export default FoundItemsScreen;

const styles = StyleSheet.create({});
