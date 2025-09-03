import { div } from 'motion/react-client';
import React from 'react'

export const SelectTravellersList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A solo traveler in exploration",
    icon: "🧍", // example emoji/icon
    people: "1 Person",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travelers in tandem",
    icon: "👫",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun-loving adventurers",
    icon: "👨‍👩‍👧‍👦",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekers",
    icon: "👯",
    people: "5 to 10 People",
  },
];

function GroupSizeUi({ onSelectedOption }: any) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center mt-1">
      {SelectTravellersList.map((suggestion, index) => (
        <div
          key={index}
          className="p-4 border rounded-2xl bg-black/50 hover:bg-black cursor-pointer"
          onClick={() =>
            onSelectedOption(suggestion.title + ":" + suggestion.people)
          }
        >
          <h2>{suggestion.icon}</h2>
          <h2>{suggestion.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default GroupSizeUi
