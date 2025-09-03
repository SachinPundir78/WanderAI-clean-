import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react"; // ✅ Import Lucide arrow
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

const Marquee = () => {
  return (
    <section className="relative min-h-[101vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/a3.jpg"
        alt="Travel background"
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10"
      />

      {/* Content Container with explicit centering */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {/* Added Heading */}
        <div className="mb-8 text-center px-4">
          <h2 className="text-5xl sm:text-10xl font-extrabold font-script text-black drop-shadow-lg">
            Not Sure Where to Start From?
          </h2>
          <strong className="mt-2 text-3xl font-sans text-gray-800 font-semibold flex items-center justify-center gap-2">
            See how it works
            {/* Lucide Arrow Down */}
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </strong>
        </div>

        <div className="flex items-center justify-center w-full max-w-4xl mx-auto px-4">
          <HeroVideoDialog
            className="block dark:hidden w-full max-w-3xl mx-auto"
            animationStyle="from-center"
            videoSrc="https://www.example.com/dummy-video"
            thumbnailSrc="https://mma.prnewswire.com/media/2401528/1_MindtripProduct.jpg?p=facebook"
            thumbnailAlt="Dummy Video Thumbnail"
          />
        </div>
      </div>
    </section>
  );
};

export default Marquee;
