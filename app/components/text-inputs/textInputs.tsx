import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import { s, vs } from "react-native-size-matters";

type textInputProps = {
  name: string;
  inputPlaceholder: string;
};

const CustomTextInput = ({ name, inputPlaceholder }: textInputProps) => {
  return (
    <>
      <Text style={{ marginBottom: vs(5) }}>{name}</Text>
      <TextInput
        style={styles.TextInput}
        placeholder={inputPlaceholder}
      ></TextInput>
    </>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  TextInput: { 
    borderRadius: 5,
    borderWidth: 1, 
    borderColor: "grey", 
    paddingLeft: s(15) },
});
