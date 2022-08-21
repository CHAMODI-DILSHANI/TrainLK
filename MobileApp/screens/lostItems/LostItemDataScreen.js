import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import * as React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const LostItemDataScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>LostItemDataScreen</Text>
    </View>
  );
};

export default LostItemDataScreen;

const styles = StyleSheet.create({});
