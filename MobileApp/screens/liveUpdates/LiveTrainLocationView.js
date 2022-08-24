import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import TopBar from "../../components/navigation/TopBar";
import tw from "twrnc";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrainSubway } from "@fortawesome/free-solid-svg-icons";

const LiveTrainLocationView = props => {
  const [stationsList, setStationsList] = useState(null);

  useEffect(() => {
    const fetchStations = () => {
      const endpoint = "http://192.168.1.100:8080/api/v1/schedules/1";
      fetch(endpoint)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setStationsList(data);
        });
    };

    fetchStations();
  }, []);
  return (
    <ScrollView>
      <TopBar title="Train Name" goBack={true} />

      <View style={tw`p-3`}>
        <TouchableOpacity>
          <View style={tw`bg-blue-500 p-3 rounded-2`}>
            <Text style={tw`text-white text-center font-medium`}>Map View</Text>
          </View>
        </TouchableOpacity>

        <View style={tw`mt-4`}>
          {stationsList &&
            stationsList.map(station => (
              <View style={tw`flex-row items-center m-1`}>
                <View style={tw`flex-1`}></View>
                <View style={tw`w-2 h-2 bg-gray-400 rounded-50 mx-3`}></View>
                <View style={tw`flex-1`}>
                  <Text>{station.stationName}</Text>
                </View>
              </View>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default LiveTrainLocationView;

const styles = StyleSheet.create({});
