import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ForgotPasswordScreen = () => {
  return (
    <View style={styles.mainBody}>
      <View style={tw`justify-center items-center`}>
        <Image
          source={require("../../assets/forgot_password/forgot-password.png")}
          style={[tw`w-50 h-50`]}
        />
      </View>
      <Text style={tw`mb-6 font-semibold text-3xl`}>Forgot Password?</Text>
      <View style={tw`md:items-center my-10`}>
        <Text>
          Don't Worry! It happens. Please enter the email address associated
          with your account.
        </Text>

        <TextInput
          placeholder="Email"
          style={[tw`bg-transparent my-6 border-[#000000] border-b h-11`]}
          autoCapitalize="none"
          left={
            <TextInput.Icon
              name={() => (
                <MaterialCommunityIcons
                  name="email-outline"
                  size={24}
                  color="#444444"
                />
              )}
            />
          }
        />

        <View style={tw`mt-5`}>
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
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  mainBody: {
    padding: 20,
  },
});
