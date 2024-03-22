import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PostersSection from "@/components/sections/PostersSection";
import TeamSection from "@/components/sections/TeamSection";
import AwardsSection from "@/components/sections/AwardsSection";
import OpinionsSection from "@/components/sections/OpinionsSection";
import ContactSection from "@/components/sections/ContactSection";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "@/components/swiper/swiper_style.css";
import QuoteSection from "@/components/sections/QuoteSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <PostersSection />
      <TeamSection />
      <AwardsSection />
      <OpinionsSection />
      <ContactSection />
    </main>
  );
}
