"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Hotel } from "./ChatBox";
import { Star, Wallet, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
import { usePixabayImage } from "../hooks/usePixaBayImage";

type Props = {
  hotel: Hotel;
};

function HotelCardItem({ hotel }: Props) {
  const photoUrl = usePixabayImage(hotel?.hotel_name);

  return (
    <div className="flex flex-col gap-2 max-w-sm h-full">
      {/* Clean card with subtle border */}
      <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/30 overflow-hidden hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 flex flex-col h-full">
        {/* Image container */}
        <div className="relative w-full h-48 rounded-xl overflow-hidden shadow">
          <Image
            src={photoUrl ? photoUrl : "/placeholder.jpg"}
            alt={hotel?.hotel_name || "place-image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />

          {/* Star rating badge at top */}
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-yellow-300 px-2 py-1 rounded-lg flex items-center gap-1 text-sm">
            <Star className="w-3 h-3 fill-current" />
            {hotel.rating}
          </div>
        </div>

        {/* Content with flex-grow to ensure even heights */}
        <div className="p-4 space-y-3 flex flex-col flex-grow">
          <h2 className="font-semibold text-lg text-white">
            {hotel?.hotel_name}
          </h2>

          <h2 className="text-gray-100">{hotel?.hotel_address}</h2>

          {/* Price and rating row */}
          <div className="flex justify-between items-center">
            <p className="flex gap-2 text-green-600">
              <Wallet className="w-5 h-5" /> {hotel.price_per_night}
            </p>
          </div>

          <p className="line-clamp-2 text-gray-400 flex-grow">
            {hotel?.description}
          </p>

          <Link
            href={
              "https://www.google.com/maps/search/?api=1&query=" +
              hotel?.hotel_name
            }
            target="_blank"
            className="mt-auto"
          >
            <Button
              variant={"outline"}
              className="w-full mt-1 font-sans text-black rounded-lg hover:bg-black hover:text-white"
            >
              View
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HotelCardItem;
