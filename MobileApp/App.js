import { AppState, StyleSheet } from "react-native";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import AppNav from "./AppNav";

// import { AuthContext } from "./context/AuthContext";

var openTime = "";

export default function App() {
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
