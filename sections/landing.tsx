import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import LiveClock from "../components/ui/live-clock";

export default function LandingSection() {
  return (
    <div
      className="relative
      h-screen overflow-hidden p-8"
    >
      <div className="mb-14 md:mt-20 sm:mt-20 xs:mt-20">
        <Hero />
      </div>
      {/* Magnetic scroll */}
      {/* <MagneticWrapper className="absolute left-1/2 -translate-x-1/2 bottom-[8rem] md:bottom-[4rem] xs:bottom-[8rem] 2xl:bottom-10 !md:hidden sm:hidden xs:hidden xs:size-1">
        <ScrollDown />
      </MagneticWrapper> */}
      {/* Live clock */}
      <div className="absolute !right-10 bottom-10 md:mt-6 sm:mt-6 xs:mt-6 sm:pt-4 !xs:translate-y-8 !sm:translate-y-8 !md:translate-y-8 flex justify-end">
        <LiveClock timeZone="Europe/Brussels" />
      </div>
    </div>
  );
}
