import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { LogBox } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
    <View>
      <Button
        disabled={!request}
        title="Login with Google"
        onPress={() => {
          promptAsync();
        }}
      />

      {userInfo ? <Text>{userInfo.email}</Text> : <Text>Nope</Text>}
      {userInfo ? <Text>Hi {userInfo.given_name}</Text> : <Text>Nope</Text>}
    </View>
  );
}
