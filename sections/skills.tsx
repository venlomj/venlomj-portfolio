import Heading from "@/components/heading/heading";
import HardSkills from "@/components/skills/hard-skills";
import SoftSkills from "@/components/skills/soft-skills";
import React from "react";

export default function SkillSection() {
  return (
    <div className="py-10 dark:bg-secondary-background dark:text-white mt-0">
      <div className="bg-gradient-to-br from-slate-50 via-slate-50 to-sky-200">
        <SoftSkills />
      </div>
      <div>
        <HardSkills />
      </div>
    </div>
  );
}
