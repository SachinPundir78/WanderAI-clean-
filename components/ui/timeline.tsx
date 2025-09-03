"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { TripInfo } from "@/app/create-new-trip/Components/ChatBox";
import { Calendar, Users, Wallet2 } from "lucide-react";


interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data, tripData }: { data: TimelineEntry[], tripData: TripInfo }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    
    const updateHeight = () => {
      if (ref.current) { 
      const rect = ref.current!.getBoundingClientRect();
      setHeight(rect.height);
    }
  };

    // Use setTimeout to ensure DOM is fully rendered
    setTimeout(updateHeight, 100);
    
    const observer = new ResizeObserver(updateHeight);
    observer.observe(ref.current);
    window.addEventListener("resize", updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, [data]); // Add data dependency to recalculate when content changes

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Debug logging (remove in production)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Scroll progress:", latest, "Height:", height);
  });

  return (
    <div
      className="w-full bg-transparent dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-5 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
          Your Trip Itineary from{" "}
          <strong className="text-pink-600">{tripData?.origin}</strong> to{" "}
          <strong className="text-purple-600">{tripData?.destination}</strong>{" "}
          is Ready
        </h2>
        <div className='flex gap-5 items-center'>
          <div className="flex gap-2 items-center">
            <Calendar />
            <h2>{tripData?.duration}</h2>
          </div>
          <div className="flex gap-2 items-center">
            <Wallet2 />
            <h2>{tripData?.budget}</h2>
          </div>
          <div className="flex gap-2 items-center">
            <Users />
            <h2>{tripData?.group_size}</h2>
          </div>
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-10 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-[40%]">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-gray-500 dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Timeline line container */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 w-[2px] z-10"
        >
          {/* Background line */}
          <div className="absolute inset-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-pink-400 dark:via-neutral-700 to-pink opacity-50" />

          {/* Animated colored line */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent z-10"
          />
        </div>
      </div>
    </div>
  );
};