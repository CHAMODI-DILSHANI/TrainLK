import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import SelectDropdown from "react-native-select-dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCalendar,
  faCaretDown,
  faClock,
  faEdit,
  faMagnifyingGlass,
  faMinus,
  faPeopleGroup,
  faPlus,
  faRightLeft,
  faTrainSubway,
} from "@fortawesome/free-solid-svg-icons";
// import SearchSelectOption from "../../components/search/SearchSelectOption";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import Navigation from "../../components/navigation/Navigation";

const stations = [
  { id: 1, name: "Colombo Fort" },
  { id: 2, name: "Hikkaduwa" },
  { id: 3, name: "Australia" },
  { id: 4, name: "Ireland" },
];

const onChangeTime = (event, selectedDate) => {
  console.log(event + " --- " + selectedDate);
};

const TrainScheduleSearchScreen = () => {
  const navigate = useNavigation();

  var selectedPicker = "";
  const [startStation, setStartStation] = useState("");
  const [endStation, setEndStation] = useState("");

  const [date, setDate] = useState(new Date());
  const [fdate, setfDate] = useState("");
  const [passengers, setPassengers] = useState(0);

  const ndate = new Date();
  const mdate = new Date();
  mdate.setDate(mdate.getDate() + 5);
  console.log(mdate);

  const [timeString, setTimeString] = useState();

  //onchange function of setDate in the ui
  const onChange = (event, selectedDate) => {
    if (event.type != "dismissed") {
      if (selectedPicker == "Date") {
        const currentDate = format(selectedDate, "dd-MM-yyyy");
        setfDate(currentDate);
        console.log(selectedDate);
      } else {
        const timeString = format(selectedDate, "hh:mm a");
        console.log("came here");
        setTimeString(timeString);
      }
    }
  };

  //  ***********************************
  // Calendar pop up function
  const showDatepicker = () => {
    selectedPicker = "Date";
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: "date",
      is24Hour: true,
      maximumDate: mdate,
      minimumDate: ndate,
    });
  };
  // ***********************************

  //  ***********************************
  // time pop up function
  const showTimepicker = () => {
    selectedPicker = "Time";
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: "time",
      is24Hour: true,
      maximumDate: mdate,
      minimumDate: ndate,
    });
  };

  // ***********************************
  return (
    <View style={tw`flex bg-[#ffffff] flex-col h-full`}>
      <Navigation
        content="Train Schedules"
        goBack="HomeScreen"
        navigate={navigate}
      />
      <View style={tw` h-100`}>
        <Image
          style={tw`h-full w-full -mt-20`}
          source={require("./../../assets/schedule/location_pins.png")}
        />
      </View>
      <View style={[tw`flex flex-grow mx-5 rounded-lg -mt-44 bg-[#f3f3f3]`]}>
        <View style={tw`flex flex-row pl-6 py-6`}>
          <SelectDropdown
            buttonStyle={{
              flexBasis: "93%",
              backgroundColor: "#ffffff",
              borderColor: "#d3d3d3",
              borderStyle: "solid",
              borderWidth: 2,
            }}
            rowTextStyle={tw`text-sm`}
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
              console.log(selectedItem.id);
              setStartStation(selectedItem.name);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem.name;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item.name;
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
              setEndStation(selectedItem.name);
            }}
            rowTextStyle={tw`text-sm`}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem.name;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item.name;
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
          <TouchableOpacity
            style={tw`p-3 bg-sky-500`}
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
          </View>

          <View
            style={tw`flex-row items-center px-3 py-3 border-2 border-[#d3d3d3] bg-[#ffffff] mt-4`}
          >
            <FontAwesomeIcon style={tw`text-gray-400 text-sm`} icon={faClock} />
            <Text style={tw`ml-2 text-sm text-gray-400 flex-1`}>Time :</Text>
            <View style={tw`ml-2 flex-1`}>
              {timeString == null ? (
                <Text style={tw`text-sm text-gray-400`}>Select the time</Text>
              ) : (
                <Text style={tw`text-sm`}>{timeString}</Text>
              )}
            </View>
            <TouchableOpacity
              style={tw`absolute right-2`}
              onPress={() => {
                showTimepicker();
              }}
            >
              <FontAwesomeIcon icon={faEdit} />
            </TouchableOpacity>
          </View>

          {/* <View>
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
          </View> */}
          <View style={tw`mt-6`}>
            <TouchableOpacity
              style={[
                tw` text-white py-2 rounded-4 flex-row justify-center items-center`,
                startStation == null ||
                endStation == "" ||
                fdate == "" ||
                timeString == null
                  ? tw`bg-neutral-400`
                  : tw`bg-sky-500`,
              ]}
              disabled={
                startStation == "" ||
                endStation == "" ||
                fdate == "" ||
                timeString == null
              }
              onPress={() => {
                var json = {
                  startStation: startStation,
                  endStation: endStation,
                  date: fdate,
                  time: timeString,
                };
                console.log(json);
              }}
            >
              <FontAwesomeIcon color="white" icon={faMagnifyingGlass} />
              <Text style={tw`text-white ml-2`}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TrainScheduleSearchScreen;

const styles = StyleSheet.create({});
