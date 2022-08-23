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

const BecomeModeratorFormScreen = () => {
  const [image, setImage] = useState();

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
      <View style={tw`flex-row `}>
        <View>
          <View style={tw``}>
            <TouchableOpacity
              style={[
                tw`flex flex-row justify-center items-center bg-[#ffffff] pl-3 pr-4 pt-1.5 pb-1.5 mr-3 ml-5 rounded-md border-dashed border-2 border-black-500`,
                // { elevation: 3, shadowColor: "black" },
              ]}
              onPress={pickImage}
            >
              <Image
                source={require("./../../../assets/Moderator/file-upload-icon.png")}
                style={tw`h-6.6 w-5 mr-5 `}
              />
              <Text style={tw`font-medium`}>Image 1</Text>
            </TouchableOpacity>
            {image && (
              <Image source={{ uri: image }} style={tw`w-30 h-30 ml-5 mt-2`} />
            )}
          </View>
        </View>

        <View>
          <View style={tw``}>
            <TouchableOpacity
              style={[
                tw`flex flex-row justify-center items-center bg-[#ffffff] pl-3 pr-4 pt-1.5 pb-1.5 mr-8 ml-5 rounded-md border-dashed border-2 border-black-500`, // { elevation: 3, shadowColor: "black" },
              ]}
              onPress={pickImage2}
            >
              <Image
                source={require("./../../../assets/Moderator/file-upload-icon.png")}
                style={tw`h-6.6 w-5 mr-5`}
              />
              <Text style={tw`font-medium`}>Image 2</Text>
            </TouchableOpacity>
            {image && (
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
      <Text style={tw`mt-1 font-medium text-base ml-5`}>Workplace</Text>
      <TextInput
        style={[tw`bg-transparent my-3 border-[#A3A3A3] border h-9 ml-5 mr-5`]}
        autoCapitalize="none"
      />
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
