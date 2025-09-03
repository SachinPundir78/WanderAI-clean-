"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";


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

const descriptions = {
  Paris: `Paris, the romantic capital of France, is famous for its timeless beauty, artistic heritage, and vibrant culture. Known as the City of Lights, Paris offers breathtaking landmarks like the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum, which houses the Mona Lisa. The city boasts charming cafes, cobblestone streets, and the picturesque Seine River, perfect for evening strolls or boat cruises. Paris seamlessly blends modern fashion with historic architecture, making it a paradise for travelers. Whether you’re exploring Montmartre, enjoying croissants in a café, or admiring the Arc de Triomphe, Paris promises a magical experience you’ll never forget.`,

  NewYork: `New York City, often called the "city that never sleeps," is a dazzling metropolis filled with culture, energy, and iconic landmarks. From the bright lights of Times Square to the serene beauty of Central Park, the city offers endless adventures. Visitors can explore world-class museums like the Metropolitan Museum of Art, catch a Broadway show, or take in breathtaking views from the top of the Empire State Building. The Statue of Liberty stands as a symbol of freedom and hope, while the bustling streets of Manhattan showcase diverse cultures and cuisines. With its fast-paced lifestyle and countless attractions, New York remains one of the most exciting cities in the world.`,

  Tokyo: `Tokyo, the bustling capital of Japan, is a vibrant mix of cutting-edge technology and centuries-old traditions. From the iconic Shibuya Crossing to the peaceful Meiji Shrine, Tokyo offers an unmatched blend of modernity and heritage. The city comes alive during cherry blossom season, with parks like Ueno and Shinjuku Gyoen turning into pink wonderlands. Food lovers can indulge in world-class sushi, ramen, and street delicacies. Shinjuku and Akihabara showcase neon-lit nightlife and anime culture, while Asakusa and its temples reveal Japan’s deep spiritual side. Tokyo’s efficient transport system makes it easy to explore its diverse neighborhoods, each offering a unique glimpse into Japanese life.`,

  Rome: `Rome, the Eternal City, is a living museum where history, art, and culture converge. Walking through Rome feels like stepping back in time, with monumental landmarks like the Colosseum, Roman Forum, and the Pantheon standing tall as reminders of ancient glory. Vatican City, home to St. Peter’s Basilica and the Sistine Chapel, is a spiritual and artistic treasure trove. The city’s charming piazzas, cobblestone streets, and bubbling fountains create an enchanting atmosphere. Italian cuisine thrives here—pasta, pizza, and gelato are enjoyed amidst centuries-old architecture. Rome is not just a destination; it’s an experience of timeless beauty, where every corner tells a story of its rich past.`,

  Dubai: `Dubai, the crown jewel of the UAE, is a city of futuristic innovation and Arabian tradition. Home to the world’s tallest building, the Burj Khalifa, and luxurious attractions like the Palm Jumeirah, Dubai dazzles visitors with modern marvels. Beyond the skyscrapers, the golden desert offers thrilling safaris and cultural experiences. Traditional souks brim with spices, gold, and textiles, while world-class malls redefine shopping. Dubai’s hospitality and culinary diversity add to its charm, blending flavors from across the globe. Whether you’re exploring the Dubai Marina, relaxing at Jumeirah Beach, or marveling at the Dubai Fountain, the city offers a luxurious yet authentic taste of Middle Eastern culture.`,

  Sydney: `Sydney, Australia’s most iconic city, is renowned for its stunning harbor, vibrant culture, and natural beauty. The Sydney Opera House and Harbour Bridge dominate the skyline, offering breathtaking views and unforgettable experiences. Beyond the city center, Bondi Beach and Manly Beach are havens for surfers and sun-seekers. The Royal Botanic Gardens and Taronga Zoo provide peaceful escapes within the bustling city. Sydney seamlessly combines urban life with outdoor adventure, making it a paradise for travelers. Its food scene thrives with multicultural influences, and the lively neighborhoods of Darling Harbour and The Rocks reveal its rich history. With endless sunshine and scenic landscapes, Sydney is an unforgettable destination.`,

  Amritsar: `Amritsar, located in the Indian state of Punjab, is a city steeped in history, spirituality, and culture. At its heart lies the Golden Temple, a breathtaking spiritual sanctuary that welcomes millions of visitors from around the world. The temple’s shimmering golden façade and peaceful Sarovar (sacred pool) offer a sense of serenity and devotion. Amritsar is also a city of resilience, with landmarks like the Jallianwala Bagh memorial telling stories of India’s struggle for independence. Visitors can experience vibrant Punjabi hospitality, rich traditions, and delicious cuisine, especially the famous langar (community kitchen) at the temple. With its spiritual depth and cultural richness, Amritsar is truly unforgettable.`,
};


const images = {
  Paris: [
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1581683705068-ca8f49fc7f45?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  NewYork: [
    "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1498447817931-2edda1605b97?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1460551204960-763bc82b7d8f?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  Tokyo: [
    "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  Rome: [
    "https://images.unsplash.com/photo-1626260113600-84c917a39f59?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1596627116790-af6f46dddbda?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1569759276108-31b8e7e43e7b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  Dubai: [
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1543579596-2c11997c7706?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  Sydney: [
    "https://images.unsplash.com/photo-1549923015-22d03fbac451?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573808459806-b2767c969edf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1595803941069-7e8d21782bf2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  Amritsar: [
    "https://images.unsplash.com/photo-1672713909055-b5f623202666?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1598431416722-eefb0a65a1a4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1712733900711-d0b929d0d7cc?q=80&w=677&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
};

export default function DummyContent({ city }: { city: keyof typeof descriptions }) {
  const description = descriptions[city];
  const cityImages = images[city];

  if (!description || !cityImages) {
    return <p className="text-red-500">⚠️ No data found for {city}</p>;
  }

  return (
    <div>
      <p className="text-black text-lg">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {cityImages.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            width={400}
            height={300}
            alt={`${city} ${idx}`}
            className="rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}



const data = [
  {
    category: "Paris, France",
    title: "Explore the City of Lights - Eiffel Tower, Louvre & more",
    src: "https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent city="Paris" />,
  },
  {
    category: "New York, USA",
    title: "Experience NYC - Times Square, Central Park, Broadway",
    src: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent city="NewYork" />,
  },
  {
    category: "Tokyo, Japan",
    title: "Discover Tokyo - Shibuya, Cherry Blossoms, Temples",
    src: "https://images.unsplash.com/photo-1522547902298-51566e4fb383?q=80&w=735&auto=format&fit=crop",
    content: <DummyContent city="Tokyo" />,
  },
  {
    category: "Rome, Italy",
    title: "Walk through History - Colosseum, Vatican, Roman Forum",
    src: "https://images.unsplash.com/photo-1590273971191-2af8df641e2c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent city="Rome" />,
  },
  {
    category: "Dubai, UAE",
    title: "Luxury and Innovation - Burj Khalifa, Desert Safari",
    src: "https://images.unsplash.com/photo-1642874840690-f250f59043ca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent city="Dubai" />,
  },
  {
    category: "Sydney, Australia",
    title: "Harbour Views - Opera House, Bondi Beach & Wildlife",
    src: "https://images.unsplash.com/photo-1711526131329-ce976f7057a4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent city="Sydney" />,
  },
  {
    category: "Amritsar, India",
    title: "Golden Temple - Discovery India & It's Cultural Heritage",
    src: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent city="Amritsar" />,
  },
];
