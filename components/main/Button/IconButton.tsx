import Image from "next/image";
import { ReactNode } from "react";
import arrowIcon from "@/public/image/arrow.png";
const IconButton = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <button
      className={`bg-[#28BCBE]  text-white flex flex-row-reverse justify-between items-center gap-3 p-3 rounded-lg ${className}`}
    >
      <span>{text}</span>
      <Image
        className="scale-x-[-1]"
        width={5}
        height={5}
        src={arrowIcon}
        alt=""
      />
    </button>
  );
};

export default IconButton;
