import { FC } from "react";

interface HeaderProps {
  title: string;
  tag?: string;
}

const Header: FC<HeaderProps> = ({ title, tag }) => {
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
        <p className="text-lg font-medium leading-3 font-pixel dark:bg-secondary-background dark:text-white">
          {tag}
        </p>
      </div>
    </div>
  );
};

export default Header;
