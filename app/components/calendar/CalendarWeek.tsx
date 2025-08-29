import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { WeekCalendar } from 'react-native-calendars';

const CalendarWeek = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0] // Today's date in YYYY-MM-DD format
  );

  // Mock data - replace with actual streak/entry data
  const markedDates = {
    [selectedDate]: {
      selected: true,
      selectedColor: '#007AFF', // iOS blue color matching the UI
    },
    // Example: marking days with entries (you'll populate this from your data)
    '2024-08-10': { marked: true, dotColor: '#007AFF' },
    '2024-08-12': { marked: true, dotColor: '#007AFF' },
    '2024-08-14': { marked: true, dotColor: '#007AFF' },
  };

  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
    // Handle day selection - navigate to that day's entries or trigger mood check-in
    console.log('Selected day:', day);
  };

  return (
    <View style={styles.container}>
      <WeekCalendar
        testID="calendar"
        current={selectedDate}
        onDayPress={onDayPress}
        markedDates={markedDates}
        firstDay={0} // Start week on Sunday (matching your UI)
        allowShadow={false}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#8E8E93', // iOS gray for day labels
          selectedDayBackgroundColor: '#007AFF',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#007AFF',
          dayTextColor: '#000000',
          textDisabledColor: '#C7C7CC',
          dotColor: '#007AFF',
          selectedDotColor: '#ffffff',
          arrowColor: '#007AFF',
          monthTextColor: '#000000',
          indicatorColor: '#007AFF',
          textDayFontFamily: 'System',
          textMonthFontFamily: 'System',
          textDayHeaderFontFamily: 'System',
          textDayFontWeight: '400',
          textMonthFontWeight: '600',
          textDayHeaderFontWeight: '400',
          textDayFontSize: 17,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 13,
        }}
        style={styles.calendar}
      />
    </View>
  );
};

export default CalendarWeek;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
  },
  calendar: {
    paddingBottom: 10,
  },
});