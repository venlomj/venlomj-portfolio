import AboutSection from "@/sections/about";
import LandingSection from "./../sections/landing";
import HobbySection from "@/sections/hobby";
import SkillSection from "@/sections/skills";
import InternshipSection from "@/sections/internship";
import FeaturedSection from "@/sections/featured";
import GraduateSection from "@/sections/graduate";

export default function Home() {
  return (
    <div className="w-screen h-screen flexitems-center">
      <LandingSection />
      <AboutSection />
      <HobbySection />
      <SkillSection />
      <InternshipSection />
      <FeaturedSection />
      <GraduateSection />
    </div>
  );
}
