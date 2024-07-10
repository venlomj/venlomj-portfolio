"use client";
import featuredData from "@/data/featured";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import FeaturedCard from "../card/featured/featured-card";

export default function ExhibitionFeatured() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  console.log("The hover card is: ", hoveredIndex);
  const handleMouseEnhter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div
      className="w-full grid lg:flex
      lg:justify-between lg:gap-x-4"
    >
      {featuredData.slice(1).map((feature, i) => (
        <div
          key={i}
          className={cn(
            "relative h-[640px] lg:w-1/3 mb-16 transition-all origin-center duration-300 ease-in-out",
            i === hoveredIndex ? "lg:w-[40%]" : "lg:w-[33.33%]"
          )}
          onMouseEnter={() => handleMouseEnhter(i)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <FeaturedCard
            active={i === hoveredIndex}
            title={feature.title}
            tag={feature.tag}
            video={feature.video}
            desc={feature.desc}
            client={feature.client}
            img={feature.img}
          />
        </div>
      ))}
    </div>
  );
}
