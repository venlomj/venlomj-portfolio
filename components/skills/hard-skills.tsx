"use client";
import React from "react"; // Adjust the import path as needed
import hardSkills from "@/data/hard-skills";
import Tooltip from "../ui/tooltip";
import Heading from "../heading/heading";

const HardSkills = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 dark:bg-secondary-background dark:text-white mx-auto">
      <Heading title="Soft Skills" />
      {hardSkills.map((skill) => (
        <Tooltip
          key={skill.id}
          title={skill.title}
          image={skill.image} // Use the direct import here
          bgColor={skill.bgColor}
        />
      ))}
    </div>
  );
};

export default HardSkills;
