"use client";
import React, { useState, useEffect } from "react";
import ChatBox from "./Components/ChatBox";
import Itinerary from "./Components/Itinerary";
import { useTripDetail } from "../Provider";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Globe2, Plane } from "lucide-react";

const GlobeMap = dynamic(() => import("./Components/GlobeMap"), {
  ssr: false,
});

function CreateNewTrip() {
  // @ts-ignore
  const { tripDetail, setTripDetail } = useTripDetail();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (tripDetail) {
      setActiveIndex(0);
    } else {
      setActiveIndex(1);
    }
  }, [tripDetail]);

  return (
    <div className="text-white grid grid-cols-1 md:grid-cols-5 gap-5 px-10 py-5">
      {/* Left side (Chat) */}
      <div className="col-span-2">
        <ChatBox />
      </div>

      {/* Right side (Itinerary or Globe) */}
      <div className="col-span-3 relative">
        {activeIndex == 0 ? <Itinerary /> : <GlobeMap />}

        {/* Desktop / Tablet Button with Tooltip */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => setActiveIndex(activeIndex == 0 ? 1 : 0)}
              size={"sm"}
              className="absolute bottom-3 left-[97%] translate-x-[-50%] rounded-lg 
                         bg-gradient-to-r from-orange-400 to-red-600 
                         hover:from-yellow-400 hover:to-orange-700 
                         hidden sm:flex"
            >
              {activeIndex == 0 ? <Plane /> : <Globe2 />}
            </Button>
          </TooltipTrigger>
          <TooltipContent>Switch between Map and Trip</TooltipContent>
        </Tooltip>

        {/* Mobile Button (Floating at bottom-center, no tooltip) */}
        <Button
          onClick={() => setActiveIndex(activeIndex == 0 ? 1 : 0)}
          size={"sm"}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 rounded-full 
                     bg-gradient-to-r from-orange-400 to-red-600 
                     hover:from-yellow-400 hover:to-orange-700 
                     sm:hidden"
        >
          {activeIndex == 0 ? <Plane /> : <Globe2 />}
        </Button>
      </div>
    </div>
  );
}

export default CreateNewTrip;
