import Hero from "./Components/Hero";
import Marquee from "./Components/Marquee";
import { Cards } from "./Components/Cards";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="w-full m-0 p-0">
      <Hero />
      <Marquee />
      <Cards />
      <Footer />
    </div>
  );
}
