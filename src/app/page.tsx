import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PostersSection from "@/components/sections/PostersSection";
import TeamSection from "@/components/sections/TeamSection";
import AwardsSection from "@/components/sections/AwardsSection";
import OpinionsSection from "@/components/sections/OpinionsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PostersSection />
      <TeamSection />
      <AwardsSection />
      <OpinionsSection />
      <ContactSection />
    </main>
  );
}
