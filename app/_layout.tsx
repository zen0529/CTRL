import { Stack } from "expo-router";
import { useEffect } from "react";
import { LogBox } from "react-native";
import "./global.css";

export default function RootLayout() {
  useEffect(() => {
    LogBox.ignoreLogs(['Warning: ...']); // Ignore specific logs
  }, []);

  return (
    <Stack 
      screenOptions={{ 
        headerShown: false,
        animation: 'none' // Reduce initial animation complexity
      }}
    />
  );
}