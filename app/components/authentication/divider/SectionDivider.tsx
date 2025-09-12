import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { s } from "react-native-size-matters";

type sectionDividerProps = {
  label: string;
};

const SectionDivider = ({ label }: sectionDividerProps) => {
  return (
    <View className="flex-row justify-between items-center">
      <View style={styles.line}></View>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.line}></View>
    </View>
  );
};

export default SectionDivider;

const styles = StyleSheet.create({
  line: {
    flex: 1,
    height: 2,
    backgroundColor: "#ccc",
  },
  text: {
    paddingHorizontal: s(20),
  },
});
