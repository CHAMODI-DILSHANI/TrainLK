import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [newSecureTextEntry, newSetSecureTextEntry] = React.useState(true);

  return (
    <View style={styles.mainBody}>
      <View style={tw`justify-center items-center`}>
        <Image
          source={require("../../assets/register/register.png")}
          style={[tw`w-50 h-50`]}
        />
      </View>
      <Text style={tw`mb-6 font-semibold text-3xl`}>Sign Up</Text>
      <TextInput
        placeholder="Email"
        style={[tw`bg-transparent my-3 border-[#444444] border-b h-11`]}
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
      <TextInput
        placeholder="Name"
        style={[tw`bg-transparent my-3 border-[#444444] border-b-0 h-11`]}
        autoCapitalize="none"
        left={
          <TextInput.Icon
            name={() => (
              <MaterialIcons name="person-outline" size={24} color="#444444" />
            )}
          />
        }
      />
      <TextInput
        placeholder="Password"
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
        placeholder="Confirm Password"
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
      <View style={tw`flex-row self-center mt-4`}>
        <Text>By signing up, you are agreeing to our </Text>
        <Text
          style={tw`text-[#003B73]`}
          onPress={() => navigation.navigate("Register")}
        >
          Privacy Policy
        </Text>
      </View>
      <View style={tw`my-7`}>
        <TouchableOpacity
          style={[
            tw`flex flex-row justify-center items-center bg-[#0074B7] p-2.6 rounded-md`,
            // { elevation: 3, shadowColor: "black" },
          ]}
        >
          <Text style={tw`text-white font-medium`}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex-row self-center`}>
        <Text>Already have an account? </Text>
        <Text
          style={tw`text-[#003B73]`}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  mainBody: {
    padding: 20,
  },
});
