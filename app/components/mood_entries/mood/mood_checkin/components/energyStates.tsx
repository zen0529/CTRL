import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { vs } from "react-native-size-matters";
import { energyStates } from "../_constants";
import useToggle from "../hooks/useToggle";

type energyStatesProps = {
  selected_energy: string[];
  set_selected_energy: React.Dispatch<React.SetStateAction<string[]>>;
};
const EnergyStates = ({selected_energy, set_selected_energy} : energyStatesProps) => {
  const toggle_energy = useToggle(selected_energy, set_selected_energy);
  return (
    <>
      <Text className="font-bold" style={{ marginBottom: vs(5) }}>
        Energy States
      </Text>
      <View
        style={[styles.wrapContainer, { marginBottom: vs(15) }]}
        className="border border-black"
      >
        {energyStates.map((energy) => (
          <TouchableOpacity
            key={energy}
            onPress={() => {
              toggle_energy(energy);
            }}
            style={[
              styles.pill,
              selected_energy.includes(energy) && styles.pillSelected,
            ]}
          >
            <Text
              style={[
                styles.pillText,
                selected_energy.includes(energy) && styles.pillTextSelected,
              ]}
            >
              {energy}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default EnergyStates;
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
