import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../../components/navigation/TopBar";
import { AuthContext } from "../../context/AuthContext";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faTrainSubway,
  faCaretRight,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import LiveUpdateCard from "../../components/liveUpdates/LiveUpdateCard";

const TrainLiveUpdatesScreen = () => {
  const navigation = useNavigation();

  const { accessToken } = useContext(AuthContext);
  const [isModerator, setIsModerator] = useState(false);

  const data1 = {
    start: "Maradana",
    end: "Beliattha",
    status: {
      stationId: "004",
      station: "Moratuwa",
      mode: "stopped",
      time: "11:45AM",
    },
    stations: [
      { id: "001", name: "colombo fort" },
      { id: "002", name: "colombo fort" },
      { id: "003", name: "colombo fort" },
      { id: "004", name: "colombo fort" },
      { id: "005", name: "colombo fort" },
      { id: "006", name: "colombo fort" },
      { id: "007", name: "colombo fort" },
    ],
    lastUpdateTime: "11:12",
  };

  const data2 = {
    start: "Maradana",
    end: "Beliattha",
    status: {
      stationId: "004",
      station: "Moratuwa",
      mode: "passing",
      time: "11:45AM",
    },
    stations: [
      { id: "001", name: "colombo fort" },
      { id: "002", name: "colombo fort" },
      { id: "003", name: "colombo fort" },
      { id: "004", name: "colombo fort" },
      { id: "005", name: "colombo fort" },
      { id: "006", name: "colombo fort" },
      { id: "007", name: "colombo fort" },
      { id: "008", name: "colombo fort" },
      { id: "009", name: "colombo fort" },
      { id: "010", name: "colombo fort" },
      { id: "011", name: "colombo fort" },
    ],
    lastUpdateTime: "11:12",
  };

  const data3 = {
    start: "Maradana",
    end: "Beliattha",
    status: {
      stationId: "004",
      station: "Moratuwa",
      mode: "in",
      time: "11:45AM",
    },
    stations: [
      { id: "001", name: "colombo fort" },
      { id: "002", name: "colombo fort" },
      { id: "003", name: "colombo fort" },
      { id: "004", name: "colombo fort" },
      { id: "005", name: "colombo fort" },
      { id: "006", name: "colombo fort" },
      { id: "007", name: "colombo fort" },
    ],
    lastUpdateTime: "11:12",
  };

  useEffect(() => {
    var decoded = jwt_decode(accessToken);
    if (decoded.role == "moderator" || decoded.role == "admin") {
      setIsModerator(true);
    }
  }, []);

  return (
    <ScrollView>
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

      <View style={tw`p-3`}>
        {/* CARD */}
        <LiveUpdateCard data={data1} />
        <LiveUpdateCard data={data2} />
        <LiveUpdateCard data={data3} />
        <LiveUpdateCard data={data1} />
      </View>
    </ScrollView>
  );
};

export default TrainLiveUpdatesScreen;

const styles = StyleSheet.create({});
