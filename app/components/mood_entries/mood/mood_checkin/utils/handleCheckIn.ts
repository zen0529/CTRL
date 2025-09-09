import FetchRecommendedAction from "@/app/components/mood_entries/mood/mood_checkin/utils/fetchRecommendedAction";
import { userInput } from "../interfaces/interface";

const HandleCheckIn = async (input: userInput) => {
    try {
      const recommendedAction = await FetchRecommendedAction(input);
      return recommendedAction
      // console.log("Recommended Action:", recommendedAction);
     } catch (error) {
      console.error("Error calling LLM:", error);
      // throw error
    } 
  };

export default HandleCheckIn;