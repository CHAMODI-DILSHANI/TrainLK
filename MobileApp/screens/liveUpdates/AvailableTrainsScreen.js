import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import TopBar from "../../components/navigation/TopBar";
import utils from "../../utils";

const AvailableTrainsScreen = () => {
  const navigation = useNavigation();

  const [availableTrains, setAvailableTrains] = useState([]);

  useEffect(() => {
    function fetchAvailableTrains() {
      const endpoint = `${utils.lanip}/update/available-trains`;
      fetch(endpoint)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          setAvailableTrains(json);
        });
    }
    fetchAvailableTrains();
  }, []);

  return (
    <ScrollView>
      <TopBar title="Available Trains" goBack={true} />

      <View style={tw`px-3`}>
        {availableTrains.map(trainData => (
          <TouchableOpacity
            key={trainData.scheduleID}
            style={tw`flex-row p-2 m-2 border border-1 border-gray-300`}
            onPress={() => {
              navigation.navigate("ModeratorLiveUpdateScreen", {
                data: trainData,
              });
            }}
          >
            <View style={tw`flex-row mr-2`}>
              <MaterialIcons
                style={tw`self-center`}
                name="train"
                size={35}
                color="#444444"
              />
            </View>
            <View style={tw`flex flex-row`}>
              <View style={tw``}>
                <Text>{trainData.info[0].stationName}</Text>
                <Text>{trainData.info[0].arrivalTime}</Text>
                <Text>{trainData.info[0].departureTime}</Text>
              </View>

              <View style={tw`flex-row`}>
                <MaterialIcons
                  style={tw`self-center`}
                  name="arrow-right"
                  size={35}
                  color="#444444"
                />
              </View>

              <View style={tw``}>
                <Text>{trainData.info[1].stationName}</Text>
                <Text>{trainData.info[1].arrivalTime}</Text>
                <Text>{trainData.info[1].departureTime}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate("ModeratorLiveUpdateScreen");
          }}
        >
          <View
            style={[
              tw`flex-row bg-[#ffffff] p-3.5 rounded-md my-3.5 border-[#444444]`,
              { elevation: 3, shadowColor: "black" },
            ]}
          >
            <MaterialIcons
              style={tw`self-center`}
              name="train"
              size={35}
              color="#444444"
            />
            <View style={tw`flex-col ml-3 flex-1`}>
              <Text style={tw`text-lg font-medium`}>
                Colombo fort to Beliaththa
              </Text>
              <View style={tw`flex-row`}>
                <Text style={tw`flex-0.5 text-[#444444] text-base font-normal`}>
                  Colombo fort
                </Text>
                <Text style={tw`flex-0.5 text-[#444444] text-base font-normal`}>
                  Beliaththa
                </Text>
              </View>
              <View style={tw`flex-row`}>
                <Text style={tw`flex-0.5 text-[#444444] text-xs font-light`}>
                  10.25 AM
                </Text>
                <Text style={tw`flex-0.5 text-[#444444] text-xs font-light`}>
                  1.30 PM
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ModeratorLiveUpdateScreen");
          }}
        >
          <View
            style={[
              tw`flex-row bg-[#ffffff] p-3.5 rounded-md my-3.5 border-[#444444]`,
              { elevation: 3, shadowColor: "black" },
            ]}
          >
            <MaterialIcons
              style={tw`self-center`}
              name="train"
              size={35}
              color="#444444"
            />
            <View style={tw`flex-col ml-3 flex-1`}>
              <Text style={tw`text-lg font-medium`}>Chilaw to Puttalama</Text>
              <View style={tw`flex-row`}>
                <Text style={tw`flex-0.5 text-[#444444] text-base font-normal`}>
                  Chilaw
                </Text>
                <Text style={tw`flex-0.5 text-[#444444] text-base font-normal`}>
                  Puttalama
                </Text>
              </View>
              <View style={tw`flex-row`}>
                <Text style={tw`flex-0.5 text-[#444444] text-xs font-light`}>
                  1.25 PM
                </Text>
                <Text style={tw`flex-0.5 text-[#444444] text-xs font-light`}>
                  3.30 PM
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
};

export default AvailableTrainsScreen;

const styles = StyleSheet.create({
  mainBody: {
    padding: 20,
  },
});
