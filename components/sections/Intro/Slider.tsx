"use client";
import {
  Category,
  HambergerMenu,
  Home,
  Login,
  Menu,
  MessageText,
  Profile2User,
  Scan,
  TagUser,
  TextalignJustifycenter,
} from "iconsax-react";
import React, { ReactNode, useState } from "react";
import Logo from "@/public/image/Logo.svg";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { motion } from "framer-motion";

const Slider = () => {
  const [toggle, onToggle] = useState<boolean>(false);
  return (
    <div className="overflow-hidden w-full ">
      <button
        onClick={() => onToggle(!toggle)}
        className="fixed md:hidden z-50 top-2 left-2 w-10 h-10 "
      >
        <BiMenu size={32} />
      </button>
      <motion.div
        initial={false}
        animate={{ x: toggle ? 0 : 200 }}
        className="fixed md:hidden z-[100] top-0 bottom-0 right-0 w-[200px] bg-white"
      >
        <div className="flex flex-col justify-center items-end p-5 gap-3">
          <div className="flex flex-row-reverse items-center gap-1">
            <Image src={Logo} alt=" " width={64} height={55} />
            <h1 className="text-[#009D6D] font-[700]">
              <span className="text-[#3CCAFF]">پارس </span>
              پا
            </h1>
          </div>
          <Item
            where="#home"
            icon={<Home size={25} variant="Outline" />}
            text="خانه"
          />
          <Item
            where="#analize"
            icon={<Scan size={25} variant="Outline" />}
            text="آنالیز"
          />
          <Item
            where="#app"
            icon={<Category size={25} variant="Outline" />}
            text="اپلیکیشن"
          />
          {/* <Item icon={<Category/>} text="کفی" /> */}
          <Item
            where="#our-team"
            icon={<Profile2User size={25} variant="Outline" />}
            text="تیم ما"
          />
          <Item
            where="#comments"
            icon={<MessageText size={25} variant="Outline" />}
            text="نظرات"
          />
          <Item
            where="#contact-us"
            icon={<TagUser size={25} variant="Outline" />}
            text="ارتباط با ما"
          />
        </div>
      </motion.div>
    </div>
  );
};

function Item({
  where,
  text,
  icon,
}: {
  where: string;
  text: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={where}
      dir="rtl"
      className="text-title p-3 rounded-lg bg-white w-full  hover:text-gray6 transition-all ease-in-out text-sm Poppins-Light cursor-pointer group flex flex-row justify-start items-center  gap-3 relative"
    >
      {icon}
      {text}
      <span className="w-0 group-hover:w-full transition-all ease-in-out  h-[2px] bg-gray6 top-full left-0 absolute"></span>
    </a>
  );
}
export default Slider;
