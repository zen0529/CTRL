import { userInput } from "@/interfaces/interface";
import FetchRecommendedAction from "@/services/llm";
import Slider from "@react-native-community/slider";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { emotional_states, energy_states } from "../_constants";

const Mood_Checkin = () => {
  const [energy_level, set_energy_level] = React.useState(5);
  const labels = ["DRAINED", "NEUTRAL", "PEAK"];
  const [selected_emotion, set_selected_emotion] = React.useState<string[]>([]);
  const [selected_energy, set_selected_energy] = React.useState<string[]>([]);
  const [selected_mental, set_selected_mental] = React.useState<string[]>([]);
  const [selected_social_relational, set_selected_social_relational] =
    React.useState<string[]>([]);
  const [selected_achievement_purpose, set_selected_achievement_purpose] =
    React.useState<string[]>([]);
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleCompleteCheckin = async (input: userInput) => {
    if (!energy_level) {
      alert("No energy level selected");
      return;
    }

    setIsSubmitting(true);

    try {
    //   console.log("input", userInput);

      // 4. Call your LLM function
      const recommendedAction = await FetchRecommendedAction(input);
      console.log("Recommended Action:", recommendedAction);
     } catch (error) {
      console.error("Error calling LLM:", error);
    } finally {
      // 7. Reset loading state
      setIsSubmitting(false);
    }
  };

  const createToggle = (
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    return (word: string) => {
      if (selected.includes(word)) {
        setSelected(selected.filter((w) => w !== word));
      } else {
        setSelected([...selected, word]);
      }
    };
  };

  const toggle_emotion = createToggle(selected_emotion, set_selected_emotion);
  const toggle_energy = createToggle(selected_energy, set_selected_energy);

  React.useEffect(() => {
    console.log("selected_emotion updated:", selected_emotion);
    console.log("selected_energy updated:", selected_energy);
  }, [selected_emotion, selected_energy]);
  return (
    <View
      className="flex-1"
      style={{ paddingTop: vs(30), marginLeft: s(15), marginRight: s(15) }}
    >
      <View
        className="flex-row justify-between items-center"
        style={{ marginBottom: vs(20) }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-lg text-[#00bfff]" style={{}}>
            Cancel
          </Text>
        </TouchableOpacity>
        <Text className="text-lg">Mood</Text>
        <View style={{ width: 50 }}></View>
      </View>
      <View
        className="flex-col justify-center items-center"
        style={{ paddingHorizontal: s(15), paddingVertical: vs(20) }}
      >
        <Text className="font-bold text-base color-slate-400">
          Mood Check-in First
        </Text>
        <Text className="font-bold text-2xl">How are you feeling?</Text>
      </View>
      <View
        className="flex-col justify-between border border-black"
        style={{ paddingHorizontal: s(15), paddingVertical: vs(20) }}
      >
        <View className="flex-row justify-between align-center">
          <Text>Energy Level</Text>
          <Text>Icon</Text>
        </View>
        <View>
          <Slider
            value={energy_level}
            onValueChange={(val) => {
              console.log(val);
              set_energy_level(val);
            }}
            style={{ marginVertical: vs(20), height: vs(10) }}
            minimumValue={1}
            maximumValue={10}
            step={1}
            minimumTrackTintColor="#000"
            maximumTrackTintColor="#000000"
          />
        </View>
        <View
          className="text-grey-600 flex-row justify-between align-center"
          style={{ marginBottom: vs(20) }}
        >
          {labels.map((label) => (
            <Text key={label} className="text-gray-600">
              {label}
            </Text>
          ))}
        </View>

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
        <Text className="font-bold" style={{ marginBottom: vs(5) }}>
          Emotional States
        </Text>
        <View
          style={[styles.wrapContainer, { marginBottom: vs(15) }]}
          className="border border-black"
        >
          {emotional_states.map((word) => (
            <TouchableOpacity
              key={word}
              onPress={() => {
                toggle_emotion(word);
              }}
              style={[
                styles.pill,
                selected_emotion.includes(word) && styles.pillSelected,
              ]}
            >
              <Text
                style={[
                  styles.pillText,
                  selected_emotion.includes(word) && styles.pillTextSelected,
                ]}
              >
                {word}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="flex-row justify-center align-center">
          <TouchableOpacity
            disabled={isSubmitting}
            onPress={() => {
              const input: userInput = {
                energy_level: energy_level,
                energy_states: selected_energy,
                emotional_states: selected_emotion,
                mental_states: selected_mental,
                social_or_relational_states: selected_social_relational,
                achievement_or_purpose_states: selected_achievement_purpose,
              };
              console.log(input);
              handleCompleteCheckin(input);
            }}
            className="flex-row justify-center align-center bg-blue-950 rounded-md"
            style={{ width: "50%" }}
          >
            <Text
              style={{ paddingVertical: vs(5), paddingHorizontal: s(5) }}
              className="text-white"
            >
              Complete Check-in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Mood_Checkin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
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
