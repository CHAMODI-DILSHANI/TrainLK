import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import TopBar from "../../components/navigation/TopBar";
import tw from "twrnc";

const ProfileScreen = () => {
  const { logout } = useContext(AuthContext);

  return (
    <View style={tw`bg-white`}>
      <TopBar title="Profile" goBack={true} />

      <TouchableOpacity
        onPress={() => {
          logout();
        }}
      >
        <View style={tw`p-2 bg-gray-200 m-3 rounded-2`}>
          <Text style={tw`text-center text-blue-400 font-medium`}>logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
