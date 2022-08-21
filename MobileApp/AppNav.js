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
import NewsUpdatesScreen from "./screens/news/NewsUpdatesScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import TrainScheduleResultScreen from "./screens/schedules/TrainScheduleResultScreen";
import BookingSearch from "./screens/booking/BookingSearchScreen";
import ModeratorLiveUpdateScreen from "./screens/liveUpdates/ModeratorLiveUpdateScreen";
import AvailableTrainsScreen from "./screens/liveUpdates/AvailableTrainsScreen";
import RegisterScreen from "./screens/auth/RegisterScreen";
import ForgotPasswordScreen from "./screens/auth/ForgotPasswordScreen";

import { AuthContext, AuthProvider } from "./context/AuthContext";
import { useContext } from "react";
import { useState } from "react";
import ProfileScreen from "./screens/profile/ProfileScreen";

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
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    );
  }
};

export default AppNav;

const styles = StyleSheet.create({});
