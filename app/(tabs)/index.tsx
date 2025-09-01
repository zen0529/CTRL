import llm from "@/services/llm";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { s, vs } from "react-native-size-matters";
import CalendarModal from "../components/Mood_Entries/CustomCalendarModal";

const Index = () => {
  const insets = useSafeAreaInsets();
  const month = new Date().toLocaleString("default", { month: "long" });
  console.log("==== TEST LOG ===="); // Add this simple log
  
    useEffect(() => {
    const fetchLLM = async () => {
      try {
        const result = await llm();
        console.log(`LLM result:`, result);
      } catch (error) {
        console.error('Error calling LLM:', error);
      }
      console.log('==== TEST LOG ====');  // Add this simple log
    };

    fetchLLM();
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={{
        paddingTop: insets.top,
        // paddingRight: insets.right,
      }}
      className="h-full w-full"
    >
      <View
        className="flex-col border border-black"
        style={{ marginLeft: s(20), marginRight: s(20) }}
      >
        <View
          className="flex-row justify-between items-between"
          style={{ paddingHorizontal: s(20), paddingTop: vs(10) }}
        >
          <Text>{month}</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Ionicons name="calendar" size={24} color="#007AFF"></Ionicons>
          </TouchableOpacity>
          {/* <Calendar /> */}
          <CalendarModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            month={month}
          />
        </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
