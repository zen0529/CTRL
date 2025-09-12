import React from "react";
import { Text, View } from "react-native";
import { vs } from "react-native-size-matters";
type buttonProps = {
  buttonName: string;
};
const CustomButton = ({ buttonName }: buttonProps) => {
  return (
    <View className="flex-col justify-center items-center" style={{paddingVertical: vs(8), backgroundColor: '#0F3262'}}>
      <Text className="font-semibold text-white">{buttonName}</Text>
    </View>
  );
};

export default CustomButton;
