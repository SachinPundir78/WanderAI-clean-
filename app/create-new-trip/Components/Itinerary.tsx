"use client";
import React, { useEffect, useState } from "react";
import { Timeline } from "../../../components/ui/timeline";
import HotelCardItem from "./HotelCardItem";
import PlaceCardItem from "./PlaceCardItem";
import { useTripDetail } from "@/app/Provider";
import { TripInfo } from "./ChatBox";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

function Itinerary() {
  //@ts-ignore
  const { tripDetail } = useTripDetail();
  const [tripData, setTripData] = useState<TripInfo | null>(null);

  useEffect(() => {
    if (tripDetail) {
      setTripData(tripDetail); 
    }
  }, [tripDetail]);


if (!tripData)
  return (
    <div className="relative flex items-center justify-center w-full h-[78vh]">
      <Image
        src="/placeholder1.jpg"
        alt="Loading..."
        width={800}
        height={800}
        className="w-full h-full object-cover rounded-3xl"
      />

      {/* Overlay Text with Reflection */}
      <div className="absolute bottom-10 text-center">
        <h2
          className="text-3xl font-bold  drop-shadow-lg flex items-center gap-3 justify-center"
          style={{
            background: "linear-gradient(to right, #FFD700, #FF8C00, #FF4500)", // yellow → orange → red
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          <span className="text-black">
            <ArrowLeft className="w-10 h-10" />
          </span>
          Getting to know you to build the perfect trip here...
        </h2>

        {/* Reflection */}
        <h2
          className="text-3xl font-bold text-black opacity-50 drop-shadow-lg flex items-center gap-3 justify-center transform scale-y-[-1] mt-2 blur-[1px]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(76,180,43,0.9), transparent)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          <ArrowLeft className="w-8 h-8" />
          Getting to know you to build the perfect trip here...
        </h2>
      </div>
    </div>
  );



  const data = [
    {
      title: "Hotels",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {tripData.hotels?.length ? (
            tripData.hotels.map((hotel) => (
              <HotelCardItem key={hotel.hotel_name} hotel={hotel} />
            ))
          ) : (
            <p className="text-gray-400">No hotels available</p>
          )}
        </div>
      ),
    },
    ...(tripData.itinerary?.length
      ? tripData.itinerary.map((dayData, idx) => ({
          title: `Day ${dayData.day || idx + 1}`,
          content: (
            <div>
              <p className="mb-2 font-bold text-xl text-gray-300">
                Best Time: {dayData?.best_time_to_visit_day || "N/A"}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dayData?.activities?.length ? (
                  dayData.activities.map((activity, index) => (
                    <PlaceCardItem
                      key={activity.place_name || index}
                      activity={activity}
                    />
                  ))
                ) : (
                  <p className="text-gray-400">No activities available</p>
                )}
              </div>
            </div>
          ),
        }))
      : []),
  ];

  return (
    <div className="relative w-full h-[78vh] overflow-auto">
      <Timeline data={data} tripData={tripData} />
    </div>
  );
}

export default Itinerary;
