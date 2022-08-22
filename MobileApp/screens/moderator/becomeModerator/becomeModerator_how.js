import { StyleSheet,View, Text,Button, ScrollView,Image } from 'react-native'
import {CardImage} from 'react-native-cards'
import React from 'react'
import tw from "twrnc";

const howtobecomeModerator = () => {
  return (
      <View style={tw`flex flex-col pl-6 pr-6 py-10 bg-[#ffffff]`}>
      <ScrollView style={tw`flex bg-[#ffffff] flex-col h-full `}>        
          <Image source={require('./../../../assets/Moderator/howtobecome1.png')} style={{ width: 180, height: 150,backgroundColor:'#fff',alignSelf: "center" }} />          
          <Text style={tw`ml-2 text-sm font-medium text-center text-[#000000] flex-1`}>You can provide us necessary data with a simple click!</Text>
          
          <Image source={require('./../../../assets/Moderator/howtobecome2.png')} style={{width: 180,height: 150, backgroundColor:'#fff',alignSelf: "center" }}/>          
          <Text style={tw`ml-2 text-sm font-medium text-center text-[#000000] flex-1`}>We will review your data to help improve the quality of our system.</Text>
       
          <Image source={require('./../../../assets/Moderator/howtobecome3.png')}style={{width: 180,height: 150,backgroundColor:'#fff',alignSelf: "center" }} />          
          <Text style={tw`ml-2 text-sm font-medium text-center text-[#000000] flex-1`}>Now you are a moderator contributing to our system!</Text>
             
      </ScrollView>
       <Button style={tw`bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 pb-10 rounded`}
        title="Get Started"
        // onPress={() => Alert.alert('Simple Button pressed')}      
      />
</View>
 
  )
}

export default howtobecomeModerator

const styles = StyleSheet.create({})