import { StyleSheet,View, Text,Button, ScrollView } from 'react-native'
import {CardImage} from 'react-native-cards'
import React from 'react'
import tw from "twrnc";

const becomeModeratorFeatures = () => {
  return (
      <View style={tw`flex flex-col pl-6 pr-6 py-10 bg-[#ffffff]`}>
      <ScrollView style={tw`flex bg-[#ffffff] flex-col h-full `}> 
       
          <CardImage source={require('./../../../assets/Moderator/feature1.png')} style={{ width: 180, height: 150,backgroundColor:'#fff',alignSelf: "center" }} />          
          <Text style={tw`ml-2 text-sm font-medium text-center text-[#000000] flex-1`}>You are the pillars holding up our community.</Text>

     
      
          <CardImage source={require('./../../../assets/Moderator/feature2.png')} style={{width: 180,height: 150, backgroundColor:'#fff',alignSelf: "center" }}/>          
          <Text style={tw`ml-2 text-sm font-medium text-center text-[#000000] flex-1`}>You will be able to provide data needed for many features in our system.</Text>

       
          <CardImage source={require('./../../../assets/Moderator/feature3.png')}style={{width: 180,height: 150,backgroundColor:'#fff',alignSelf: "center" }} />          
          <Text style={tw`ml-2 text-sm font-medium text-center text-[#000000] flex-1`}>You will be able to provide data needed for many features in our system.</Text>
       
       
      </ScrollView>
      <Button style={tw`bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 pb-10 rounded`}
        title="Yes ! I’m In"
        // onPress={() => Alert.alert('Simple Button pressed')}
        
      />
</View>
 
  )
}

export default becomeModeratorFeatures

const styles = StyleSheet.create({})