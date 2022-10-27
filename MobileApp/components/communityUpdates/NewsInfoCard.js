import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Modal, Portal } from "react-native-paper";

const NewsInfoCard = props => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View>
      <TouchableOpacity
        style={[
          tw`flex-col bg-[#ffffff] rounded-xl p-4 mt-5`,
          { elevation: 3, shadowColor: "black" },
        ]}
        onPress={showModal}
      >
        <Text style={tw`font-semibold text-base mb-2`}>{props.title}</Text>
        <Text
          style={[
            tw`text-justify flex-auto text-[#444444] text-sm`,
            { flexWrap: "wrap" },
          ]}
          numberOfLines={4}
        >
          {props.data}
        </Text>
        <View style={[tw`pt-3.5 flex-row px-4 flex-row-reverse`]}>
          <Text style={tw`pl-2 text-[#444444] font-semibold text-xs`}>
            {props.time}
          </Text>
          <FontAwesomeIcon icon={faClockRotateLeft} color={"#444444"} />
        </View>
      </TouchableOpacity>

      <Portal style={tw`content-center p-20 justify-center`}>
        <Modal visible={visible} onDismiss={hideModal}>
          <View style={tw`bg-white rounded-xl mx-6 pt-3 pb-6 px-4`}>
            <Text style={tw`font-semibold text-base mb-2`}>{props.title}</Text>
            <Text
              style={[
                tw`text-justify flex-auto text-[#444444] text-sm`,
                { flexWrap: "wrap" },
              ]}
            >
              {props.data}
            </Text>
          </View>
        </Modal>
      </Portal>
    </View>
  );
};

export default NewsInfoCard;

const styles = StyleSheet.create({});
