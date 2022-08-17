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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import SelectDropdown from "react-native-select-dropdown";

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
        <Text style={tw``}>From</Text>
        {/* <TextInput
          style={tw`border-solid border-2 mx-3 border-[#cacaca]`}
          autoFocus={false}
          accessibilityRole={"text"}
          placeholder="StartStation"
          editable={true}
        ></TextInput> */}

        <SelectDropdown
          defaultButtonText="Start Station : "
          renderSearchInputLeftIcon={require("./../../assets/booking/Choosingticket.png")}
          data={stations}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem);
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
        <Text style={tw``}>To</Text>
        <SelectDropdown
          data={stations}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
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
    </View>
  );
};

export default BookingSearch;

const styles = StyleSheet.create({});
