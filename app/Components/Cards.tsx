"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";
import { section } from "motion/react-client";

export function Cards() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="cards" className="scroll-mt-0">
    <BackgroundBeamsWithCollision className="sm:h-[40rem] md:h-[40rem] lg:h-[50rem]">
      <div className="w-full h-full py-6 lg:mt-9 relative z-20">
        <h1 className="max-w-7xl pl-4 mx-auto text-3xl md:text-3xl font-bold text-white font-sans">
          Discover Your Next{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Adventure.</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
              <span className="">Adventure.</span>
            </div>
          </div>
        </h1>
        <Carousel items={cards} />
      </div>
    </BackgroundBeamsWithCollision>
    </section>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Paris, France",
    title: "Explore the City of Lights - Eiffel Tower, Louvre & more",
    src: "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "New York, USA",
    title: "Experience NYC - Times Square, Central Park, Broadway",
    src: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Tokyo, Japan",
    title: "Discover Tokyo - Shibuya, Cherry Blossoms, Temples",
    src: "https://images.unsplash.com/photo-1522547902298-51566e4fb383?q=80&w=735&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Rome, Italy",
    title: "Walk through History - Colosseum, Vatican, Roman Forum",
    src: "https://images.unsplash.com/photo-1590273971191-2af8df641e2c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Dubai, UAE",
    title: "Luxury and Innovation - Burj Khalifa, Desert Safari",
    src: "https://images.unsplash.com/photo-1642874840690-f250f59043ca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Sydney, Australia",
    title: "Harbour Views - Opera House, Bondi Beach & Wildlife",
    src: "https://images.unsplash.com/photo-1711526131329-ce976f7057a4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Amritsar, India",
    title: "Golden Temple - Discovery India & It's Cultural Heritage",
    src: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
