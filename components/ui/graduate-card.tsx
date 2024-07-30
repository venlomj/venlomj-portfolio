"use client";
import React, { FC, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { StaticImageData } from "next/image";

interface GraduateCardProps {
  cardTitle: string;
  subTitle: string;
  image: StaticImageData | string; // Adjusted to accept StaticImageData or string
  showInfoIcon?: boolean;
  onInfoClick?: () => void;
}

const GraduateCard: FC<GraduateCardProps> = ({
  cardTitle,
  subTitle,
  image,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-60 h-60 bg-cover bg-center text-white rounded-lg shadow-lg overflow-hidden"
      style={{
        backgroundImage: `url(${
          typeof image === "string" ? image : image.src
        })`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 bg-black bg-opacity-5 flex flex-col items-center justify-start p-4">
        <h2 className="font-bold mb-2">{cardTitle}</h2>
        <h3 className="text-center mb-4">{subTitle}</h3>
      </div>
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center bg-[rgba(0,0,117,0.6)] transition-opacity duration-250 ease-in-out rounded ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {hovered && (
          <button className="px-4 py-2 rounded">
            <FaPlus className="w-8 h-8" />
          </button>
        )}
      </div>
    </div>
  );
};

export default GraduateCard;
