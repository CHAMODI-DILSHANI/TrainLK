import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Modal, Portal, Provider, FAB } from "react-native-paper";
import * as React from "react";
import tw from "twrnc";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import LostItemDataScreen from "./LostItemDataScreen";

const LostItemsScreen = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <Provider>
      <View style={tw`h-full`}>
        {/* <Text>LostItemsScreen</Text> */}
        <View style={tw`h-1/4`}>
          <Image
            style={tw`h-full w-full`}
            blurRadius={10}
            // resizeMode="cover"
            source={require("./../../assets/lost_and_found/lost-found.png")}
          />
        </View>
        <View style={tw`h-1/5 px-15 -mt-24`}>
          <Image
            style={tw`h-full rounded-2xl w-full`}
            // blurRadius={10}
            resizeMode="cover"
            source={require("./../../assets/lost_and_found/lost-found.png")}
          />
        </View>
        <View style={[styles.mainBody, tw`mt-2`]}>
          {/* <TouchableOpacity> */}
          <TouchableOpacity
            style={[
              tw`flex-row bg-[#ffffff] rounded-xl p-4 mt-5 items-center`,
              { elevation: 3, shadowColor: "black" },
            ]}
            onPress={showModal}
            // style={tw`flex-row h-40 bg-[#e4e7e7] rounded-xl p-4 mt-5`}
          >
            <Image
              style={tw`h-16 w-16 flex-0.25 `}
              // blurRadius={10}
              // resizeMode="cover"
              source={{
                uri: "https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/premium/wallet-dynamic-premium.png",
              }}
              resizeMode={"cover"}
            />
            <View style={[tw`flex-col flex-0.75`]}>
              <Text
                style={[
                  tw`px-4 text-justify flex-auto text-[#444444] text-sm`,
                  { flexWrap: "wrap" },
                ]}
                numberOfLines={4}
              >
                On 01.08.2022, a leather wallet was left in the train running
                from Mirigama to Colombo Fort. National Identity Card , Bank
                Cards and Driving License
              </Text>
              <View style={[tw`pt-2 flex-row px-4 flex-row-reverse`]}>
                <Text style={tw`pl-2 text-[#444444] font-semibold text-xs`}>
                  3 hrs ago
                </Text>
                <FontAwesomeIcon icon={faClockRotateLeft} color={"#444444"} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              tw`flex-row bg-[#ffffff] rounded-xl p-4 mt-5 items-center`,
              { elevation: 3, shadowColor: "black" },
            ]}
            onPress={showModal}
            // style={tw`flex-row h-40 bg-[#e4e7e7] rounded-xl p-4 mt-5`}
          >
            <Image
              style={tw`h-16 w-16 flex-0.25 `}
              // blurRadius={10}
              // resizeMode="cover"
              source={{
                uri: "https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/premium/wallet-dynamic-premium.png",
              }}
              resizeMode={"cover"}
            />
            <View style={[tw`flex-col flex-0.75`]}>
              <Text
                style={[
                  tw`px-4 text-justify flex-auto text-[#444444] text-sm`,
                  { flexWrap: "wrap" },
                ]}
                numberOfLines={4}
              >
                On 01.08.2022, a leather wallet was left in the train running
                from Mirigama to Colombo Fort. National Identity Card , Bank
                Cards and Driving License
              </Text>
              <View style={[tw`pt-2 flex-row px-4 flex-row-reverse`]}>
                <Text style={tw`pl-2 text-[#444444] font-semibold text-xs`}>
                  3 hrs ago
                </Text>
                <FontAwesomeIcon icon={faClockRotateLeft} color={"#444444"} />
              </View>
            </View>
          </TouchableOpacity>
          {/* </TouchableOpacity> */}
        </View>
        <FAB
          icon="plus"
          style={tw`absolute bottom-10 right-6 bg-[#b3b3b3]`}
          onPress={() => navigation.navigate(LostItemDataScreen)}
        />
      </View>

      {/* Modal  */}
      <Portal style={tw`content-center p-20 justify-center`}>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          style={[
            tw``,
            // { alignSelf: "center" },
          ]}
        >
          <View style={tw`bg-white rounded-xl mx-6 pt-3 pb-6`}>
            <Text
              style={tw`self-center mb-4 text-lg text-[#444444] font-medium`}
            >
              Item Details
            </Text>
            <Image
              style={tw`h-16 w-16 self-center`}
              // blurRadius={10}
              // resizeMode="cover"
              source={{
                uri: "https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/premium/wallet-dynamic-premium.png",
              }}
              // resizeMode={"cover"}
            />
            <Text
              style={tw`px-4 mt-7 text-justify flex-auto text-[#444444] text-sm`}
            >
              On 01.08.2022, a leather wallet was left in the train running from
              Mirigama to Colombo Fort. National Identity Card , Bank Cards and
              Driving License were left inside.
            </Text>
            <Text
              style={tw`px-4 mt-3 text-justify flex-auto text-[#444444] text-sm`}
            >
              Let me know if you get any information: 0703807405.
            </Text>
          </View>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default LostItemsScreen;

const styles = StyleSheet.create({
  mainBody: {
    padding: 20,
    // fontFamily: "Poppins-Regular",
  },
});
