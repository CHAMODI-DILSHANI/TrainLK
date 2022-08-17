import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  DatePickerAndroidOpenReturn,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import SelectDropdown from "react-native-select-dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCaretDown,
  faMagnifyingGlass,
  faTrainSubway,
} from "@fortawesome/free-solid-svg-icons";
// import SearchSelectOption from "../../components/search/SearchSelectOption";

const stations = ["Colombo Fort", "Hikkaduwa", "Australia", "Ireland"];

const BookingSearch = () => {
  const [startStation, setStartStation] = useState("");
  const [endStation, setEndStation] = useState("");

  return (
    <View style={tw`flex bg-[#ffffff] flex-col h-full`}>
      <Text>TrainLiveUpdatesScreen</Text>
      <View style={tw` h-100`}>
        <Image
          style={tw`h-full w-full`}
          source={require("./../../assets/booking/Choosingticket.png")}
        />
      </View>
      <View style={tw`flex flex-grow mx-5 rounded-lg -mt-60 bg-[#f3f3f3]`}>
        {/* <TextInput
          style={tw`border-solid border-2 mx-3 border-[#cacaca]`}
          autoFocus={false}
          accessibilityRole={"text"}
          placeholder="StartStation"
          editable={true}
        ></TextInput> */}
        <View style={tw`flex flex-row pl-6 py-6`}>
          <SelectDropdown
            buttonStyle={{
              flexBasis: "93%",
              backgroundColor: "#ffffff",
              borderColor: "#d3d3d3",
              borderStyle: "solid",
              borderWidth: 2,
            }}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <View style={tw`flex-row items-center  `}>
                  <FontAwesomeIcon
                    style={tw`text-gray-400 text-sm`}
                    icon={faTrainSubway}
                  />
                  <Text style={tw`ml-2 text-sm text-gray-400`}>
                    Start Station :
                  </Text>
                  <Text style={tw`ml-2 text-lg`}>
                    {selectedItem ? startStation : ""}
                  </Text>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    style={tw`absolute right-0`}
                  />
                </View>
              );
            }}
            renderSearchInputLeftIcon={() => {
              return <FontAwesomeIcon icon={faMagnifyingGlass} />;
            }}
            data={stations}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem);
              setStartStation(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            search={true}
            placeholder=" testing"
          />
        </View>
        <View style={tw`flex flex-row pl-6 pb-6`}>
          <SelectDropdown
            // renderCustomizedButtonChild={<SearchSelectOption />}
            data={stations}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              setEndStation(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            search={true}
            buttonStyle={{
              flexBasis: "93%",
              backgroundColor: "#ffffff",
              borderColor: "#d3d3d3",
              borderStyle: "solid",
              borderWidth: 2,
            }}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <View style={tw`flex-row items-center  `}>
                  <FontAwesomeIcon
                    style={tw`text-gray-400 text-sm`}
                    icon={faTrainSubway}
                  />
                  <Text style={tw`ml-2 text-sm text-gray-400`}>
                    End Station :
                  </Text>
                  <Text style={tw`ml-2 text-lg pl-1`}>
                    {selectedItem ? endStation : ""}
                  </Text>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    style={tw`absolute right-0`}
                  />
                </View>
              );
            }}
            renderSearchInputLeftIcon={() => {
              return <FontAwesomeIcon icon={faMagnifyingGlass} />;
            }}
          />
        </View>
        <Button
          title="swap"
          onPress={() => {
            var x = endStation;
            setEndStation(startStation);
            setStartStation(x);
            // console.log(startStation);
          }}
        />
      </View>
    </View>
  );
};

export default BookingSearch;

const styles = StyleSheet.create({});
