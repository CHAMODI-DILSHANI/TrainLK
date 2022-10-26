import { AppState, StyleSheet } from "react-native";
import { AuthProvider } from "./context/AuthContext";
import AppNav from "./AppNav";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

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
    console.log("App is active from :", new Date());
  }
  // if (appStateVisible == "background") {
  //   console.log("App is active till :", new Date());
  // }

  if (appStateVisible == "background") {
    console.log("App is active till :", new Date());
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
