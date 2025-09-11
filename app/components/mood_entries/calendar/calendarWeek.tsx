import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";

const CalendarWeek = () => {
  // const [selectedDate, setSelectedDate] = useState(
  //   new Date().toISOString().split('T')[0] // Today's date in YYYY-MM-DD format
  // );

  // // Mock data - replace with actual streak/entry data
  // const markedDates = {
  //   [selectedDate]: {
  //     selected: true,
  //     selectedColor: '#007AFF', // iOS blue color matching the UI
  //   },
  //   // Example: marking days with entries (you'll populate this from your data)
  //   '2024-08-10': { marked: true, dotColor: '#007AFF' },
  //   '2024-08-12': { marked: true, dotColor: '#007AFF' },
  //   '2024-08-14': { marked: true, dotColor: '#007AFF' },
  // };

  // const onDayPress = (day: any) => {
  //   setSelectedDate(day.dateString);
  //   // Handle day selection - navigate to that day's entries or trigger mood check-in
  //   console.log('Selected day:', day);
  // };

  const [checkedInDates, setCheckedInDates] = useState(new Set(["11"])); // Pre-populate with day 11
  const [currentWeekStart, setCurrentWeekStart] = useState(10);
  const [entries] = useState(22);
  const [favorites] = useState(5);
  const [currentStreak] = useState(1);

  // Generate week dates
  const generateWeek = (startDate: any) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return Array.from({ length: 7 }, (_, i) => ({
      date: startDate + i,
      day: days[i],
      isToday: startDate + i === 11, // August 11 is today (Monday)
    }));
  };

  const weekDates = generateWeek(currentWeekStart);

  const handleDrawCard = () => {
    const today = "11"; // Current date
    const newCheckedIn = new Set(checkedInDates);
    newCheckedIn.add(today);
    setCheckedInDates(newCheckedIn);

    // Here you could add logic to show a random self-awareness prompt
    alert(
      "🌟 Today's Reflection: What emotion am I feeling right now, and what might be causing it?"
    );
  };

  const isDateCheckedIn = (date: any) => {
    return checkedInDates.has(date.toString());
  };

  return (
    // <View style={styles.container} className=""> 
      <View style={styles.container} className="flex-row justify-between">
        {weekDates.map((date, index) => (
          <View key={index} className={`flex flex-col items-center`}>
            <View
              style={{
                paddingBottom: vs(8),
                paddingHorizontal: s(3),
                height: vs(60),
              }}
              className={`flex-col mb-2 items-center justify-center rounded-full ${date.isToday ? "bg-blue-500 " : "text-gray-600 hover:bg-gray-100"}`}
            >
              <View
                className={`w-12 flex-col items-center justify-center`}
              >
                <Text
                  className={`font-black text-2xl ${date.isToday ? "text-white" : "text-black"} `}
                >
                  {date.date}
                </Text>
                <Text
                  className={` font-normal text-lg ${date.isToday ? "text-white" : "text-gray-500"} `}
                >
                  {date.day}
                </Text>
              </View>
            </View>

            {/* Check-in dot */}
            <View className="mt-1">
              {isDateCheckedIn(date.date) ? (
                <View className="w-2 h-2 bg-blue-500 rounded-full"></View>
              ) : (
                <View className="w-2 h-2"></View>
              )}
            </View>
          </View>
        ))}
      </View>
    // </View>
  );
};

export default CalendarWeek;

const styles = StyleSheet.create({
  container: {
    marginTop: s(5),
    marginHorizontal: -s(7),
    backgroundColor: "#ffffff",
  },
});
