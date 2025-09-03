"use client";
import React from "react";
import Image from "next/image";
import { Clock, ExternalLink, Ticket, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Activity } from "./ChatBox";
import { usePixabayImage } from "../hooks/usePixaBayImage";

type Props = {
  activity: Activity;
};

function PlaceCardItem({ activity }: Props) {
  const photoUrl = usePixabayImage(activity?.place_name);

  return (
    <div className="flex flex-col gap-2 max-w-sm h-full">
      {/* Clean card with subtle border */}
      <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/30 overflow-hidden hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 flex flex-col h-full">
        {/* Image container */}
        <div className="relative w-full h-48 rounded-xl overflow-hidden shadow">
          <Image
            src={photoUrl ? photoUrl : "/placeholder.jpg"}
            alt={activity?.place_name || "place-image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Content with flex-grow */}
        <div className="p-4 space-y-2 flex flex-col flex-grow">
          <h2 className="font-semibold text-lg text-white">
            {activity?.place_name}
          </h2>

          <p className="line-clamp-2 text-gray-400 flex-grow">
            {activity?.place_details}
          </p>

          <div className="flex flex-col gap-1">
            <p className="flex gap-2 text-blue-500 line-clamp-1 items-center">
              <Ticket className="w-4 h-4" /> {activity?.ticket_pricing}
            </p>
            <p className="flex gap-2 text-orange-400 line-clamp-1 items-center">
              <Clock className="w-4 h-4" /> {activity?.best_time_to_visit}
            </p>
            <p className="flex gap-2 text-rose-500 items-center">
              <Timer className="w-4 h-4" />{" "}
              {activity?.time_travel_each_location}
            </p>
          </div>

          <Link
            href={
              "https://www.google.com/maps/search/?api=1&query=" +
              activity?.place_name
            }
            target="_blank"
            className="mt-auto"
          >
            <Button
              variant={"outline"}
              className="w-full mt-2 font-sans text-black rounded-lg hover:bg-black hover:text-white flex justify-center items-center gap-1"
            >
              View <ExternalLink className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PlaceCardItem;
