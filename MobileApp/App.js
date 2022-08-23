import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./screens/home/HomeScreen";
import TrainScheduleSearchScreen from "./screens/schedules/TrainScheduleSearchScreen";
import TrainLiveUpdatesScreen from "./screens/liveUpdates/TrainLiveUpdatesScreen";
import LostItemsScreen from "./screens/lostItems/LostItemsScreen";
import NewsUpdatesScreen from "./screens/news/NewsUpdatesScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import BecomeModeratorFormScreen from "./screens/moderator/becomeModerator/BecomeModeratorFormScreen";
import BecomeModeratorFeatures from "./screens/moderator/becomeModerator/BecomeModeratorFeatures";
import HowtobecomeModerator from "./screens/moderator/becomeModerator/HowtobecomeModerator";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#fff"
        translucent={false}
      />
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="becomeModeratorFormScreen"
            component={BecomeModeratorFormScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="becomeModerator"
            component={BecomeModeratorFeatures}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="howtobecomeModerator"
            component={HowtobecomeModerator}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TrainScheduleSearchScreen"
            component={TrainScheduleSearchScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TrainLiveUpdatesScreen"
            component={TrainLiveUpdatesScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewsUpdatesScreen"
            component={NewsUpdatesScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LostItemsScreen"
            component={LostItemsScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    padding: 15,
  },
});
