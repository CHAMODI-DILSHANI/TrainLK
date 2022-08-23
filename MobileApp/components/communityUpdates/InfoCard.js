import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Modal, Portal } from "react-native-paper";

const InfoCard = (props) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View>
      <TouchableOpacity
        style={[
          tw`flex-row bg-[#ffffff] rounded-xl p-4 mt-5 items-center`,
          { elevation: 3, shadowColor: "black" },
        ]}
        onPress={showModal}
      >
        <Image
          style={tw`h-23 w-23 flex-0.25 `}
          source={{ uri: props.imageUri }}
          resizeMode={"center"}
        />
        <View style={[tw`flex-col flex-0.75`]}>
          <Text
            style={[
              tw`px-4 text-justify flex-auto text-[#444444] text-sm`,
              { flexWrap: "wrap" },
            ]}
            numberOfLines={4}
          >
            {props.data}
          </Text>
          <View style={[tw`pt-3.5 flex-row px-4 flex-row-reverse`]}>
            <Text style={tw`pl-2 text-[#444444] font-semibold text-xs`}>
              {props.time} ago
            </Text>
            <FontAwesomeIcon icon={faClockRotateLeft} color={"#444444"} />
          </View>
        </View>
      </TouchableOpacity>

      <Portal style={tw`content-center p-20 justify-center`}>
        <Modal visible={visible} onDismiss={hideModal}>
          <View style={tw`bg-white rounded-xl mx-6 pt-3 pb-6`}>
            <Text
              style={tw`self-center mb-4 text-lg text-[#444444] font-medium`}
            >
              Item Details
            </Text>
            <Image
              style={tw`h-16 w-16 self-center`}
              source={{ uri: props.imageUri }}
            />
            <Text
              style={tw`px-4 mt-7 text-justify flex-auto text-[#444444] text-sm`}
            >
              {props.data}
            </Text>
          </View>
        </Modal>
      </Portal>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({});
