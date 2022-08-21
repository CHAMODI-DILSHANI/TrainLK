import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, CreateContext, useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const login = async (access_token, refresh_token) => {
    setIsLoading(true);
    setAccessToken(access_token);
    setRefreshToken(refresh_token);
    try {
      await AsyncStorage.setItem("accessToken", access_token);
      await AsyncStorage.setItem("refreshToken", refresh_token);
    } catch (e) {
      console.log(e);
    }

    setIsLoading(false);
  };

  const logout = async () => {
    setAccessToken(null);
    setRefreshToken(null);
    try {
      await AsyncStorage.removeItem("accessToken");
      await AsyncStorage.removeItem("refreshToken");
    } catch (e) {
      console.log(e);
    }
  };

  const getTokens = async () => {
    try {
      setIsLoading(true);
      const accessToken = await AsyncStorage.getItem("accessToken");
      setAccessToken(accessToken);
      const refreshToken = await AsyncStorage.getItem("refreshToken");
      setRefreshToken(refreshToken);
      setIsLoading(false);
    } catch (err) {
      console.log("-------- ASYNC STORAGE ------------");
      console.log(err);
    }
  };

  useEffect(() => {
    getTokens();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        accessToken,
        refreshToken,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
