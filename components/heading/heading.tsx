import { FC } from "react";

interface HeadingProps {
  title: string;
  //   subTitle?: string;
}

const Heading: FC<HeadingProps> = ({ title }) => {
  return (
    <div className="flex items-center flex-nowrap min-h-min overflow-hidden p-0 pt-2 w-full font-poppins justify-center">
      <p className="text-[6vw] lg:text-[4vw] leading-[100%] dark:bg-secondary-background dark:text-white p-2">
        {title}
      </p>
    </div>
  );
};

export default Heading;
