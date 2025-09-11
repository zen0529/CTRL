import React from "react";
import { Text } from "react-native";
import { vs } from "react-native-size-matters";

const Header = () => {
  return (
    <>
      <Text className="font-bold" style={{ marginBottom: vs(5) }}>
        {"Today's Reflection "}
      </Text>
      <Text style={{ marginBottom: vs(10) }}>
        Draw a CTRL card and begin your {"\n"}
        self awareness journey
      </Text>
    </>
  );
};

export default Header;
