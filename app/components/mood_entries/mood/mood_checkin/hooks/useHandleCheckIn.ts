import FetchRecommendedAction from "@/services/llm";
import { userInput } from "../interfaces";

const handleCompleteCheckin = async (input: userInput) => {
    try {
      const recommendedAction = await FetchRecommendedAction(input);
      console.log("Recommended Action:", recommendedAction);
     } catch (error) {
      console.error("Error calling LLM:", error);
    } 
  };