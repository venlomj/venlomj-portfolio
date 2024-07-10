"use client";
import Heading from "@/components/heading/heading"; // Adjust the import path as necessary
import ImageCard from "@/components/ui/image-card";
import React from "react";
import { hobbies } from "@/data/hobby"; // Adjust the import path as necessary

const HobbySection: React.FC = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 bg-primary-hbackground dark:bg-secondary-background dark:text-white mb-0">
      {/* Add padding to the container */}
      <Heading title="Mijn hobby’s" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Add gap between grid items */}
        {hobbies.map((hobby, index) => (
          <ImageCard
            key={index}
            img={hobby.img}
            cardTitle={hobby.title}
            cardBtn={hobby.button}
            cardText={hobby.text}
            className="m-2" // Add margin to each card
          />
        ))}
      </div>
    </div>
  );
};

export default HobbySection;
