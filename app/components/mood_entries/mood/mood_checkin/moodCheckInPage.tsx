import React from "react";
import { Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import CompleteCheckIn from "./components/completeCheckIn";
import EmotionalStates from "./components/emotionalStates";
import EnergyLevel from "./components/energyLevel";
import EnergyStates from "./components/energyStates";
import { Header } from "./components/header";
import { userInput } from "./interfaces/interface";

const Index = () => {
  const [energyLevel, setEnergyLevel] = React.useState<number>(5);
  const [selected_emotion, set_selected_emotion] = React.useState<string[]>([]);
  const [selected_energy, set_selected_energy] = React.useState<string[]>([]);
  const [selected_mental, set_selected_mental] = React.useState<string[]>([]);
  const [selected_social_relational, set_selected_social_relational] =
    React.useState<string[]>([]);
  const [selected_achievement_purpose, set_selected_achievement_purpose] =
    React.useState<string[]>([]);

  React.useEffect(() => {
    console.log("selected_emotion updated:", selected_emotion);
    console.log("selected_energy updated:", selected_energy);
  }, [selected_emotion, selected_energy]);

  const checkinInput: userInput = {
    energyLevel: energyLevel,
    energyStates: selected_energy,
    emotionalStates: selected_emotion,
    mentalStates: selected_mental,
    socialOrRelationalStates: selected_social_relational,
    achievementOrPurposeStates: selected_achievement_purpose,
  };

  React.useEffect(() => {
    console.log("energyLevel:", energyLevel);
    console.log("selected_emotion updated:", selected_emotion);
    console.log("selected_energy updated:", selected_energy);
  }, [selected_emotion, selected_energy, energyLevel]);

  return (
    <View
      className="flex-1"
      style={{ paddingTop: vs(30), marginLeft: s(15), marginRight: s(15) }}
    >
      <Header />
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
        <EnergyLevel
          energyLevel={energyLevel}
          setEnergyLevel={setEnergyLevel}
        />
        {/* energy states */}
        <EnergyStates
          selected_energy={selected_energy}
          set_selected_energy={set_selected_energy}
        />
        <EmotionalStates
          selectedEmotion={selected_emotion}
          setSelectedEmotion={set_selected_emotion}
        />
        {/* handleCompleteCheckin */}
        <CompleteCheckIn input={checkinInput} />
      </View>
    </View>
  );
};

export default Index;
