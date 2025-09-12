import { Stack } from "expo-router";
import { useEffect } from "react";
import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./global.css";

export default function RootLayout() {
  useEffect(() => {
    LogBox.ignoreLogs(["Warning: ..."]); // Ignore specific logs
  }, []);

  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none", // Reduce initial animation complexity
        }}
      />
    </SafeAreaProvider>
  );
}
