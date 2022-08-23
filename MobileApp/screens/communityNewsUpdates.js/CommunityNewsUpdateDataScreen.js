import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as React from "react";
import tw from "twrnc";
import TopBar from "../../components/navigation/TopBar";
import { TextInput } from "react-native-paper";

const CommunityNewsUpdateDataScreen = () => {
  const [Description, setDescription] = React.useState("");

  return (
    <View>
      <TopBar title="Community News Details" goBack={true} />
      <ScrollView>
        <View style={[tw`my-2 px-5 mb-6`]}>
          <View style={tw`flex-col my-2`}>
            <Text style={tw`my-1.5 text-base font-semibold`}>Title</Text>
            <TextInput
              placeholder="Enter Title Here"
              style={tw`mx-3`}
              mode="outlined"
            />
          </View>
          <View style={tw`flex-col my-2`}>
            <Text style={tw`my-1.5 text-base font-semibold`}>Details</Text>
            <TextInput
              multiline
              placeholder="Enter Details Here"
              style={tw`mx-3 max-h-57`}
              mode="outlined"
              numberOfLines={10}
              value={Description}
              onChangeText={(Description) => {
                setDescription(Description);
              }}
            />
          </View>
          <View style={tw`flex-col my-2`}>
            <TouchableOpacity
              style={[
                tw` mx-3 my-4 justify-center items-center bg-[#0074B7] p-2.6 rounded-md`,
              ]}
            >
              <Text style={tw`text-white text-base font-medium`}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CommunityNewsUpdateDataScreen;

const styles = StyleSheet.create({});
