import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import tw from "twrnc";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { useEffect } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

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

  const [nicNo, setNic] = useState();
  const [cNo, setContactNo] = useState();
  const [startStation, setStartStation] = useState();
  const [freq, setFrequency] = useState();
  const [discp, setDescription] = useState();

  const modData = {
    nic: nicNo,
    data: "123",
    contactno: cNo,
    trainline: startStation,
    frequency: freq,
    description: discp,
  };

  useEffect(() => {}, []);

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

  return (
    <View style={tw`flex flex-col pl-6 pr-6 py-10 bg-[#ffffff]`}>
      <ScrollView style={tw`flex bg-[#ffffff] flex-col h-full `}>
        <Text style={tw`ml-2 text-xl font-semibold text-center text-[#000000]`}>
          Provide Your Details
        </Text>

        <Text style={tw`mt-4 font-medium text-base ml-5`}>
          National Identity Card No.
        </Text>
        <TextInput
          style={[
            tw`bg-transparent my-3 border-[#A3A3A3] border h-9 ml-5 mr-5`,
          ]}
          autoCapitalize="none"
          onChangeText={setNic}
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
                <Image
                  source={{ uri: image }}
                  style={tw`w-30 h-30 ml-5 mt-2`}
                />
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
          style={[
            tw`bg-transparent my-3 border-[#A3A3A3] border h-9 ml-5 mr-5`,
          ]}
          autoCapitalize="none"
          onChangeText={setContactNo}
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
              setStartStation(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            search={true}
            placeholder=" testing"
          />
        </View>

        <Text style={tw`mt-1 font-medium text-base ml-5`}>
          Travel Frequency
        </Text>
        <TextInput
          style={[
            tw`bg-transparent my-3 border-[#A3A3A3] border h-9 ml-5 mr-5`,
          ]}
          autoCapitalize="none"
          onChangeText={setFrequency}
        />

        <Text style={tw`mt-1 font-medium text-base ml-5`}>Description</Text>
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={[
            tw`bg-transparent my-3 border-[#A3A3A3] border h-20  ml-5 mr-5`,
          ]}
          autoCapitalize="none"
          placeholder="Add decrpition about you"
          onChangeText={setDescription}
        />
        <View style={tw``}>
          <TouchableOpacity
            style={[
              tw`flex flex-row justify-center items-center bg-[#34C759] p-2.3 ml-20 mr-20 mt-5 rounded-md`,
            ]}
            onPress={() => {
              console.log(modData);
            }}
          >
            <Text style={tw`font-medium text-white`}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default BecomeModeratorFormScreen;

const styles = StyleSheet.create({});
