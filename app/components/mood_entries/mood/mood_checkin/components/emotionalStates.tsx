import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { vs } from "react-native-size-matters";
import { emotionalStates } from "../_constants";
import useToggle from "../hooks/useToggle";

type emotionalStatesProps = {
    selectedEmotion: string[],
    setSelectedEmotion: React.Dispatch<React.SetStateAction<string[]>>;
};

const EmotionalStates = ({selectedEmotion, setSelectedEmotion} : emotionalStatesProps) => {
    const toggleEmotion = useToggle(selectedEmotion, setSelectedEmotion);
    return (
        <>
        <Text className="font-bold" style={{ marginBottom: vs(5) }}>
                  Emotional States
                </Text>
                <View
                  style={[styles.wrapContainer, { marginBottom: vs(15) }]}
                  className="border border-black"
                >
                  {emotionalStates.map((word) => (
                    <TouchableOpacity
                      key={word}
                      onPress={() => {
                        toggleEmotion(word);
                      }}
                      style={[
                        styles.pill,
                        selectedEmotion.includes(word) && styles.pillSelected,
                      ]}
                    >
                      <Text
                        style={[
                          styles.pillText,
                          selectedEmotion.includes(word) && styles.pillTextSelected,
                        ]}
                      >
                        {word}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
        </>
    )
};


export default EmotionalStates;

const styles = StyleSheet.create({
  wrapContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // <--- makes items wrap automatically
    justifyContent: "center",
  },
  pill: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16, // <--- lets width adjust to text
    margin: 5,
    backgroundColor: "#f2f2f2",
  },
  pillSelected: {
    backgroundColor: "#333",
    borderColor: "#333",
  },
  pillText: {
    color: "#000",
  },
  pillTextSelected: {
    color: "#fff",
  },
});
