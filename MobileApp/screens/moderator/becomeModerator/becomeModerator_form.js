import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc";
// import {
//  Dropdown }
//  from 'react-native-material-dropdown';
// const stations = [
//   { id: 1, name: "Colombo Fort" },
//   { id: 2, name: "Hikkaduwa" },
//   { id: 3, name: "Australia" },
//   { id: 4, name: "Ireland" },
// ];

const becomeModeratorFormScreen = () => {
  return (
    <View style={tw`flex flex-col pl-6 pr-6 py-10 bg-[#ffffff]`}>
      <Text style={tw`ml-2 text-xl font-semibold text-center text-[#000000]`}>Provide Your Details</Text>

        <Text style={tw`mt-4 font-medium text-base`}>National Identity Card No.</Text>
        <TextInput
            style={[tw`bg-transparent my-3 border-[#A3A3A3] border h-11`]}
            autoCapitalize="none"
        />
        <Text style={tw`mt-1 font-medium text-base`}>Contact Number</Text>
        <TextInput
            style={[tw`bg-transparent my-3 border-[#A3A3A3] border h-11`]}
            autoCapitalize="none"
        />
        <Text style={tw`mt-1 font-medium text-base`}>Workplace</Text>
        <TextInput
            style={[tw`bg-transparent my-3 border-[#A3A3A3] border h-11`]}
            autoCapitalize="none"
        />
        <Text style={tw`mt-1 font-medium text-base`}>Travel Frequency</Text>
        <TextInput
            style={[tw`bg-transparent my-3 border-[#A3A3A3] border h-11`]}
            autoCapitalize="none"
        />
        <Text style={tw`mt-1 font-medium text-base`}>Description</Text>
        <TextInput
            style={[tw`bg-transparent my-3 border-[#A3A3A3] border h-11`]}
            autoCapitalize="none"
            placeholder="Add decrpition about you"
        />
        <View style={tw``}>
        <TouchableOpacity
          style={[
            tw`flex flex-row justify-center items-center bg-[#34C759] p-2.3 ml-20 mr-20 mt-5 rounded-md`,
          
          ]}
        //   onPress={() => {
        //   }}
        >
          <Text style={tw`font-medium text-white`}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
    
    
  )
}

export default becomeModeratorFormScreen

const styles = StyleSheet.create({})