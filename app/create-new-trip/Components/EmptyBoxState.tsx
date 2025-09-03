import React from 'react'
import { AuroraText } from "@/components/magicui/aurora-text";
import { suggestions } from "@/app/Components/Hero";

function EmptyBoxState({onSelectOption}:any) {
  return (
    <div className="mt-2">
      <h2 className="text-3xl font-semibold text-center">
        Start Planning Your Trip 🏝️{" "}
        <AuroraText className="">Using WanderAI</AuroraText>
      </h2>
      <p className="mt-2 text-lg text-center text-gray-400">
        Your journey starts here! Answer one question at a time and watch your
        perfect trip come to life.
      </p>
      <div className="flex flex-wrap grid-cols-2 gap-5 mt-10 items-center justify-center">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                onClick={()=>onSelectOption(suggestion.title)}
              className="
              flex items-center gap-4 px-4 py-4
              rounded-full border border-black-400/40
              bg-transparent
              text-balck shadow-md transition-all duration-300
              cursor-pointer select-none
              hover:bg-black hover:text-white
              hover:shadow-lg hover:scale-105
              active:scale-95
              sm:px-5 sm:py-2 md:px-6 md:py-3"
              >
                    <span className="text-lg sm:text-xl">{suggestion.icon}</span>
                    <h2 className="text-xs sm:text-sm md:text-base font-medium font-sans">
                      {suggestion.title}
                    </h2>
                  </div>
                ))}
              </div>
    </div>
  );
}

export default EmptyBoxState
