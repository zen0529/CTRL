import React, { useState } from "react";
import { Modal, StyleSheet } from "react-native";
import { Calendar as RFCalendar } from "react-native-calendars";

const Calendar = () => {
  const [modal, setModal] = useState(false);

  return (
    <Modal animationType="none" transparent={false} visible={true}  onRequestClose={() => setModal(true)}>
      <RFCalendar
        // Customize the appearance of the calendar
        style={{
          borderWidth: 1,
          borderColor: "gray",
          height: 350,
        }}
        // Specify the current date
        current={"2012-03-01"}
        // Callback that gets called when the user selects a day
        onDayPress={(day: any) => {
          console.log("selected day", day);
        }}
        // Mark specific dates as marked
        markedDates={{
          "2012-03-01": { selected: true, marked: true, selectedColor: "blue" },
          "2012-03-02": { marked: true },
          "2012-03-03": { selected: true, marked: true, selectedColor: "blue" },
        }}
      />
    </Modal>
  );
};

export default Calendar;

const styles = StyleSheet.create({});
