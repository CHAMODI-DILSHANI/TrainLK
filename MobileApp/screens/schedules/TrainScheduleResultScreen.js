import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import ScheduleResultCard from "../../components/schedule/ScheduleResultCard";
import TopBar from "../../components/navigation/TopBar";

const TrainScheduleResultScreen = (data) => {
  // console.log("result Screen");
  console.log(data.route.params);
  return data.route.params[0] != undefined ? (
    <ScrollView>
      <View style={tw`bg-white mb-2`}>
        <TopBar title="Results" goBack={true} />
      </View>

      <View style={tw`px-3`}>
        {data.route.params[0].map((r) => (
          <ScheduleResultCard key={r.scheduleID} data={r} />
        ))}

        {/* <ScheduleResultCard />
        <ScheduleResultCard /> */}
      </View>
    </ScrollView>
  ) : (
    <View>
      <View style={tw`bg-white`}>
        <TopBar title="Results" goBack={true} />
      </View>
      <View style={tw`h-full w-full justify-center bg-white`}>
        {/* <View style={tw`bg-white mb-2`}>
        <TopBar title="Results" goBack={true} />
      </View> */}
        <Image
          style={tw`h-100 w-100 -mt-80`}
          resizeMethod="resize"
          source={require("../../assets/schedule/searching.gif")}
        />
        <View style={tw`items-center -mt-20`}>
          <Text style={tw`text-xl`}>No Results Found</Text>
          <Text style={tw`text-gray-400`}>
            We can't find any item matching your search
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TrainScheduleResultScreen;

const styles = StyleSheet.create({});
