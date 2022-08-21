import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./screens/home/HomeScreen";
import TrainScheduleSearchScreen from "./screens/schedules/TrainScheduleSearchScreen";
import TrainLiveUpdatesScreen from "./screens/liveUpdates/TrainLiveUpdatesScreen";
import AvailableTrainsScreen from "./screens/liveUpdates/AvailableTrainsScreen";
import LostItemsScreen from "./screens/lostItems/LostItemsScreen";
import NewsUpdatesScreen from "./screens/news/NewsUpdatesScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import ForgotPasswordScreen from "./screens/auth/ForgotPasswordScreen";
import ChangePasswordScreen from "./screens/auth/ChangePassword";
import TrainScheduleResultScreen from "./screens/schedules/TrainScheduleResultScreen";
import BookingSearch from "./screens/booking/BookingSearchScreen";
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
          <Stack.Screen
            name="BookingSearchScreen"
            component={BookingSearch}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TrainScheduleResult"
            component={TrainScheduleResultScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChangePasswordScreen"
            component={ChangePasswordScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AvailableTrains"
            component={AvailableTrainsScreen}
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
