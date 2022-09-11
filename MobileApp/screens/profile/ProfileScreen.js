import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import TopBar from "../../components/navigation/TopBar";
import tw from "twrnc";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import jwt_decode from "jwt-decode";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const { logout } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState(null);
  const { accessToken } = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    var decoded = jwt_decode(accessToken);
    console.log(decoded);

    function fetchProfile() {
      const endpoint = `http://192.168.119.126:8080/api/v1/users/profile?id=${decoded.id}`;
      fetch(endpoint)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setUserInfo(json);
        });
    }

    fetchProfile();
  }, []);

  return (
    <View style={tw`bg-white`}>
      <TopBar title="Profile" goBack={true} />

      <View style={tw`pt-4 flex-col items-center`}>
        {userInfo && userInfo.picture && (
          <Image
            style={tw`w-20 h-20 rounded-50 border border-gray-400 p-2`}
            source={{
              uri: `${userInfo.picture}`,
            }}
          />
        )}

        <View style={tw`flex-row mt-2 items-center`}>
          <Text style={tw`text-blue-400 font-black mr-2`}>
            {userInfo && userInfo.accountType}
          </Text>

          {userInfo &&
            userInfo.accountType &&
            userInfo.accountType == "Moderator" && (
              <FontAwesomeIcon icon={faCheckCircle} style={tw`text-blue-400`} />
            )}
        </View>
      </View>

      <View style={tw`flex-col mb-4 bg-gray-100 p-3 rounded-2 m-3`}>
        <View style={tw`flex-row mb-4`}>
          <Text style={tw`font-bold`}>First Name: </Text>
          <Text>{userInfo && userInfo.firstName}</Text>
        </View>

        <View style={tw`flex-row mb-4`}>
          <Text style={tw`font-bold`}>Last Name: </Text>
          <Text>{userInfo && userInfo.lastName}</Text>
        </View>

        {userInfo && userInfo.email && (
          <View style={tw`flex-row`}>
            <Text style={tw`font-bold`}>Email: </Text>
            <Text>{userInfo && userInfo.email ? userInfo.email : ""}</Text>
          </View>
        )}
      </View>

      {userInfo && userInfo.accountType && userInfo.accountType != "Moderator" && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("BecomeModeratorStep1");
          }}
        >
          <View style={tw`p-2 bg-gray-200 m-3 rounded-2`}>
            <Text style={tw`text-center text-blue-400 font-black`}>
              Become a moderator
            </Text>
          </View>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        onPress={() => {
          logout();
        }}
      >
        <View style={tw`p-2 bg-gray-200 mb-3 mx-3 rounded-2`}>
          <Text style={tw`text-center text-blue-400 font-black`}>logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
