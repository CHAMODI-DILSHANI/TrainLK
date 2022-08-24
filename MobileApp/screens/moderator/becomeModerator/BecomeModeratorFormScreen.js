import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  To,
  Button,
  Image,
} from "react-native";
import React from "react";
import tw from "twrnc";
// import {Avatar,Button} from 'react-native-paper';
// import { Image } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { useEffect } from "react";
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
// import Icon from "react-native-vector-icons/FontAwesome";

// import {
//  Dropdown }
//  from 'react-native-material-dropdown';
// const stations = [
//   { id: 1, name: "Colombo Fort" },
//   { id: 2, name: "Hikkaduwa" },
//   { id: 3, name: "Australia" },
//   { id: 4, name: "Ireland" },
// ];
const Lines = [
  "Main Line",
  "Matale Line",
  "Puttalam Line",
  "Nothern Line",
  "Batticoloa Line",
  "Coast Line",
  "KV Line",
  "Trincomalee Line",
  "Talaimannar Line",
];

const BecomeModeratorFormScreen = () => {
  const [image, setImage] = useState();
  const [startStation, setStartStation] = useState();


  useEffect(() => {
    // console.log("Hiii");
    // console.log(image);
  }, []);

  const [image2, setImage2] = useState();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const pickImage2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage2(result.uri);
    }
  };
  // const [Pic,SetPic]=React.useState('');
  return (
    <View style={tw`flex flex-col pl-6 pr-6 py-10 bg-[#ffffff]`}>
      <Text style={tw`ml-2 text-xl font-semibold text-center text-[#000000]`}>
        Provide Your Details
      </Text>

      <Text style={tw`mt-4 font-medium text-base ml-5`}>
        National Identity Card No.
      </Text>
      <TextInput
        style={[tw`bg-transparent my-3 border-[#A3A3A3] border h-9 ml-5 mr-5`]}
        autoCapitalize="none"
      />
      <Text style={tw`mt-1 font-medium text-base ml-5 mb-3`}>
        Upload ID card Images
      </Text>

      <View style={tw`flex-row justify-between px-5`}>
        <View style={tw`flex-1`}>
          <View style={tw``}>
            <TouchableOpacity
              style={[
                tw`flex flex-row justify-center items-center bg-[#ffffff] pl-3 pr-4 pt-1.5 pb-1.5 rounded-md border-dashed border-2 border-black-500`,

                // { elevation: 3, shadowColor: "black" },
              ]}
              onPress={pickImage}
            >
              <Image
                source={require("./../../../assets/Moderator/file-upload-icon.png")}
                style={tw`h-6.6 w-5 mr-2 `}
              />
              <Text style={tw`font-medium`}>NIC front</Text>

            </TouchableOpacity>
            {image && (
              <Image source={{ uri: image }} style={tw`w-30 h-30 ml-5 mt-2`} />
            )}
          </View>
        </View>


        <View style={tw`flex-1`}>
          <View style={tw``}>
            <TouchableOpacity
              style={[
                tw`flex flex-row justify-center items-center bg-[#ffffff] pl-3 pr-4 pt-1.5 pb-1.5 ml-2  rounded-md border-dashed border-2 border-black-500`, // { elevation: 3, shadowColor: "black" },
              ]}
              onPress={pickImage2}
            >
              <Image
                source={require("./../../../assets/Moderator/file-upload-icon.png")}

                style={tw`h-6.6 w-5 mr-2`}
              />
              <Text style={tw`font-medium`}>NIC back</Text>
            </TouchableOpacity>
            {image2 && (
              <Image
                source={{ uri: image2 }}
                style={tw`w-30 h-30 ml-5 mt-2 `}
              />
            )}
          </View>
        </View>
      </View>

      <Text style={tw`mt-3 font-medium text-base ml-5`}>Contact Number</Text>
      <TextInput
        style={[tw`bg-transparent my-3 border-[#A3A3A3] border h-9 ml-5 mr-5`]}
        autoCapitalize="none"
      />
      <Text style={tw`mt-1 font-medium text-base ml-5`}>Train Line</Text>
      <View style={tw`flex-row ml-5`}>
        <SelectDropdown
          buttonStyle={{
            flexBasis: "94.5%",
            backgroundColor: "#ffffff",
            borderColor: "#a3a3a3",
            borderStyle: "solid",
            borderWidth: 1,
          }}
          rowTextStyle={tw`text-sm`}
          renderCustomizedButtonChild={(selectedItem, index) => {
            return (
              <View style={tw`flex-row items-center  `}>
                {/* <FontAwesomeIcon
                style={tw`text-gray-400 text-sm`}
                icon={faTrainSubway}
              />
              <Text style={tw`ml-2 text-sm text-gray-400`}>
                Start Station :
              </Text> */}
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
          data={Lines}
          onSelect={(selectedItem, index) => {
            // console.log(selectedItem);
            // console.log(selectedItem.id);
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

      {/* <TextInput
        style={[tw`bg-transparent my-3 border-[#A3A3A3] border h-9 ml-5 mr-5`]}
        autoCapitalize="none"
      /> */}

      <Text style={tw`mt-1 font-medium text-base ml-5`}>Travel Frequency</Text>
      <TextInput
        style={[tw`bg-transparent my-3 border-[#A3A3A3] border h-9 ml-5 mr-5`]}
        autoCapitalize="none"
      />
      <Text style={tw`mt-1 font-medium text-base ml-5`}>Description</Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={[
          tw`bg-transparent my-3 border-[#A3A3A3] border h-20 line-clamp-3 ml-5 mr-5`,
        ]}
        autoCapitalize="none"
        placeholder="Add decrpition about you"
      />
      <View style={tw``}>
        <TouchableOpacity
          style={[
            tw`flex flex-row justify-center items-center bg-[#34C759] p-2.3 ml-20 mr-20 mt-5 rounded-md`,
          ]}
          //   onPress={() => {
          //   }}
        >
          <Text style={tw`font-medium text-white`}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BecomeModeratorFormScreen;

const styles = StyleSheet.create({});
