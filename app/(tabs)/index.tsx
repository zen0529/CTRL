import { userInput } from "@/interfaces/interface";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { s, vs } from "react-native-size-matters";
import CalendarModal from "../components/mood_entries/custom_calendar_modal";
const input: userInput = {
  energy_level: 1,
  energy_states: ["not energize"],
  emotional_states: ["sad"],
  mental_states: [],
  social_or_relational_states: [],
  achievement_or_purpose_states: [],
};


const Index = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(false);
  const month = new Date().toLocaleString("default", { month: "long" });

  //for generating recommended action
  // useEffect(() => {
  //   const fetchLLM = async () => {
  //     try {
  //       console.log("input", input);
  //       const recommendedAction = await FetchRecommendedAction(input);
  //       console.log("Recommended Action:", recommendedAction);
  //     } catch (error) {
  //       console.error("Error calling LLM:", error);
  //     }
  //   };

  //   fetchLLM();
  // }, []);

  return (
    <View
      style={{
        paddingTop: insets.top,
        marginLeft: s(15),
        marginRight: s(15),
      }}
      className="flex-1"
    >
      <View className="flex-col border border-black" style={{
        paddingHorizontal: s(10),
        paddingVertical: vs(10),
        marginBottom: vs(20),
      }}>
        <View 
          className="flex-row justify-between items-between"
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
      <View className="flex-col border border-black">
        <Text className="font-bold" style={{ marginBottom: vs(5) }}>{"Today's Reflection "}</Text>
        <Text style={{ marginBottom: vs(10) }}>Draw a CTRL card and begin your {"\n"} 
          self awareness journey
        </Text>
        <TouchableOpacity onPress={() => router.push("/pages/mood_checkin")} className="flex-row justify-center align-center bg-blue-950 rounded-md" style={{width: s(80)}}>
          <Text style={{ paddingVertical: vs(5), paddingHorizontal: s(5) }} className="text-white">Draw Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
