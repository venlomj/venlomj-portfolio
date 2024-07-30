import { cn } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC, useState } from "react";

interface TooltipProps {
  title: string;
  image: string | StaticImport;
  bgColor?: string;
}

const Tooltip: FC<TooltipProps> = ({ title, image, bgColor }) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      className={cn(
        "relative bg-[#2D2C33] w-10 h-10 transform cursor-pointer grid place-items-center",
        "rounded-lg",
        "!hover:scale-120 transition-all duration-200"
      )}
      style={{ background: `${bgColor || "#2D2C33"}` }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="w-[30px] h-[30px] hover:scale-150">
        <Image
          src={image}
          alt={title}
          width={32} // Specify width
          height={32} // Specify height
          className="w-full h-full object-contain"
        />
      </div>
      {/* Title */}
      {active && (
        <div className="absolute -top-6 bg-black/[0.2] py-0.5 px-1.5 rounded-2xl backdrop-blur-[6px] transition-all duration-200">
          <p className="font-poppins text-[10px] whitespace-nowrap">{title}</p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
