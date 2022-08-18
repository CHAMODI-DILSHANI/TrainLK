import * as React from "react";
import tw from "twrnc";
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
<<<<<<< HEAD
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginWithGoogle from "../../components/auth/LoginWithGoogle";
=======
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesome5 } from "@expo/vector-icons";
>>>>>>> 5d39476 (Sign-In changes)

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
<<<<<<< HEAD
        secureTextEntry={secureTextEntry}
        style={tw`bg-transparent my-3 border-[#444444] border-b-0 h-11`}
=======
        secureTextEntry={true}
        style={[
          styles.textInput,
          {
            marginBottom: 35,
          },
        ]}
>>>>>>> 5d39476 (Sign-In changes)
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
<<<<<<< HEAD
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

      <View style={tw`flex`}>
        <LoginWithGoogle />
=======
        {/* <Button
          style={[styles.buttonEdit, tw`rounded-3x1 p-2.6`]}
          title="Continue"
          borderRadius={10}
          borderColor="red"
          borderWidth={3}
        ></Button> */}
        <TouchableOpacity
          style={[
            tw`flex flex-row justify-center items-center bg-[#ffffff] p-2.6 rounded-3xl`,
            { elevation: 3, shadowColor: "black" },
          ]}
        >
          <Text style={tw`font-medium`}>CONTINUE</Text>
        </TouchableOpacity>
      </View>

      <View style={tw`mt-5`}>
        {/* <Button
          style={styles.container}
          name="google"
          disabled={!request}
          title="Login with Google"
          onPress={() => {
            promptAsync();
          }}
        /> */}
        <TouchableOpacity
          style={[
            tw`flex flex-row justify-center items-center bg-[#ffffff] p-2.3 rounded-3xl`,
            { elevation: 3, shadowColor: "black" },
          ]}
          onPress={() => {
            promptAsync();
          }}
          disabled={!request}
        >
          <Image
            source={require("../../assets/login/google.png")}
            style={tw`h-5.5 w-5 mr-3`}
          />
          <Text style={tw`font-medium`}>LOGIN WITH GOOGLE</Text>
        </TouchableOpacity>
>>>>>>> 5d39476 (Sign-In changes)
      </View>

      <View style={tw`mt-5`}>
        <TouchableOpacity
          style={[
<<<<<<< HEAD
            tw`flex flex-row justify-center items-center bg-[#3b5998] p-2.6 rounded-md`,
            // { elevation: 3, shadowColor: "black" },
          ]}
        >
=======
            tw`flex flex-row justify-center items-center bg-[#3b5998] p-2.6 rounded-3xl`,
            { elevation: 3, shadowColor: "black" },
          ]}
        >
          {/* <FontAwesomeIcon style={tw`flex-1`} icon={fafaceb} /> */}
>>>>>>> 5d39476 (Sign-In changes)
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
