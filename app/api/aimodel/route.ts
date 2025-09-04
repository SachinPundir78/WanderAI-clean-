import { NextRequest, NextResponse } from "next/server";
import { aj } from "@/lib/arcjet";
import { currentUser, auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// List all your Gemini API keys here
const apiKeys = [
  process.env.GEMINI_API_KEY!,
  process.env.GEMINI_API_KEY_1!,
  process.env.GEMINI_API_KEY_2!,
  process.env.GEMINI_API_KEY_3!,
];

let currentKeyIndex = 0;

// Prompts remain the same
const PROMPT = `
IMPORTANT: You must ALWAYS return a valid JSON object, nothing else. 
If you are unsure, output null values. 
Do NOT add explanations or extra text.

You are an AI Trip Planner Agent. Your ONLY job is to collect trip details step by step.

Required fields to collect IN ORDER:
1. origin (starting location)
2. destination (city or country)
3. group_size (Solo, Couple, Family, Friends)
4. budget (Cheap, Moderate, Luxury)
5. duration (number of days)
6. interests (adventure, sightseeing, cultural, food, nightlife, relaxation, etc.)
7. preferences (special requirements, if any)

Rules:
- ALWAYS check what has already been collected. NEVER repeat questions for fields that are already filled.
- Ask ONLY ONE question at a time.
- If the user’s answer is unclear, ask for clarification — do not move to the next question yet.
- Do NOT generate a trip plan until ALL 7 details are collected.
- Use a friendly, conversational tone.
- Response MUST be a strict JSON object. Include all 7 fields in "collected", even if null.
- NEVER return plain text outside JSON.

Response format:

{
 "resp": "Your next friendly question to the user (if all details are collected, always set this to 'Generating your perfect trip plan...')",
  "ui": "groupSize | budget | tripDuration | final | none",
  "collected": {
    "origin": "string or null",
    "destination": "string or null",
    "group_size": "string or null",
    "budget": "string or null",
    "duration": "string or null",
    "interests": "string or null",
    "preferences": "string or null"
  }
}
`;

const FINAL_PROMPT = `
IMPORTANT: You must ALWAYS return a valid JSON object, nothing else. 
If you are unsure, output "N/A" values. 
Do NOT add explanations or extra text.

You now have ALL trip details: origin, destination, group_size, budget, duration, interests, preferences.

Generate a COMPLETE travel plan that includes:
- Hotels (minimum 3) with full details: name, address, price_per_night, hotel_image_url, geo_coordinates (latitude, longitude), rating, description.
- A FULL day-wise itinerary for the given duration. Each day MUST include:
  - day (number)
  - day_plan (overview of the day)
  - best_time_to_visit_day
  - activities (at least 3 per day), each with:
    - place_name
    - place_details
    - place_image_url
    - geo_coordinates (latitude, longitude)
    - place_address
    - ticket_pricing
    - time_travel_each_location
    - best_time_to_visit

Rules:
- ALL fields MUST be included exactly as in the schema.
- If data is unavailable, use "N/A" instead of leaving it out.
- Output ONLY strict JSON. No extra text, no explanations.

Schema:

{
  "trip_plan": {
    "origin": "string",
    "destination": "string",
    "group_size": "string",
    "budget": "string",
    "duration": "string",
    "hotels": [
      {
        "hotel_name": "string",
        "hotel_address": "string",
        "price_per_night": "string",
        "hotel_image_url": "string",
        "geo_coordinates": { "latitude": number, "longitude": number },
        "rating": number,
        "description": "string"
      }
    ]
  },
  "itinerary": [
    {
      "day": number,
      "day_plan": "string",
      "best_time_to_visit_day": "string",
      "activities": [
        {
          "place_name": "string",
          "place_details": "string",
          "place_image_url": "string",
          "geo_coordinates": { "latitude": number, "longitude": number },
          "place_address": "string",
          "ticket_pricing": "string",
          "time_travel_each_location": "string",
          "best_time_to_visit": "string"
        }
      ]
    }
  ]
}
`;
function cleanGeminiResponse(text: string): string {
  // Remove markdown code fences like ```json ... ```
  return text.replace(/```json|```/g, "").trim();
}

// Wrapper to handle rate-limit rotation
async function generateWithRotation(prompt: string) {
  let attempt = 0;
  const maxAttempts = apiKeys.length;

  while (attempt < maxAttempts) {
    try {
      const apiKey = apiKeys[currentKeyIndex];
      console.log(`Using Gemini API key index ${currentKeyIndex}: ${apiKey}`); // <-- Log key
      const genAI = new GoogleGenerativeAI(apiKeys[currentKeyIndex]);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      return cleanGeminiResponse(result.response.text());
    } catch (err: any) {
      // If rate limit error, switch key
      if (err?.message?.includes("429") || err?.status === 429) {
        currentKeyIndex = (currentKeyIndex + 1) % apiKeys.length;
        attempt++;
        console.log(`Rate limit hit. Switching API key to index ${currentKeyIndex}`);
        continue;
      }
      throw err; // other errors
    }
  }

  throw new Error("All API keys exhausted due to rate limits");
}


export async function POST(req: NextRequest) {
  const { messages, isFinal } = await req.json();
  const user = await currentUser();
  const { has } = await auth();
  const hasPremiumAccess = has({ plan: "monthly" });

  const decision = await aj.protect(req, {
    userId: user?.primaryEmailAddress?.emailAddress ?? "guest",
    requested: isFinal ? 5 : 0,
  });

  if ((decision?.reason as any).remaining === 0 && !hasPremiumAccess) {
    return NextResponse.json({ resp: "No Free Credit Remaining", ui: "limit" });
  }

  const prompt = isFinal ? FINAL_PROMPT : PROMPT;
  const userMessage = messages
    .map((m: any) => `${m.role}: ${m.content}`)
    .join("\n");

  try {
    const text = await generateWithRotation(`${prompt}\n${userMessage}`);
    return NextResponse.json(JSON.parse(text));
  } catch (e: unknown) {
    console.error("Gemini request error:", e);
    return NextResponse.json({
      error: (e as Error).message || "Something went wrong",
    });
  }
}




//This code is for openRouter AI model
// import { NextRequest, NextResponse } from "next/server";
// import OpenAI from "openai";
// import { aj } from "../arcjet/route";
// import { currentUser } from "@clerk/nextjs/server";
// import { auth } from "@clerk/nextjs/server";

// const openai = new OpenAI({
//   baseURL: "https://openrouter.ai/api/v1",
//   apiKey: process.env.OPENROUTER_API_KEY,
// });

// const PROMPT = 
// IMPORTANT: You must ALWAYS return a valid JSON object, nothing else. 
// If you are unsure, output null values. 
// Do NOT add explanations or extra text.

// You are an AI Trip Planner Agent. Your ONLY job is to collect trip details step by step.

// Required fields to collect IN ORDER:
// 1. origin (starting location)
// 2. destination (city or country)
// 3. group_size (Solo, Couple, Family, Friends)
// 4. budget (Cheap, Moderate, Luxury)
// 5. duration (number of days)
// 6. interests (adventure, sightseeing, cultural, food, nightlife, relaxation, etc.)
// 7. preferences (special requirements, if any)

// Rules:
// - ALWAYS check what has already been collected. NEVER repeat questions for fields that are already filled.
// - Ask ONLY ONE question at a time.
// - If the user’s answer is unclear, ask for clarification — do not move to the next question yet.
// - Do NOT generate a trip plan until ALL 7 details are collected.
// - Use a friendly, conversational tone.
// - Response MUST be a strict JSON object. Include all 7 fields in "collected", even if null.
// - NEVER return plain text outside JSON.

// Response format:

// {
//   "resp": "Your next friendly question to the user",
//   "ui": "groupSize | budget | tripDuration | final | none",
//   "collected": {
//     "origin": "string or null",
//     "destination": "string or null",
//     "group_size": "string or null",
//     "budget": "string or null",
//     "duration": "string or null",
//     "interests": "string or null",
//     "preferences": "string or null"
//   }
// }
// ;


// const FINAL_PROMPT = 
// IMPORTANT: You must ALWAYS return a valid JSON object, nothing else. 
// If you are unsure, output "N/A" values. 
// Do NOT add explanations or extra text.

// You now have ALL trip details: origin, destination, group_size, budget, duration, interests, preferences.

// Generate a COMPLETE travel plan that includes:
// - Hotels (minimum 3) with full details: name, address, price_per_night, hotel_image_url, geo_coordinates (latitude, longitude), rating, description.
// - A FULL day-wise itinerary for the given duration. Each day MUST include:
//   - day (number)
//   - day_plan (overview of the day)
//   - best_time_to_visit_day
//   - activities (at least 3 per day), each with:
//     - place_name
//     - place_details
//     - place_image_url
//     - geo_coordinates (latitude, longitude)
//     - place_address
//     - ticket_pricing
//     - time_travel_each_location
//     - best_time_to_visit

// Rules:
// - ALL fields MUST be included exactly as in the schema.
// - If data is unavailable, use "N/A" instead of leaving it out.
// - Output ONLY strict JSON. No extra text, no explanations.

// Schema:

// {
//   "trip_plan": {
//     "origin": "string",
//     "destination": "string",
//     "group_size": "string",
//     "budget": "string",
//     "duration": "string",
//     "hotels": [
//       {
//         "hotel_name": "string",
//         "hotel_address": "string",
//         "price_per_night": "string",
//         "hotel_image_url": "string",
//         "geo_coordinates": { "latitude": number, "longitude": number },
//         "rating": number,
//         "description": "string"
//       }
//     ]
//   },
//   "itinerary": [
//     {
//       "day": number,
//       "day_plan": "string",
//       "best_time_to_visit_day": "string",
//       "activities": [
//         {
//           "place_name": "string",
//           "place_details": "string",
//           "place_image_url": "string",
//           "geo_coordinates": { "latitude": number, "longitude": number },
//           "place_address": "string",
//           "ticket_pricing": "string",
//           "time_travel_each_location": "string",
//           "best_time_to_visit": "string"
//         }
//       ]
//     }
//   ]
// }
// ;


// export async function POST(req: NextRequest) {
//   const { messages, isFinal } = await req.json();
//   const user = await currentUser();
//   const { has } = await auth();
//   const hasPremiumAccess = has({ plan: "monthly" });
//   console.log(hasPremiumAccess);
//   const decision = await aj.protect(req, {
//     userId: user?.primaryEmailAddress?.emailAddress ?? "guest",
//     requested: isFinal ? 5 : 0, // deduct tokens only on final request
//   });

//   console.log("Arcjet decision:", decision);
//   //@ts-ignore
//   if (decision?.reason?.remaining == 0 && !hasPremiumAccess) {
//     return NextResponse.json({ resp: "No Free Credit Remaining", ui: "limit" });
//   }

//   try {
//     const completion = await openai.chat.completions.create({
//       model: "openai/gpt-oss-20b:free",
//       response_format: { type: "json_object" },
//       messages: [
//         {
//           role: "system",
//           content: isFinal ? FINAL_PROMPT : PROMPT,
//         },
//         ...messages,
//       ],
//     });
//     console.log(completion.choices[0].message);
//     console.dir(completion, { depth: null });
//     const message = completion.choices[0].message;
//     return NextResponse.json(JSON.parse(message.content ?? ""));
//   } catch (e) {
//     return NextResponse.json(e);
//   }
// } 