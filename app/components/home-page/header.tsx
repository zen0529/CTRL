import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";

const Header = () => {
  const user = "John";
  const streakNumber = 1;
  return (
    <View className="border border-black flex-row justify-between items-center" style={{marginBottom: vs(20)}}>
      <View className="flex-row items-center justify-center">
        <Text style={{marginRight: s(5)}} className='font-bold text-2xl'>Hello, {user}!</Text>
        <MaterialCommunityIcons name="crown-outline" size={27} color="black" />
      </View>
      <View className="flex-row items-center justify-center">
        <View className="flex-row items-center bg-blue-950 rounded-full" style={{marginRight: vs(7), paddingHorizontal: s(6)}}>
          <MaterialIcons name="local-fire-department" size={24} color="white" />
          <Text className='text-white'>{streakNumber} Streak</Text>
        </View>
        <Ionicons name="person-circle-outline" size={35} color="black" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
