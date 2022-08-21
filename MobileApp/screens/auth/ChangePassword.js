import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ChangePasswordScreen = () => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [newSecureTextEntry, newSetSecureTextEntry] = React.useState(true);
  return (
    <View style={styles.mainBody}>
      <View style={tw`justify-center items-center mb-3`}>
        <Image
          source={require("../../assets/change_password/change-password.png")}
          style={[tw`w-50 h-50`]}
        />
      </View>
      <Text style={tw`mb-10 font-semibold text-3xl`}>Change Password</Text>
      <TextInput
        placeholder="New Password"
        secureTextEntry={secureTextEntry}
        style={tw`bg-transparent my-3 border-[#444444] border-b-0 h-11`}
        autoCapitalize="none"
        left={
          <TextInput.Icon
            name={() => (
              <MaterialCommunityIcons
                name="lock-outline"
                size={24}
                color="#444444"
              />
            )}
          />
        }
        right={
          <TextInput.Icon
            name={secureTextEntry ? "eye-off" : "eye"}
            onPress={() => {
              setSecureTextEntry(!secureTextEntry);
              return false;
            }}
          />
        }
        // onChangeText={(val) => handlePasswordChange(val)}
      />
      <TextInput
        placeholder="Confirm New Password"
        secureTextEntry={newSecureTextEntry}
        style={tw`bg-transparent my-3 border-[#444444] border-b-0 h-11`}
        autoCapitalize="none"
        left={
          <TextInput.Icon
            name={() => (
              <MaterialCommunityIcons
                name="lock-outline"
                size={24}
                color="#444444"
              />
            )}
          />
        }
        right={
          <TextInput.Icon
            name={newSecureTextEntry ? "eye-off" : "eye"}
            onPress={() => {
              newSetSecureTextEntry(!newSecureTextEntry);
              return false;
            }}
          />
        }
      />

      <View style={tw`my-13`}>
        <TouchableOpacity
          style={[
            tw`flex flex-row justify-center items-center bg-[#0074B7] p-2.6 rounded-md`,
            // { elevation: 3, shadowColor: "black" },
          ]}
        >
          <Text style={tw`text-white font-medium`}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  mainBody: {
    padding: 20,
  },
});
