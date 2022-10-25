import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/home/HomeScreen";
import TrainScheduleSearchScreen from "./screens/schedules/TrainScheduleSearchScreen";
import TrainLiveUpdatesScreen from "./screens/liveUpdates/TrainLiveUpdatesScreen";
import LostItemsScreen from "./screens/lostItems/LostItemsScreen";
import FoundItemsScreen from "./screens/foundItems/FoundItemsScreen";
import NewsUpdatesScreen from "./screens/news/NewsUpdatesScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import TrainScheduleResultScreen from "./screens/schedules/TrainScheduleResultScreen";
import BookingSearch from "./screens/booking/BookingSearchScreen";
import ModeratorLiveUpdateScreen from "./screens/liveUpdates/ModeratorLiveUpdateScreen";
import AvailableTrainsScreen from "./screens/liveUpdates/AvailableTrainsScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import ForgotPasswordScreen from "./screens/auth/ForgotPasswordScreen";
import LostItemDataScreen from "./screens/lostItems/LostItemDataScreen";
import FoundItemDataScreen from "./screens/foundItems/FoundItemDataScreen";
import CommunityUpdatesScreen from "./screens/communityUpdates/CommunityUpdatesScreen";
import CommunityNewsUpdatesScreen from "./screens/communityNewsUpdates.js/CommunityNewsUpdatesScreen";
import CommunityNewsUpdateDataScreen from "./screens/communityNewsUpdates.js/CommunityNewsUpdateDataScreen";
import NewsUpdateDataScreen from "./screens/news/NewsUpdateDataScreen";
import BecomeModeratorFeatures from "./screens/moderator/becomeModerator/BecomeModeratorFeatures";
import HowtobecomeModerator from "./screens/moderator/becomeModerator/HowtobecomeModerator";
import BecomeModeratorFormScreen from "./screens/moderator/becomeModerator/BecomeModeratorFormScreen";

import { AuthContext, AuthProvider } from "./context/AuthContext";
import { useContext } from "react";
import { useState } from "react";
import ProfileScreen from "./screens/profile/ProfileScreen";
import LiveTrainLocationView from "./screens/liveUpdates/LiveTrainLocationView";
import TrainMapView from "./screens/liveUpdates/TrainMapView";

const AppNav = () => {
  const Stack = createNativeStackNavigator();
  const { accessToken } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#fff"
          translucent={false}
        />
        <SafeAreaProvider>
          <Stack.Navigator>
            {!accessToken && (
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
            )}

            {accessToken && (
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
            )}

            {accessToken && (
              <Stack.Screen
                name="ModeratorLiveUpdateScreen"
                component={ModeratorLiveUpdateScreen}
                options={{ headerShown: false }}
              />
            )}
            {accessToken && (
              <Stack.Screen
                name="TrainScheduleResultScreen"
                component={TrainScheduleResultScreen}
                options={{ headerShown: false }}
              />
            )}
            {accessToken && (
              <Stack.Screen
                name="TrainScheduleSearchScreen"
                component={TrainScheduleSearchScreen}
                options={{ headerShown: false }}
              />
            )}
            {accessToken && (
              <Stack.Screen
                name="TrainLiveUpdatesScreen"
                component={TrainLiveUpdatesScreen}
                options={{ headerShown: false }}
              />
            )}

            {accessToken && (
              <Stack.Screen
                name="NewsUpdatesScreen"
                component={NewsUpdatesScreen}
                options={{ headerShown: false }}
              />
            )}

            {accessToken && (
              <Stack.Screen
                name="LostItemsScreen"
                component={LostItemsScreen}
                options={{ headerShown: false }}
              />
            )}

            {accessToken && (
              <Stack.Screen
                name="BookingSearchScreen"
                component={BookingSearch}
                options={{ headerShown: false }}
              />
            )}

            {accessToken && (
              <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ headerShown: false }}
              />
            )}

            {accessToken && (
              <Stack.Screen
                name="AvailableTrains"
                component={AvailableTrainsScreen}
                options={{ headerShown: false }}
              />
            )}

            {!accessToken && (
              <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ headerShown: false }}
              />
            )}

            {!accessToken && (
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
                options={{ headerShown: false }}
              />
            )}

            {accessToken && (
              <Stack.Screen
                name="LostItemDataScreen"
                component={LostItemDataScreen}
                options={{ headerShown: false }}
              />
            )}

            {accessToken && (
              <Stack.Screen
                name="FoundItemDataScreen"
                component={FoundItemDataScreen}
                options={{ headerShown: false }}
              />
            )}

            {accessToken && (
              <Stack.Screen
                name="FoundItemsScreen"
                component={FoundItemsScreen}
                options={{ headerShown: false }}
              />
            )}

            {accessToken && (
              <Stack.Screen
                name="CommunityUpdatesScreen"
                component={CommunityUpdatesScreen}
                options={{ headerShown: false }}
              />
            )}

            {accessToken && (
              <Stack.Screen
                name="CommunityNewsUpdatesScreen"
                component={CommunityNewsUpdatesScreen}
                options={{ headerShown: false }}
              />
            )}

            {accessToken && (
              <Stack.Screen
                name="CommunityNewsUpdateDataScreen"
                component={CommunityNewsUpdateDataScreen}
                options={{ headerShown: false }}
              />
            )}

            {accessToken && (
              <Stack.Screen
                name="NewsUpdateDataScreen"
                component={NewsUpdateDataScreen}
                options={{ headerShown: false }}
              />
            )}

            {accessToken && (
              <Stack.Screen
                name="BecomeModeratorStep1"
                component={BecomeModeratorFeatures}
                options={{ headerShown: false }}
              />
            )}

            {accessToken && (
              <Stack.Screen
                name="BecomeModeratorStep2"
                component={HowtobecomeModerator}
                options={{ headerShown: false }}
              />
            )}

            {accessToken && (
              <Stack.Screen
                name="BecomeModeratorStep3"
                component={BecomeModeratorFormScreen}
                options={{ headerShown: false }}
              />
            )}

            {accessToken && (
              <Stack.Screen
                name="LiveTrainLocationScreen"
                component={TrainMapView}
                options={{ headerShown: false }}
              />
            )}
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    );
  }
};

export default AppNav;

const styles = StyleSheet.create({});
