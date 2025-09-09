import Slider from "@react-native-community/slider";
import React from "react";
import { Text, View } from "react-native";
import { vs } from "react-native-size-matters";
import { labels } from "../_constants";

type energyLevelProps = {
  energyLevel: number;
  setEnergyLevel: React.Dispatch<React.SetStateAction<number>>;
}

const EnergyLevel = ({energyLevel, setEnergyLevel }: energyLevelProps) => {
  return (
    <>
      <View className="flex-row justify-between align-center">
        <Text>Energy Level</Text>
        <Text>Icon</Text>
      </View>
      <Myslider energyLevel={energyLevel} setEnergyLevel={setEnergyLevel} />
      <SliderLabels />
    </>
  );
};

export default EnergyLevel;

const Myslider = ({energyLevel, setEnergyLevel}: energyLevelProps) => {

  return (
    <View>
      <Slider
        value={energyLevel}
        onValueChange={(val: number) => {
          setEnergyLevel(val);
        }}
        style={{ marginVertical: vs(20), height: vs(10) }}
        minimumValue={1}
        maximumValue={10}
        step={1}
        minimumTrackTintColor="#000"
        maximumTrackTintColor="#000000"
      />
    </View>
  );
};


const SliderLabels = () => {
  return (
    <View
      className="text-grey-600 flex-row justify-between align-center"
      style={{ marginBottom: vs(20) }}
    >
      {labels.map((label) => (
        <Text key={label} className="text-gray-600">
          {label}
        </Text>
      ))}
    </View>
  );
};
