"use client";
import { FC } from "react";
import { FaCircleInfo } from "react-icons/fa6";

interface HeaderProps {
  title: string;
  tag?: string;
  showInfoIcon?: boolean;
  onInfoClick?: () => void; // New prop for handling info icon click
}

const Header: FC<HeaderProps> = ({
  title,
  tag,
  showInfoIcon = false,
  onInfoClick,
}) => {
  return (
    <div
      className="dark:bg-secondary-background dark:text-white flex flex-none flex-nowrap
      relative p-6 w-full
      items-center justify-between
      h-16 border border-border rounded-3xl"
    >
      {/* Title */}
      <div>
        <p className="text-lg font-medium leading-3 dark:bg-secondary-background dark:text-white">
          {title}
        </p>
      </div>
      {/* Tag */}
      <div>
        <p className="text-lg font-medium leading-3 font-pixel text-secondary-foreground">
          {tag}
        </p>
      </div>
      {/* Info Icon */}
      {showInfoIcon && onInfoClick && (
        <button
          onClick={onInfoClick}
          className="ml-2 dark:bg-secondary-background dark:text-white"
        >
          <FaCircleInfo size={24} />
        </button>
      )}
    </div>
  );
};

export default Header;
