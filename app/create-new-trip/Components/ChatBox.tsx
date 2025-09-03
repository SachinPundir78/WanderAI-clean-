"use client";
import React, { useState, useEffect,useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Loader } from "lucide-react";
import axios from 'axios';
import EmptyBoxState from "./EmptyBoxState";
import { BackgroundGradient } from "../../../components/ui/background-gradient";
import GroupSizeUi from "./GroupSizeUi";
import BudgetUI from "./BudgetUI";
import SelectDays from "./SelectDays";
import FinalUi from "./FinalUi";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useUserDetail } from "@/app/Provider";
import { useTripDetail } from "@/app/Provider";
import { v4 as uuidv4 } from "uuid";

type Message = {
  role: string;
  content: string;
  ui?: string;
}

export type TripInfo = {
  budget: string;
  destination: string;
  duration: string;
  group_size: string;
  origin: string;
  hotels: Hotel[];
  itinerary: Itinerary[];
};
export type Hotel = {
   hotel_name: string;
   hotel_address: string;
   price_per_night: string;
   hotel_image_url: string;
   geo_coordinates: {
     latitude: number;
     longitude: number;
   };
   rating: number;
   description: string;
};
 
export type Activity = {
  place_name: string;
  place_details: string;
  place_image_url: string;
  geo_coordinates: {
    latitude: number;
    longitude: number;
  };
  place_address: string;
  ticket_pricing: string;
  time_travel_each_location: string;
  best_time_to_visit: string;
};

type Itinerary = {
  day: number;
  day_plan: string;
  best_time_to_visit_day: string;
  activities: Activity[];
};

function ChatBox() {
    
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isFinal, setIsFinal] = useState(false);
  const [tripDetails, setTripDetails] = useState<TripInfo>();
  const SaveTripDetail = useMutation(api.TripDetail.CreateTripDetail);
  const { userDetail, setUserDetail } = useUserDetail();
  //@ts-ignore
  const { tripDetail, setTripDetail } = useTripDetail();

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

   // 🔥 Auto-scroll effect
   useEffect(() => {
     if (messagesEndRef.current) {
       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
     }
   }, [messages, loading]);
  
  
  const onSend = async (input?: string) => {
    const messageContent = input ?? userInput;
    if (!messageContent?.trim()) return;

    setLoading(true);
    setUserInput("");

    const newMsg: Message = {
      role: "user",
      content: messageContent,
    };

    setMessages((prev) => [...prev, newMsg]);

    const result = await axios.post("api/aimodel", {
      messages: [...messages, newMsg],
      isFinal: isFinal,
    });

    !isFinal &&
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: result?.data?.resp,
          ui: result?.data?.ui,
        },
      ]);

    if (isFinal) {
      const fullData = {
        ...result?.data?.trip_plan,
        itinerary: result?.data?.itinerary || [],
      };

      setTripDetails(fullData);
      setTripDetail(fullData);

      const tripId = uuidv4();
      await SaveTripDetail({
        tripDetail: fullData,
        tripId: tripId,
        uid: userDetail?._id,
      });
    }

    setLoading(false);
  };


const handleUiSelection = async (value: string) => {
  if (!value?.trim()) return;

  setLoading(true);
  const newMsg: Message = { role: "user", content: value };
  setMessages((prev) => [...prev, newMsg]);

  const result = await axios.post("api/aimodel", {
    messages: [...messages, newMsg],
  });

  setMessages((prev) => [
    ...prev,
    { role: "assistant", content: result?.data?.resp, ui: result?.data?.ui },
  ]);

  setLoading(false);
};

  
  const RenderGenerativeUi=(ui:string) => {
    if (ui == 'budget') {
      return <BudgetUI onSelectedOption={handleUiSelection} />;
    } else if (ui == 'groupSize') {
      return <GroupSizeUi onSelectedOption={handleUiSelection} />;
    } else if (ui == 'tripDuration') {
      return <SelectDays onSelectedOption={handleUiSelection} />;
    }else if(ui == 'final'){
      return <FinalUi viewTrip={() => console.log()}
        disable={!tripDetails}
      />;
    }
    return null;
  }

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage?.ui == 'final') {
      setIsFinal(true);
      setUserInput('Ok, Great');
    }
  }, [messages])
  
  useEffect(() => {
    if (isFinal && userInput) {
      onSend();
    }
  },[isFinal]);

  return (
    <BackgroundGradient>
      <div className="h-[78vh] flex flex-col py-6 p-4 bg-gradient-to-b from-black via-neutral-900 to-black rounded-3xl">
        {messages?.length == 0 && (
          <EmptyBoxState
            onSelectOption={(v: string) => {
              setUserInput(v);
              onSend();
            }}
          />
        )}
        {/* Display Messages */}
        <section className="flex-1 overflow-y-auto p-4 ">
          {messages.map((msg: Message, index) =>
            msg.role == "user" ? (
              <div className="flex justify-end mt-2" key={index}>
                <div className="max-w-[80%] bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-md">
                  {typeof msg.content === "string" ? (
                    <p>{msg.content}</p>
                  ) : (
                    <pre className="whitespace-pre-wrap break-words">
                      {JSON.stringify(msg.content, null, 2)}
                    </pre>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex justify-start mt-2" key={index}>
                <div className="max-w-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-md">
                  {typeof msg.content === "string" ? (
                    <p>{msg.content}</p>
                  ) : (
                    <pre className="whitespace-pre-wrap break-words">
                      {JSON.stringify(msg.content, null, 2)}
                    </pre>
                  )}
                  {msg.ui && (
                    <div className="mt-3">{RenderGenerativeUi(msg.ui)}</div>
                  )}
                </div>
              </div>
            )
          )}

          {loading && (
            <div className="flex justify-start mt-2">
              <div className="max-w-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-md">
                <Loader className="animate-spin" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </section>
        {/* User Input */}
        <section>
          <div className="border rounded-2xl relative bg-black/30 mt-4">
            <Textarea
              placeholder="Creat A Trip for Your Next Vacation"
              className="w-full h-20 resize-none p-5 border-none focus-visible:ring-0 shadow-none lg:text-lg"
              onChange={(event) => setUserInput(event.target.value)}
              value={userInput}
            />

            <Button
              size={"icon"}
              className="absolute rounded-lg bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg"
              onClick={() => onSend()}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </section>
      </div>
    </BackgroundGradient>
  );
}

export default ChatBox;
