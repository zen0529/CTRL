import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { s, vs } from "react-native-size-matters";

const GoogleAppleLogin = () => {
  return (
    <View className="flex-row justify-center items-center">
      <View style={[styles.container, {marginRight: s(20)} ] } >
        <Image
          source={require("../../../../assets/icons/authentication/google.png")}
          style={{ width: 30, height: 30 }}
        />
      </View>
      <View style={styles.container}>
        <Image
          source={require("../../../../assets/icons/authentication/apple-logo.png")}
          style={{ width: 30, height: 30 }}
        />
      </View>
    </View>
  );
};

export default GoogleAppleLogin;

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
  },
  container: {
    paddingVertical: vs(10),
    paddingHorizontal: vs(10),
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 12
  },
});
