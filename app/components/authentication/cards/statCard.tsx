import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { s } from 'react-native-size-matters';

type StatCardProps = {
  icon: React.ReactNode;
  label: string;
  value: number;
  style?: ViewStyle | ViewStyle[]
};

const StatCard = ({ icon, label, value, style }: StatCardProps) => {
  return (
    <View className="flex-row items-center justify-between bg-[#f1f7fb] rounded-xl px-4 py-3 mx-1" >
      <View className="flex-row items-center" style={{marginRight: s(46)}} >
        {icon}
        <Text style={{marginLeft: s(10)}} className="font-bold">{label}</Text>
      </View>
      <Text className="font-bold text-lg">{value}</Text>
    </View>
  )
}

export default StatCard

const styles = StyleSheet.create({})