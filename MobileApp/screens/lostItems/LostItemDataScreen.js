import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../../components/navigation/TopBar";
import SelectList from "react-native-dropdown-select-list";
import SelectDropdown from "react-native-select-dropdown";
import { TextInput, Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { AntDesign } from "@expo/vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const LostItemDataScreen = () => {
  const navigation = useNavigation();

  const [selected, setSelected] = React.useState("");

  const itemTypes = [
    "Wallet",
    "Hand Bag",
    "Office Bag",
    "Travelling Bag",
    "Electronic",
    "Other",
  ];

  const [height, setHeight] = React.useState(undefined);
  const [Description, setDescription] = React.useState("");
  const [Details, setDetails] = React.useState("");
  const [type, setType] = React.useState();

  const [image, setImage] = React.useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View>
      <TopBar title="New Lost Item Details" goBack={true} />
      <ScrollView>
        <View style={[tw`my-2 px-5 mb-6 pb-12`]}>
          <View style={tw` my-2`}>
            <Text style={tw`my-1.5 text-base font-semibold`}>Type</Text>
            <View style={tw`flex flex-row mt-1 mx-3`}>
              <SelectDropdown
                buttonStyle={{
                  flexBasis: "100%",
                  // flex: 1,
                  backgroundColor: "#ffffff",
                  borderColor: "#858383",
                  borderStyle: "solid",
                  borderWidth: 1,
                  borderRadius: 6,
                }}
                rowTextStyle={tw`text-sm`}
                renderCustomizedButtonChild={(selectedItem, index) => {
                  return (
                    <View style={tw`flex-row items-center  `}>
                      <Text style={tw`ml-2 text-base text-gray-400`}>
                        Item type :
                      </Text>
                      <Text style={tw`ml-2 text-base`}>{type ? type : ""}</Text>
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
                data={itemTypes}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem);
                  console.log(selectedItem);
                  setType(selectedItem);
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
          <View style={tw`flex-col my-2`}>
            <Text style={tw`my-1.5 text-base font-semibold`}>Description</Text>
            <TextInput
              multiline
              placeholder="Enter Description Here"
              style={tw`mx-3 max-h-45`}
              mode="outlined"
              numberOfLines={7}
              value={Description}
              onChangeText={(Description) => {
                setDescription(Description);
              }}
            />
          </View>
          <View style={tw`flex-col my-2`}>
            <Text style={tw`my-1.5 text-base font-semibold`}>
              Contact Details
            </Text>
            <TextInput
              multiline
              placeholder="Enter Details Here"
              style={tw`mx-3 max-h-21`}
              activeOutlineColor=""
              mode="outlined"
              numberOfLines={3}
              value={Details}
              onChangeText={(Details) => {
                setDetails(Details);
              }}
            />
          </View>
          <View style={tw`flex-col my-2`}>
            <Button
              title="Attach Image"
              labelStyle={tw`text-[#444444] items-center`}
              icon="camera"
              style={tw`flex-1 bg-[#ccd5e3] mx-3 my-2 border-[#444444] rounded-md text-[#444444] items-center`}
              onPress={pickImage}
              MediaTypeOptions="Image"
            >
              Attach Image
            </Button>
            {image && (
              <View style={tw`px-3 flex-row `}>
                <Image source={{ uri: image }} style={tw`flex-1 h-50 w-100`} />
              </View>
            )}
          </View>
          <View style={tw`flex-col my-2`}>
            <TouchableOpacity
              style={[
                tw` mx-3 my-2 justify-center items-center bg-[#0074B7] p-2.6 rounded-md`,
              ]}
            >
              <Text style={tw`text-white text-base font-medium`}>Report</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LostItemDataScreen;

const styles = StyleSheet.create({});
