import axios from "axios";
import { userInput } from "../interfaces/interface";

export default async function FetchRecommendedAction(user_input: userInput) {
  const maxRetries = 2;
  let attempt = 0;
  while (attempt < maxRetries) {
    try {
      console.log("user_input", user_input);

      const recommended_action = await axios.post(
        // "http://192.168.254.148:8000/Recommend_Actions", // for local
        "https://ctrl-api-five.vercel.app/Recommend_Actions", //deployed on free hosting
        user_input,
        {
          timeout: 10000, // add timeout to avoid crashing the app
        }
      );

      if (recommended_action.status !== 200) {
        return "LLM Services Unavailable";
      }
      return recommended_action.data;
    } catch (error) {
      attempt++;
      console.error("Request failed attempt number: ", attempt);

      if (attempt >= maxRetries) {
        throw error; 
      }
    }
  }
}
