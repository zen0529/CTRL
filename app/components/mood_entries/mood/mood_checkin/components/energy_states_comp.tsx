import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { vs } from "react-native-size-matters";
import { energy_states } from "../_constants";
import { createToggle } from "../hooks/useToggle";

const [selected_energy, set_selected_energy] = React.useState<string[]>([]);

const toggle_energy = createToggle(selected_energy, set_selected_energy);
export const EnergyStates = () => {
  return (
    <>
      <Text className="font-bold" style={{ marginBottom: vs(5) }}>
        Energy States
      </Text>
      <View
        style={[styles.wrapContainer, { marginBottom: vs(15) }]}
        className="border border-black"
      >
        {energy_states.map((energy) => (
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
