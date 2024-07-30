import GraduateCard from "@/components/ui/graduate-card";
import React, { FC } from "react";
import Heading from "@/components/heading/heading";
import graduateProjects from "@/data/graduate-projects";

const GraduateSection: FC = () => {
  return (
    <div className="pt-24 px-3 lg:px-8 mx-auto max-w-screen-xl">
      {/* Heading */}
      <Heading title="Meer projecten" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {graduateProjects.map((proj) => (
          <GraduateCard
            key={proj.id}
            cardTitle={proj.title}
            subTitle={proj.subTitle}
            image={proj.image} // Pass the image prop here
          />
        ))}
      </div>
    </div>
  );
};

export default GraduateSection;
