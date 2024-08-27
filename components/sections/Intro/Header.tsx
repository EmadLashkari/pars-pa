"use client";
import { HambergerMenu, ShoppingCart } from "iconsax-react";
import Image from "next/image";
import { SVGProps, useEffect, useRef, useState } from "react";
import Logo from "@/public/image/Logo.svg";
import { MotionProps, useCycle } from "framer-motion";
import { useDimensions } from "@/components/utils/navbar/useDimensions";
const scrollValue = 50;
import { motion } from "framer-motion";

const Header = () => {
  const [change, setChange] = useState(false);
  const handleNavigation = (e: any) => {
    const scrolled = e.currentTarget.scrollY;

    if (scrollValue > scrolled) {
      setChange(false);
    } else {
      setChange(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, []);
  return (
    <header
      dir="rtl"
      className={`w-screen transition-all  ease-linear duration-150 justify-between flex py-4 px-5 fixed z-40 ${
        change ? "bg-white  shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-1">
        <Image src={Logo} alt=" " width={64} height={55} />
        <h1 className="text-[#009D6D] font-[700]">
          <span className="text-[#3CCAFF]">پارس </span>
          پا
        </h1>
      </div>
      <nav className="hidden md:flex justify-between items-center gap-8">
        <a
          href="#contactus"
          className="text-title hover:text-gray6 transition-all ease-in-out  text-base Poppins-Light cursor-pointer group relative"
        >
          خانه
          <span className="w-0 group-hover:w-full transition-all ease-in-out  h-[2px] bg-gray6 top-full left-0 absolute"></span>
        </a>
        <a
          href="#our-team"
          className="text-title hover:text-gray6 transition-all ease-in-out text-base Poppins-Light cursor-pointer group relative"
        >
          آنالیز
          <span className="w-0 group-hover:w-full transition-all ease-in-out  h-[2px] bg-gray6 top-full left-0 absolute"></span>
        </a>
        <a
          href="#our-product"
          className="text-title hover:text-gray6 transition-all ease-in-out text-base Poppins-Light cursor-pointer group relative"
        >
          اپلیکیشن
          <span className="w-0 group-hover:w-full transition-all ease-in-out  h-[2px] bg-gray6 top-full left-0 absolute"></span>
        </a>
        <a
          href="#our-product"
          className="text-title hover:text-gray6 transition-all ease-in-out text-base Poppins-Light cursor-pointer group relative"
        >
          کفی
          <span className="w-0 group-hover:w-full transition-all ease-in-out  h-[2px] bg-gray6 top-full left-0 absolute"></span>
        </a>
        <a
          href="#our-product"
          className="text-title hover:text-gray6 transition-all ease-in-out text-base Poppins-Light cursor-pointer group relative"
        >
          تیم ما
          <span className="w-0 group-hover:w-full transition-all ease-in-out  h-[2px] bg-gray6 top-full left-0 absolute"></span>
        </a>
        <a
          href="#our-product"
          className="text-title hover:text-gray6 transition-all ease-in-out text-base Poppins-Light cursor-pointer group relative"
        >
          نظرات
          <span className="w-0 group-hover:w-full transition-all ease-in-out  h-[2px] bg-gray6 top-full left-0 absolute"></span>
        </a>
        <a
          href="#our-product"
          className="text-title hover:text-gray6 transition-all ease-in-out text-base Poppins-Light cursor-pointer group relative"
        >
          ارتباط با ما
          <span className="w-0 group-hover:w-full transition-all ease-in-out  h-[2px] bg-gray6 top-full left-0 absolute"></span>
        </a>
      </nav>
      <div className="flex gap-2 items-center">
        <button className="px-8 hidden md:block py-2 bg-primary950 transition-all ease-out hover:bg-primary-900 hover:shadow-lg text-white rounded-xl">
          ورود
        </button>
        {/* <button
          title="cart"
          onClick={() => console.log(123)}
          className="hover:opacity-60 transition-opacity ease-out"
        >
          <ShoppingCart color="#0C0C0C" size={34} />
        </button> */}
        {/* <button
          title="menu"
          onClick={() => console.log(123)}
          className="block md:hidden"
        >
          <HambergerMenu color="#0C0C0C" size={34} />
        </button> */}
      </div>
    </header>
  );
};

export default Header;
