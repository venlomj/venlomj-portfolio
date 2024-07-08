"use client";
import { FC, useState } from "react";
import Header from "./header";
import Image from "next/legacy/image";
import picture1Light from "@/public/assets/images/interbship/Qubris_logo.png"; // Add a light version of the image
import picture1Dark from "@/public/assets/images/interbship/Qubris_logo_white.png";
import picture2 from "@/public/assets/images/interbship/applicatie.png";
import Reports from "./pdf/reports";
import Presentation from "./ppt/presentations";

interface InternshipCardProps {
  id: number;
  intro: string;
  company: string;
  assignment: string;
  app: string;
  description: string;
  info: string;
}

const InternshipCard: FC<InternshipCardProps> = ({
  id,
  intro,
  company,
  assignment,
  app,
  description,
  info,
}) => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const handleMouseEnter = (image: string) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const altText1 = "Qubris Logo";
  const altText2 = "Scanner Qubris";

  return (
    <div
      className="link w-full h-full dark:bg-secondary-background dark:text-white border border-border 
      shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2"
    >
      <Header title={company} tag={assignment} />
      <div className="flex flex-col lg:flex-row">
        {/* Left column with text */}
        <div
          className="lg:w-1/2 flex flex-col justify-center gap-x-4 p-8 pl-10 text-justify mb-4 dark:bg-secondary-background dark:text-white"
          key={id}
        >
          <p className="text-md mt-5">{intro}</p>
          <p className="text-md mt-5">{description}</p>
          <p className="text-md mt-5">{info}</p>
        </div>
        {/* Right column with images */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center dark:bg-secondary-background dark:text-white">
          <div
            className="mb-4 flex justify-center relative"
            onMouseEnter={() => handleMouseEnter(altText1)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Conditionally render the image based on the theme */}
            <div className="light-image hidden dark:hidden">
              <Image
                src={picture1Light}
                alt={altText1}
                width={250}
                height={250}
                className="object-contain border border-[#797CBB] rounded-2xl"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className="dark-image dark:block">
              <Image
                src={picture1Dark}
                alt={altText1}
                width={250}
                height={250}
                className="object-contain border border-[#797CBB] rounded-2xl"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
            {hoveredImage === altText1 && (
              <div className="absolute -top-4 right-2 bg-black/[0.2] py-0.5 px-1.5 rounded-2xl backdrop-blur-[6px] transition-all duration-200 dark:bg-secondary-background dark:text-white">
                <p className="font-pixel text-[18px] whitespace-nowrap">
                  {altText1}
                </p>
              </div>
            )}
          </div>
          <div
            className="mb-4 flex justify-center relative"
            onMouseEnter={() => handleMouseEnter(altText2)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={picture2}
              alt={altText2}
              width={250}
              height={250}
              className="object-contain border border-[#797CBB] rounded-2xl"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            {hoveredImage === altText2 && (
              <div className="absolute -top-4 right-2 bg-black/[0.2] py-0.5 px-1.5 rounded-2xl backdrop-blur-[6px] transition-all duration-200 dark:bg-secondary-background dark:text-white">
                <p className="font-pixel text-[18px] whitespace-nowrap">
                  {altText2}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 dark:bg-secondary-background dark:text-white">
        <div className="mb-4 w-full md:w-2/3 lg:w-1/3 md:m-auto dark:bg-secondary-background dark:text-white">
          <Reports />
        </div>
        <div className="mb-4 w-full md:w-2/3 lg:w-1/3 md:m-auto dark:bg-secondary-background dark:text-white">
          <Presentation />
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
