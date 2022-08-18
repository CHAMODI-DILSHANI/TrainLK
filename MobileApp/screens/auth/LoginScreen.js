import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import tw from "twrnc";
import * as Google from "expo-auth-session/providers/google";
import {
  StyleSheet,
  Button,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { LogBox } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesome5 } from "@expo/vector-icons";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const navigation = useNavigation();

  const [userInfo, setUserInfo] = React.useState(null);
  const [authState, setAuthState] = React.useState(false);

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
        <Image source={require("../../assets/Logo.png")} style={styles.image} />
      </View>
      <Text style={styles.title}>Get Started</Text>

      <Text style={styles.textForm}>Email</Text>
      {/* <View style={styles.action}> */}
      {/* <FontAwesome name="user-o" color="#05375a" size={20} /> */}
      <TextInput
        placeholder="Your Email"
        style={[styles.textInput]}
        autoCapitalize="none"
        // onChangeText={(val) => textInputChange(val)}
      />
      {/* </View> */}
      <Text
        style={[
          styles.textForm,
          {
            marginTop: 35,
          },
        ]}
      >
        Password
      </Text>
      <TextInput
        placeholder="Your Password"
        secureTextEntry={true}
        style={[
          styles.textInput,
          {
            marginBottom: 35,
          },
        ]}
        autoCapitalize="none"
        // onChangeText={(val) => handlePasswordChange(val)}
      />
      <View style={tw`mt-5`}>
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
      </View>

      <View style={tw`mt-5`}>
        <TouchableOpacity
          style={[
            tw`flex flex-row justify-center items-center bg-[#3b5998] p-2.6 rounded-3xl`,
            { elevation: 3, shadowColor: "black" },
          ]}
        >
          {/* <FontAwesomeIcon style={tw`flex-1`} icon={fafaceb} /> */}
          <FontAwesome
            style={tw`pr-3`}
            name="facebook"
            color="white"
            size={20}
          />
          <Text style={tw`font-medium text-white`}>LOGIN WITH FACEBOOK</Text>
        </TouchableOpacity>
      </View>

      {/* {userInfo ? <Text>{userInfo.email}</Text> : <Text>Nope</Text>} */}
      {/* {userInfo ? <Text>Hi {userInfo.given_name}</Text> : <Text>Nope</Text>} */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    padding: 15,
    // fontFamily: "Poppins-Regular",
  },
  logoContainer: {
    // alignItems: "center",
    // margin: 5,
    // borderWidth: 1,
    // borderColor: "#A3A3A3",
    justifyContent: "center",
    alignItems: "center",
    // height: 100,
    // width: 100,
    // flex: 1,
  },
  title: {
    // flex: 1,
    //fontFamily: "Poppins",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
  },
  textForm: {
    // color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",

    // marginTop: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: "#f2f2f2",
    // paddingBottom: 5,
  },
  textInput: {
    // flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#A3A3A3",
    color: "#05375a",
    padding: 5,
    paddingLeft: 8,
    marginTop: 8,
    backgroundColor: "#ffffff",
    elevation: 3,
    shadowColor: "black",
  },
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 20,
    // marginTop: 20,
  },
  buttonEdit: {
    margin: 10,
    borderWidth: 1,
    borderColor: "#A3A3A3",
    backgroundColor: "#ffffff",
  },
  // stretch: {
  //   width: 50,
  //   height: 200,
  //   resizeMode: "stretch",
  // },
  image: {
    // flex: 1,
    // aspectRatio: 1.5,
    resizeMode: "contain",
    width: 125,
    height: 225,
    margin: 0,
  },
});
