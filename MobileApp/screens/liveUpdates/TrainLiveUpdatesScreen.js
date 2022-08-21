import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../../components/navigation/TopBar";
import { AuthContext } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const TrainLiveUpdatesScreen = () => {
  const navigation = useNavigation();

  const { accessToken } = useContext(AuthContext);
  const [isModerator, setIsModerator] = useState(false);

  useEffect(() => {
    var decoded = jwt_decode(accessToken);
    if (decoded.role == "moderator" || decoded.role == "admin") {
      setIsModerator(true);
    }
  }, []);

  return (
    <View>
      <TopBar title="Live Updates" goBack={true} />
      <View style={tw`px-3`}>
        {isModerator && (
          <TouchableOpacity
            style={[
              tw`flex flex-row justify-center items-center bg-[#0074B7] p-2.6 rounded-md`,
            ]}
            onPress={() => navigation.navigate("AvailableTrains")}
          >
            <MaterialCommunityIcons
              style={tw`pr-3`}
              name="train-car-passenger"
              size={20}
              color="white"
            />
            <Text style={tw`font-medium text-white`}>UPDATE TRAINS</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TrainLiveUpdatesScreen;

const styles = StyleSheet.create({});
