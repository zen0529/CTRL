import React from 'react';
import { StyleSheet } from 'react-native';
import { WeekCalendar } from 'react-native-calendars';

const calendar = () => {
  return (
    <WeekCalendar testID='calendar' />
  )
}

export default calendar

const styles = StyleSheet.create({})