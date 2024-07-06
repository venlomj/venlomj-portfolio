"use client";
import React, { useState } from "react";
import softSkills from "@/data/soft-skills";
import { FaCheck } from "react-icons/fa";
import Heading from "../heading/heading";

const SoftSkills = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="dark:bg-secondary-background dark:text-white pb-5">
      <div className="text-center mb-5">
        <Heading title="Soft Skills" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {softSkills.map((skill) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={skill.id}
              className="text-center"
              onMouseEnter={() => setHoveredId(skill.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <IconComponent
                className={`mx-auto ${
                  hoveredId === skill.id ? "text-green-400" : "text-light-blue"
                } dark:${
                  hoveredId === skill.id ? "text-green-400" : "text-white"
                }`}
                size={50}
              />
              <h3 className="text-lg mt-2 hover:text-2xl hover:font-bold">
                {hoveredId === skill.id && (
                  <FaCheck className="inline-block mr-2 fill-green-400" />
                )}
                {skill.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SoftSkills;
