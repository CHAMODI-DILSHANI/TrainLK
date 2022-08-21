import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import ScheduleResultCard from "../../components/schedule/ScheduleResultCard";
import TopBar from "../../components/navigation/TopBar";

const TrainScheduleResultScreen = () => {
  return (
    <ScrollView style={tw`px-3`}>
      <TopBar title="Results" goBack={true} />

      <ScheduleResultCard />
      <ScheduleResultCard />
      <ScheduleResultCard />
    </ScrollView>
  );
};

export default TrainScheduleResultScreen;

const styles = StyleSheet.create({});
