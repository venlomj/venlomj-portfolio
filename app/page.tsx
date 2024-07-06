import AboutSection from "@/sections/about";
import LandingSection from "./../sections/landing";
import HobbySection from "@/sections/hobby";

export default function Home() {
  return (
    <div className="w-screen h-screen flexitems-center">
      <LandingSection />
      <AboutSection />
      <HobbySection />
    </div>
  );
}
