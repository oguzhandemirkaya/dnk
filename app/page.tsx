import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CarouselSection from "@/components/CarouselSection";
import Advantages from "@/components/Advantages";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <CarouselSection /> {/* Swiper.js ile avantajlar */}
      <Advantages /> {/* React Icons ile listeleme */}
    </main>
  );
}
