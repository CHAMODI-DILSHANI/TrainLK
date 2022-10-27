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
import utils from "../../utils";

const TrainLiveUpdatesScreen = () => {
  const navigation = useNavigation();

  const { accessToken } = useContext(AuthContext);
  const [isModerator, setIsModerator] = useState(false);
  const [availableTrains, setAvailableTrains] = useState([]);
  const [dataOfTrains, setDataOfTrains] = useState(null);

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
    start: "Colombo fort",
    end: "Badulla",
    status: {
      stationId: "004",
      station: "Maradana",
      mode: "passing",
      time: "11:42AM",
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
    start: "Avissawella",
    end: "Colombo fort",
    status: {
      stationId: "004",
      station: "Moratuwa",
      mode: "OUT",
      time: "11:50AM",
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

  const data4 = {
    start: "Chilaw",
    end: "Puttalama",
    status: {
      stationId: "004",
      station: "Katunayeka",
      mode: "STOPPED",
      time: "11:50AM",
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

    function fetchAvailableTrains() {
      const endpoint = `${utils.lanip}/update/available-trains`;
      fetch(endpoint)
        .then(response => response.json())
        .then(json => {
          // console.log("====== Available Trains ======");
          // console.log(json);
          setAvailableTrains(json);
        })
        .catch(err => {});
    }

    function fetchAvailableTrainsWithInfo() {
      const endpoint = `${utils.lanip}/update/available-trains-with-all-stations`;
      fetch(endpoint)
        .then(response => response.json())
        .then(json => {
          // console.log("====== Available Trains with info ======");
          // console.log(json);
          setDataOfTrains(json);
        })
        .catch(err => {});
    }

    fetchAvailableTrains();
    fetchAvailableTrainsWithInfo();
  }, []);

  useEffect(() => {
    if (dataOfTrains) {
      console.log(dataOfTrains[0].info);
    }
  }, [dataOfTrains]);

  // useEffect(() => {
  //   function fetchAvailableTrainsInfo(scheduleID) {
  //     const endpoint = `${utils.lanip}/update/stations/${scheduleID}`;
  //     fetch(endpoint)
  //       .then(response => response.json())
  //       .then(json => {
  //         // console.log("====== info Trains ======");
  //         // console.log(json);
  //         setDataOfTrains([...dataOfTrains, json]);
  //       })
  //       .catch(err => {});
  //   }

  //   if (availableTrains.length != 0) {
  //     availableTrains.forEach(train => {
  //       console.log(`fetching... ${train.scheduleID}`);
  //       fetchAvailableTrainsInfo(train.scheduleID);
  //     });
  //   }
  // }, [availableTrains]);

  // useEffect(() => {
  //   console.log("*********** Info **********");
  //   console.log(dataOfTrains);
  // }, [dataOfTrains]);

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

      {dataOfTrains &&
        availableTrains.map((trainData, index) => (
          <View style={tw`p-3`} key={trainData.scheduleID}>
            {/* CARD */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("LiveTrainLocationScreen");
              }}
            >
              <LiveUpdateCard
                data={{
                  start: trainData.info[0].stationName,
                  end: trainData.info[1].stationName,
                  scheduleID: trainData.scheduleID,
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
                  stations: dataOfTrains[index].info,
                }}
              />
            </TouchableOpacity>
            {/* <LiveUpdateCard data={data2} />
          <LiveUpdateCard data={data3} />
          <LiveUpdateCard data={data4} /> */}
          </View>
        ))}
    </ScrollView>
  );
};

export default TrainLiveUpdatesScreen;

const styles = StyleSheet.create({});
