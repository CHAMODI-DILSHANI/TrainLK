import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { Shadow } from "react-native-shadow-2";

WebBrowser.maybeCompleteAuthSession();

const LoginWithGoogle = () => {
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
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          promptAsync();
        }}
      >
        <View style={tw`m-3`}>
          <Shadow style={[tw`bg-white rounded-2`]} distance={2} offset={[0, 1]}>
            <View style={tw`p-3 flex-row items-center`}>
              <Image
                style={tw`w-5 h-5 mr-4`}
                source={require("./../../assets/google_logo_icon_169090.png")}
              />
              <Text style={tw`text-gray-600 font-medium`}>
                Continue with Google
              </Text>
            </View>
          </Shadow>
        </View>
      </TouchableWithoutFeedback>

      {userInfo ? <Text>{userInfo.email}</Text> : <Text>Nope</Text>}
      {userInfo ? <Text>Hi {userInfo.given_name}</Text> : <Text>Nope</Text>}
    </View>
  );
};

export default LoginWithGoogle;

const styles = StyleSheet.create({});
