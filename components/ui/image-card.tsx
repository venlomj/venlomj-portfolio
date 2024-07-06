"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { FC, ReactNode } from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

interface ImageCardProps {
  img: StaticImport | string;
  cardTitle: string;
  cardBtn: ButtonProps | ReactNode;
  cardText: ReactNode;
  className?: string; // Add className prop
}

const ImageCard: FC<ImageCardProps> = ({
  img,
  cardTitle,
  cardBtn,
  cardText,
  className,
}) => {
  // Define fixed image dimensions
  const imageDimensions = {
    width: 400,
    height: 400,
  };

  return (
    <div
      className={`max-w-sm border border-gray-200 rounded-lg shadow  text-gray-900 dark:text-white dark:border-gray-700 mx-auto ${className}`}
    >
      <Image
        className="rounded-t-lg"
        src={typeof img === "string" ? img : (img as StaticImport)}
        alt={cardTitle} // Updated alt attribute to be more meaningful
        width={imageDimensions.width} // Set the image width
        height={imageDimensions.height} // Set the image height
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {cardTitle}
        </h5>
        <p className="mb-3 font-normal  text-gray-900 dark:text-white">
          {cardText}
        </p>
        {typeof cardBtn === "object" &&
        "text" in cardBtn! &&
        "onClick" in cardBtn ? (
          <button
            onClick={cardBtn.onClick}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {cardBtn.text}
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        ) : (
          cardBtn
        )}
      </div>
    </div>
  );
};

export default ImageCard;
