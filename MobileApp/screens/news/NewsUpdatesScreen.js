import { StyleSheet, View, ScrollView } from "react-native";
import * as React from "react";
import { Provider, FAB } from "react-native-paper";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../../components/navigation/TopBar";
import NewsInfoCard from "../../components/communityUpdates/NewsInfoCard";
import NewsUpdateDataScreen from "./NewsUpdateDataScreen";

const NewsUpdatesScreen = () => {
  const navigation = useNavigation();

  return (
    <Provider>
      <View style={tw`h-full`}>
        <View>
          <TopBar title="News Updates" goBack={true} />
        </View>
        <ScrollView style={[tw`my-2 px-4`]}>
          <View style={tw`mb-6`}>
            <NewsInfoCard
              title="News Heading"
              data="News Details and everything typed in news data is here......"
              time="3 hrs"
            />
          </View>
        </ScrollView>
        <FAB
          icon="pen"
          style={tw`absolute bottom-10 right-6 bg-[#8aade6]`}
          onPress={() => navigation.navigate(NewsUpdateDataScreen)}
          mode="flat"
        />
      </View>
    </Provider>
  );
};

export default NewsUpdatesScreen;

const styles = StyleSheet.create({});
