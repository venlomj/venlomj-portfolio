import ResumeBlock from "@/components/blocks/resume";
import VenlomjCard from "@/components/card/venlomj";
import Heading from "@/components/heading/heading";
import React from "react";

export default function AboutSection() {
  return (
    <div>
      <Heading title="Over mij" />
      <div className="flex flex-col lg:flex-row items-stretch gap-10 px-4 py-10 max-w-screen-xl mx-auto">
        {/* Linker sectie met VenlomjCard */}
        <div className="flex-1 lg:basis-1/3 flex justify-center lg:justify-start">
          <VenlomjCard />
        </div>
        {/* Rechter sectie met ResumeBlock */}
        <div className="flex-1 lg:basis-2/3 dark:bg-secondary-background dark:text-white">
          <ResumeBlock />
        </div>
      </div>
    </div>
  );
}
