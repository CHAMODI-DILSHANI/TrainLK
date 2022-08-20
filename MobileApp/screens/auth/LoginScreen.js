import * as React from "react";
// import { React, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import tw from "twrnc";
import * as Google from "expo-auth-session/providers/google";
import {
  StyleSheet,
  Button,
  View,
  Text,
  // TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { TextInput } from "react-native-paper";
import { LogBox } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { faEdit, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import TextBox from "react-native-password-eye";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const navigation = useNavigation();

  const [userInfo, setUserInfo] = React.useState(null);
  const [authState, setAuthState] = React.useState(false);
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "491765905804-bku9lib9uqmtubfmoli0kr38ql3mu8oq.apps.googleusercontent.com",
    iosClientId:
      "491765905804-rj8rave6ci6e80bt33ps8m9pncgnhfs2.apps.googleusercontent.com",
    androidClientId:
      "491765905804-1ucksva4pl2bieaav1s48h0d86mjh6eg.apps.googleusercontent.com",
    webClientId:
      "491765905804-sprj61g3bgish54daqrcrg6i02trgcsm.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    async function fetchUserInfoFromGoogleAPI() {
      const googleAPIEndpoint = "https://www.googleapis.com/oauth2/v3/userinfo";

      try {
        if (response?.type === "success") {
          const responseData = await fetch(googleAPIEndpoint, {
            headers: {
              Authorization: `Bearer ${response.authentication.accessToken}`,
            },
          });

          const fetchedUserInfo = await responseData.json();
          setUserInfo(fetchedUserInfo);
          navigation.navigate("HomeScreen");
        }
      } catch (e) {
        console.log(e);
      }
    }

    fetchUserInfoFromGoogleAPI();
  }, [response]);

  return (
    <View style={styles.mainBody}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/login/login.png")}
          style={styles.image}
        />
      </View>
      <Text style={tw`mb-6 font-semibold text-3xl`}>Get Started</Text>

      <TextInput
        placeholder="Your Email"
        style={[tw`bg-transparent border-b h-11`]}
        autoCapitalize="none"
        // required
        // onChangeText={(val) => textInputChange(val)}
      />
      <TextInput
        placeholder="Your Password"
        secureTextEntry={secureTextEntry}
        style={tw`bg-transparent my-5 border-b h-11`}
        autoCapitalize="none"
        right={
          <TextInput.Icon
            name="eye-off"
            onPress={() => {
              setSecureTextEntry(!secureTextEntry);
              // <TextInput.Icon name="eye" />;
              // this.Icon.name = "eye";
              return false;
            }}
          />
        }
        // onChangeText={(val) => handlePasswordChange(val)}
      />

      <Text
        style={tw`text-[#003B73] text-right my-2`}
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
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          Register
        </Text>
      </View>
      {/* {userInfo ? <Text>{userInfo.email}</Text> : <Text>Nope</Text>} */}
      {/* {userInfo ? <Text>Hi {userInfo.given_name}</Text> : <Text>Nope</Text>} */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    padding: 15,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    resizeMode: "contain",
    width: 200,
    height: 200,
    margin: 0,
  },
});
