import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { s, vs } from "react-native-size-matters";
import StatCard from "../components/cards/statCard";
import DrawCard from "../components/draw-card/drawCard";
import Header from "../components/home-page/header";
import CalendarWeek from "../components/mood_entries/calendar/calendarWeek";
import CalendarModal from "../components/mood_entries/calendar/customCalendarModal";

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
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: insets.top,
      }}
    >
      <View
        style={{
          marginLeft: s(15),
          marginRight: s(15),
        }}
      >
        <Header />
        <View
          className="flex-col border border-black"
          style={{
            paddingHorizontal: s(10),
            paddingVertical: vs(10),
            marginBottom: vs(20),
          }}
        >
          <View className="flex-row justify-between items-between ">
            <Text className="font-bold text-xl">{month}</Text>
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
          <CalendarWeek />
        </View>
        {/* DrawCardComponent */}
        <DrawCard />
        <View className="flex-row">
          <StatCard
            icon={
              <Octicons
                // style={{ marginRight: vs(10) }}
                name="checklist"
                size={24}
                color="orange"
              />
            }
            label="Entries"
            value={22}
          />
          <StatCard icon={<AntDesign name="hearto" size={24} color="red" />} label="Favorites" value={5} />
        </View>
      </View>
    </View>
  );
};

export default Index;
