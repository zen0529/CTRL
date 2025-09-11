import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";

interface CalendarProps {
  visible: boolean;
  onClose: () => void;
  month: string;
}

const CalendarModal = ({ visible, onClose, month }: CalendarProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 bg-white/50 justify-start items-center">
          {/* Stop touches inside modal from closing */}
          <TouchableWithoutFeedback>
            <View
              style={{ marginTop: 50, marginHorizontal: 50 , alignSelf: "stretch"}}
              className=" bg-white h-20 items-end justify-start rounded-xl"
            >
              <TouchableOpacity onPress={onClose}>
                <Ionicons name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>

      {/* <RFCalendar
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
      /> */}
    </Modal>
  );
};

export default CalendarModal;

const styles = StyleSheet.create({});
