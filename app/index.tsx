import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

const Index = () => {
  const bgColorAnim = useRef(new Animated.Value(0)).current; // 0 = initial state
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      Animated.timing(bgColorAnim, {
        toValue: 1, // animate to final state
        duration: 500, // half a second
        useNativeDriver: false, // color can't use native driver
      }).start(() => {
        router.push("/login");
      });
    }, 1000); 

    return () => clearTimeout(timeout);
  }, [bgColorAnim, router]);

  // Interpolate values to switch colors smoothly
  const backgroundColor = bgColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["transparent", "rgb(16,50,98)"], // bg transitions
  });

  const textColor = bgColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgb(16,50,98)", "white"], // blue-800 -> white
  });

  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
      }}
    >
      <Animated.Text
        style={{
          fontWeight: "900",
          fontSize: 72, // Tailwind's text-8xl approx
          color: textColor,
        }}
      >
        CTRL
      </Animated.Text>
    </Animated.View>
  );
};

export default Index;
