import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import tw from "twrnc";
import * as Google from "expo-auth-session/providers/google";
import {
  StyleSheet,
  Button,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { TextInput } from "react-native-paper";
import { LogBox } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LogBox } from "react-native";
import LoginWithGoogle from "../../components/auth/LoginWithGoogle";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

export default function LoginScreen() {
  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  return (
    <View style={styles.mainBody}>
      <View style={tw`justify-center items-center`}>
        <Image
          source={require("../../assets/login/login.png")}
          style={[tw`w-50 h-50`]}
        />
      </View>
      <Text style={tw`mb-6 font-semibold text-3xl`}>Get Started</Text>

      <TextInput
        placeholder="Your Email"
        style={[tw`bg-transparent my-3 border-[#000000] border-b h-11`]}
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
        // required
        // onChangeText={(val) => textInputChange(val)}
      />
      <TextInput
        placeholder="Your Password"
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

      <Text
        style={tw`text-[#003B73] text-right my-2 self-end`}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        Forgot Password?
      </Text>

      <View style={tw`mt-5`}>
        <TouchableOpacity
          style={[
            tw`flex flex-row justify-center items-center bg-[#0074B7] p-2.6 rounded-md`,
            // { elevation: 3, shadowColor: "black" },
          ]}
        >
          <Text style={tw`text-white font-medium`}>CONTINUE</Text>
        </TouchableOpacity>
      </View>

      <View style={tw`flex-row my-6`}>
        <View style={tw`bg-[#A3A3A3] h-0.5 flex-1 self-center`}></View>
        <Text style={tw`self-center px-4 text-base text-[#808080]`}>OR</Text>
        <View style={tw`bg-[#A3A3A3] h-0.5 flex-1 self-center`}></View>
      </View>

      <View style={tw``}>
        <TouchableOpacity
          style={[
            tw`flex flex-row justify-center items-center bg-[#cccccc] p-2.3 rounded-md`,
            // { elevation: 3, shadowColor: "black" },
          ]}
          onPress={() => {
            promptAsync();
          }}
          disabled={!request}
        >
          <Image
            source={require("../../assets/login/google-logo.png")}
            style={tw`h-5.5 w-5 mr-3`}
          />
          <Text style={tw`font-medium`}>LOGIN WITH GOOGLE</Text>
        </TouchableOpacity>
      </View>

      <View style={tw`mt-5`}>
        <TouchableOpacity
          style={[
            tw`flex flex-row justify-center items-center bg-[#3b5998] p-2.6 rounded-md`,
            // { elevation: 3, shadowColor: "black" },
          ]}
        >
          <FontAwesome
            style={tw`pr-3`}
            name="facebook"
            color="white"
            size={20}
          />
          <Text style={tw`font-medium text-white`}>LOGIN WITH FACEBOOK</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex-row self-center mt-4`}>
        <Text>New to TrainLK? </Text>
        <Text
          style={tw`text-[#003B73]`}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    padding: 20,
  },
  image: {
    resizeMode: "contain",
  },
});
