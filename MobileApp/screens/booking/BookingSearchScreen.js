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
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import SelectDropdown from "react-native-select-dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowDownUpAcrossLine,
  faArrowDownUpLock,
  faCalendar,
  faCalendarDay,
  faCalendarPlus,
  faCaretDown,
  faEdit,
  faMagnifyingGlass,
  faMinus,
  faMinusCircle,
  faPeopleGroup,
  faPeopleLine,
  faPlus,
  faPlusCircle,
  faRightLeft,
  faSync,
  faTrainSubway,
} from "@fortawesome/free-solid-svg-icons";
// import SearchSelectOption from "../../components/search/SearchSelectOption";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { format } from "date-fns";

const stations = ["Colombo Fort", "Hikkaduwa", "Australia", "Ireland"];

const BookingSearch = () => {
  const [startStation, setStartStation] = useState("");
  const [endStation, setEndStation] = useState("");

  const [date, setDate] = useState(new Date());
  const [fdate, setfDate] = useState("");
  const [passengers, setPassengers] = useState(0);
  const [mdate, setmDate] = useState(new Date());
  const [ndate, setnDate] = useState(new Date("2022-08-16"));
  const onChange = (event, selectedDate) => {
    const currentDate = format(selectedDate, "dd-MM-yyyy");
    setfDate(currentDate);
    console.log(selectedDate);
    // var formattedDate = format(date, "dd-mm-yyyy");
    // // console.log(formattedDate + "");
    // setfDate(formattedDate);
    // console.log(fdate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
      maximumDate: mdate,
      minimumDate: ndate,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };
  return (
    // <ScrollView
    //   showsVerticalScrollIndicator={false}
    //   alwaysBounceVertical={false}
    //   style={tw`bg-[#ffffff] h-full`}
    // >
    <View style={tw`flex bg-[#ffffff] flex-col h-full`}>
      <Text>TrainLiveUpdatesScreen</Text>
      <View style={tw` h-100`}>
        <Image
          style={tw`h-full w-full`}
          source={require("./../../assets/booking/Choosingticket.png")}
        />
      </View>
      <View style={[tw`flex flex-grow mx-5 rounded-lg -mt-44 bg-[#f3f3f3]`]}>
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
                  <Text style={tw`ml-2 text-sm`}>
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
                  <Text style={tw`ml-2 text-sm pl-1`}>
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
        <View style={tw`flex flex-row pl-[78%]`}>
          {/* <Button
            style={{ flexBasis: "10%" }}
            title="swap"
            onPress={() => {
              var x = endStation;
              setEndStation(startStation);
              setStartStation(x);
              // console.log(startStation);
            }}
          /> */}
          <TouchableOpacity
            style={[
              // tw`pl-5 pr-7 py-4 bg-sky-500`,
              tw`p-3 bg-sky-500`,
              {
                // flexBasis: "20%",
              },
            ]}
            onPress={() => {
              var x = endStation;
              setEndStation(startStation);
              setStartStation(x);
            }}
          >
            <FontAwesomeIcon
              style={tw`text-[#ffffff]`}
              icon={faRightLeft}
              transform={{ rotate: 90 }}
            />
          </TouchableOpacity>
        </View>
        <View style={tw`w-full  px-6 mt-6`}>
          {/* <Text style={tw`flex-1 text-lg`}>asd</Text>
          <Button
            style={tw`flex-none`}
            title="calendar"
            onPress={() => {
              showDatepicker();
            }}
          /> */}
          <View
            style={tw`flex-row items-center px-3 py-3 border-2 border-[#d3d3d3] bg-[#ffffff]`}
          >
            <FontAwesomeIcon
              style={tw`text-gray-400 text-sm`}
              icon={faCalendar}
            />
            <Text style={tw`ml-2 text-sm text-gray-400 flex-1`}>Date :</Text>
            <View style={tw`ml-2 flex-1`}>
              {fdate == "" ? (
                <Text style={tw`text-sm text-gray-400`}>Select a date</Text>
              ) : (
                <Text style={tw`text-sm`}>{fdate}</Text>
              )}
            </View>
            <TouchableOpacity
              style={tw`absolute right-2`}
              onPress={() => {
                showDatepicker();
              }}
            >
              <FontAwesomeIcon icon={faEdit} />
            </TouchableOpacity>
            {/* <FontAwesomeIcon icon={faCalendar} style={tw`absolute right-0`} /> */}
          </View>
          <View>
            <View
              style={tw`mt-6 px-3 flex-row items-center  border-2 border-[#d3d3d3] bg-white`}
            >
              <FontAwesomeIcon
                icon={faPeopleGroup}
                style={tw`text-gray-400`}
                size={24}
              />
              <Text style={tw`ml-2 text-sm text-gray-400 flex-1`}>
                No. of Passengers :
              </Text>
              <TouchableOpacity
                style={[tw`p-4`]}
                disabled={passengers == 0}
                onPress={() => {
                  console.log(passengers);
                  setPassengers(passengers != 0 ? passengers - 1 : 0);
                  console.log(passengers);
                }}
              >
                <FontAwesomeIcon
                  icon={faMinus}
                  color={passengers == 0 ? "#d3d3d3" : "black"}
                />
              </TouchableOpacity>
              <Text>{passengers}</Text>
              <TouchableOpacity
                style={tw`pl-4`}
                onPress={() => {
                  setPassengers(passengers + 1);
                  console.log(passengers);
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={tw`mt-6`}>
            <TouchableOpacity
              style={tw`bg-sky-500 text-white py-2 rounded-4 flex-row justify-center items-center`}
            >
              <FontAwesomeIcon
                // style={tw`flex-1`}
                color="white"
                icon={faMagnifyingGlass}
              />
              <Text style={tw`text-white ml-2`}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    // </ScrollView>
  );
};

export default BookingSearch;

const styles = StyleSheet.create({});
