// import { HumanMessage, SystemMessage } from "@langchain/core/messages";
// import { ChatOpenAI } from "@langchain/openai";


// const model = new ChatOpenAI({ model: "gpt-4" });


// const messages = [
//   new SystemMessage("Translate the following from English into Italian"),
//   new HumanMessage("hi!"),
// ];

// await model.invoke(messages);
import OpenAI from 'openai';


const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.EXPO_PUBLIC_OPENAI_API_KEY,
});
console.log(process.env.EXPO_PUBLIC_OPENAI_API_KEY);
export default async function llm() {
  const completion = await openai.chat.completions.create({
    model: "deepseek/deepseek-chat-v3.1:free",
    messages: [
      {
        "role": "user",
        "content": "What is the meaning of life? Answer in one short sentence."
      }
    ],
    
  });

  console.log(completion.choices[0].message);
}

// main();