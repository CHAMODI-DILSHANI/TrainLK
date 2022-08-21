import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import ScheduleResultCard from "../../components/schedule/ScheduleResultCard";
import TopBar from "../../components/navigation/TopBar";

const TrainScheduleResultScreen = () => {
  return (
    <ScrollView>
      <View style={tw`bg-white mb-2`}>
        <TopBar title="Results" goBack={true} />
      </View>

      <View style={tw`px-3`}>
        <ScheduleResultCard />
        <ScheduleResultCard />
        <ScheduleResultCard />
      </View>
    </ScrollView>
  );
};

export default TrainScheduleResultScreen;

const styles = StyleSheet.create({});
