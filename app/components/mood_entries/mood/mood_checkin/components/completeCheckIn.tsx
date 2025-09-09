import { Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { userInput } from "../interfaces/interface";
import handleCheckin from "../utils/handleCheckIn";

type completeCheckinProps = {
    input : userInput;
}
const CompleteCheckIn = ( { input }: completeCheckinProps ) => {
  return (
    <>
      <View className="flex-row justify-center align-center">
        <TouchableOpacity
          onPress={async () => {
            const userinput: userInput = {
              energyLevel: input.energyLevel,
              energyStates: input.energyStates,
              emotionalStates: input.emotionalStates,
              mentalStates: input.mentalStates,
              socialOrRelationalStates: input.socialOrRelationalStates,
              achievementOrPurposeStates: input.achievementOrPurposeStates,
            };
            console.log(input);
            const recommenedAction = await handleCheckin(userinput);
            console.log("Recommended Action:", recommenedAction);
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
    </>
  );
};

export default CompleteCheckIn;
