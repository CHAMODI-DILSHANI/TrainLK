import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import ScheduleResultCard from "../../components/schedule/ScheduleResultCard";
import TopBar from "../../components/navigation/TopBar";

const TrainScheduleResultScreen = (data) => {
  // console.log("result Screen");
  console.log(data.route.params);
  return (
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
  );
};

export default TrainScheduleResultScreen;

const styles = StyleSheet.create({});
