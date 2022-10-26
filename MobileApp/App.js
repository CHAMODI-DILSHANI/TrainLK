import { AppState, StyleSheet } from "react-native";
import { AuthProvider } from "./context/AuthContext";
import AppNav from "./AppNav";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import utils from "./utils";
import { roundToNearestMinutes } from "date-fns";

var openTime = "";

export default function App() {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  // stores the time app opens

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        console.log("App has come to the foreground!");
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log("AppState", appState.current);
    });
    return () => {
      subscription.remove();
    };
  }, []);
  if (appStateVisible == "active") {
    openTime = new Date();
    // console.log("===== ", openTime, " =====");
  }
  // if (appStateVisible == "background") {
  //   console.log("App is active till :", new Date());
  // }

  const sendData = (time) => {
    console.log("sending data");
    axios.post(`${utils.lanip}/applog`, { userID: 1, time: time });
  };
  if (appStateVisible == "background") {
    // console.log("App is active till :", new Date());
    // console.log("Open time =====>>> ", openTime);
    const dateDiff = new Date() - openTime;
    // console.log("=========================");
    // console.log("Time dif is : ", dateDiff / (1000 * 60), " mins");
    const difInMinutes = Math.round(dateDiff / (1000 * 60));
    if (difInMinutes > 0) {
      sendData(difInMinutes);
    }
  }

  // console.log("Current state is: " + appStateVisible);

  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    padding: 15,
  },
});
