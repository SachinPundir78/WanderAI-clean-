"use client";
import React, { use } from "react";
import { Sparkles, MapPin } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Compass, Plane, Globe2, Landmark } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { AuroraText } from "@/components/magicui/aurora-text";

export const suggestions = [
  {
    title: "Create New Trip",
    icon: <Globe2 className="w-5 h-5 text-blue-500" />,
  },

  {
    title: "Inspire me where to go",
    icon: <Plane className="w-5 h-5 text-green-500" />,
  },

  {
    title: "Discover Hidden Gems",
    icon: <Landmark className="w-5 h-5 text-orange-500" />,
  },

  {
    title: "Adventure Destinations",
    icon: <Globe2 className="w-5 h-5 text-yellow-600" />,
  },
];

const Hero = () => {
  const { user } = useUser();
  
  const router = useRouter();

  const onPlane = () => {
    if (!user) {
      router.push('/sign-in')// Redirect to sign-in page if not logged in
      return;
    }
    router.push('/create-new-trip');// Redirect to create-new-trip page if logged in
  };
  return (
    <div className=" mt-5 sm:mt-8 w-full flex items-center justify-center px-3 sm:px-6 lg:px-8 min-h-[80vh] sm:min-h-[70vh]  mb-10 overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full object-cover -z-10"
        style={{ width: "100%", height: "27%" }}
      >
        <source src="/marquee1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Content */}
      <div className="max-w-5xl w-full text-center bg-transparent backdrop-blur-[0px] p-6 sm:p-8 lg:p-5 rounded-2xl sm:rounded-3xl shadow-lg">
        {/* Heading */}
        <h1 className="text-xl sm:text-6xl md:text-6xl lg:text-5xl font-bold font-sans leading-tight text-white">
          Where adventure meets{" "}
          <span className="bg-gradient-to-r from-purple-600  to-pink-600 bg-clip-text text-transparent">
            Simplicity.
          </span>
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-pink-500 inline-block align-middle animate-pulse ml-2" />
        </h1>
        <div className="flex items-center justify-center font-bold font-sans lg:mt-3 gap-3">
          <Compass className="w-10 h-10 text-red-600" />
          <span className="font-bold text-white lg:text-3xl md:text-2xl sm:text-xl">
            Explore
          </span>
        </div>
        {/* Subheading - Optimized for mobile */}
        <div className="px-1 sm:px-0 ">
          <p className="mt-3 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-sans leading-relaxed sm:leading-relaxed drop-shadow-sm">
            <span className="block sm:inline">
              <span className="text-yellow-400">💡</span>{" "}
              <span className="bg-clip-text text-white">
                "Why plan hard, when you can plan smart?"
              </span>
            </span>{" "}
            <span className="block sm:inline mt-1 sm:mt-0 ">
              <span className="text-blue-400">✈️</span>{" "}
              <span className="bg-gradient-to-r from-gray-300 via-cyan-400  to-cyan-100 bg-clip-text text-white">
                We bring you seamless planning, effortless trips,
              </span>
            </span>{" "}
            <span className="block sm:inline mt-1 sm:mt-0">
              <span className="bg-gradient-to-r from-cyan-300 via-red-600  to-orange-300 bg-clip-text text-white ">
                and unforgettable adventures — so you can focus
              </span>
            </span>{" "}
            <AuroraText>
              <span className="block sm:inline mt-1 sm:mt-0">
                <span className=" bg-clip-text text-transparent text-xl font-semibold">
                  on living the moment, not stressing about it.No stress, just
                  epic journeys!
                </span>
              </span>{" "}
            </AuroraText>
            <span className="block sm:inline mt-2 sm:mt-0">
              <span className="text-yellow-300">✨</span>
              <span className="text-red-400">📍</span>
            </span>
            <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-11 lg:h-11 mt-2 sm:mt-2 text-orange-400 animate-bounce inline-block" />
          </p>
        </div>

        {/* Input Box - Full width on mobile */}
        <div className="mt-2 sm:mt-8 px-1 sm:px-0">
          <div className="relative border-2 border-white/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-white/10 shadow-xl">
            <div className="relative flex items-center">
              <Textarea
                placeholder="Enter your destination..."
                className="w-full h-10 sm:h-24 md:h-32 lg:h-36 bg-transparent backdrop-blur-[2px] border-0 border-gray-100 rounded-xl sm:rounded-2xl focus-visible:ring-2 focus-visible:ring-gray-400 shadow-inner 
        text-lg sm:text-xl md:text-2xl lg:text-2xl font-normal font-sans resize-none text-gray-900 placeholder-black-900 px-4 sm:px-6 py-3 sm:py-4 pr-16 sm:pr-20"
              />

              {/* Button Inside Container - Responsive */}
              <Button
                variant="default"
                className="absolute right-3 sm:right-4 bottom-3 sm:bottom-4 group
        w-8 h-8 sm:w-auto sm:h-12
        sm:px-4 sm:py-3
        font-medium font-sans
        text-xs sm:text-sm
        bg-white text-black
        rounded-lg sm:rounded-full 
        shadow-xl hover:bg-black hover:text-white border border-white-500/30 
        flex items-center justify-center z-10"
                onClick={() => onPlane()}
              >
                <Plane className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform duration-300 sm:mr-2" />
                <span className="hidden sm:inline">Plan Your Trip</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile spacing bottom */}
        <div className="h-10 sm:hidden"></div>

        {/* Suggestion List */}
        <div className="flex flex-wrap gap-4 mt-10 items-center justify-center">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="
        flex items-center gap-2 px-4 py-2
        rounded-full border border-black-400/40
        bg-white
        text-balck shadow-md transition-all duration-300
        cursor-pointer select-none
        hover:bg-black hover:text-white
        hover:shadow-lg hover:scale-105
        active:scale-95
        sm:px-5 sm:py-2 md:px-6 md:py-3
      "
            >
              <span className="text-lg sm:text-xl">{suggestion.icon}</span>
              <h2 className="text-xs sm:text-sm md:text-base font-medium font-sans">
                {suggestion.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
