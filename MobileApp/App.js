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
import becomeModeratorFeatures from "./screens/moderator/becomeModerator/becomeModerator_features";
import howtobecomeModerator from "./screens/moderator/becomeModerator/becomeModerator_how";
import becomeModeratorFormScreen from "./screens/moderator/becomeModerator/becomeModerator_form";


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
            component={becomeModeratorFormScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="howtobecomeModerator"
            component={howtobecomeModerator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="becomeModerator"
            component={becomeModeratorFeatures}
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
