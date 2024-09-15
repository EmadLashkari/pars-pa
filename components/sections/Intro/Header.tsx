"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "@/public/image/Logo.svg";
import Link from "next/link";
const scrollValue = 50;

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
        <h1 className="text-[#28BCBE] font-[700]">
          <span className="text-[#83837F]">پارس </span>
          پا
        </h1>
      </div>
      <nav className="hidden md:flex justify-between items-center gap-8">
        <a
          href="#home"
          className="text-title hover:text-gray6 transition-all ease-in-out  text-base Poppins-Light cursor-pointer group relative"
        >
          خانه
          <span className="w-0 group-hover:w-full transition-all ease-in-out  h-[2px] bg-gray6 top-full left-0 absolute"></span>
        </a>
        <a
          href="#analize"
          className="text-title hover:text-gray6 transition-all ease-in-out text-base Poppins-Light cursor-pointer group relative"
        >
          آنالیز
          <span className="w-0 group-hover:w-full transition-all ease-in-out  h-[2px] bg-gray6 top-full left-0 absolute"></span>
        </a>
        <a
          href="#app"
          className="text-title hover:text-gray6 transition-all ease-in-out text-base Poppins-Light cursor-pointer group relative"
        >
          اپلیکیشن
          <span className="w-0 group-hover:w-full transition-all ease-in-out  h-[2px] bg-gray6 top-full left-0 absolute"></span>
        </a>
        <a
          href="#why-us"
          className="text-title hover:text-gray6 transition-all ease-in-out text-base Poppins-Light cursor-pointer group relative"
        >
          کفی
          <span className="w-0 group-hover:w-full transition-all ease-in-out  h-[2px] bg-gray6 top-full left-0 absolute"></span>
        </a>
        <a
          href="#our-team"
          className="text-title hover:text-gray6 transition-all ease-in-out text-base Poppins-Light cursor-pointer group relative"
        >
          تیم ما
          <span className="w-0 group-hover:w-full transition-all ease-in-out  h-[2px] bg-gray6 top-full left-0 absolute"></span>
        </a>
        <a
          href="#comments"
          className="text-title hover:text-gray6 transition-all ease-in-out text-base Poppins-Light cursor-pointer group relative"
        >
          نظرات
          <span className="w-0 group-hover:w-full transition-all ease-in-out  h-[2px] bg-gray6 top-full left-0 absolute"></span>
        </a>
        <a
          href="#contact-us"
          className="text-title hover:text-gray6 transition-all ease-in-out text-base Poppins-Light cursor-pointer group relative"
        >
          ارتباط با ما
          <span className="w-0 group-hover:w-full transition-all ease-in-out  h-[2px] bg-gray6 top-full left-0 absolute"></span>
        </a>
      </nav>
      <div className="flex gap-2 items-center">
        <Link
          href={"https://web.parspa-ai.ir/login"}
          className="px-8 hidden md:block py-2 bg-primary950 transition-all ease-out hover:bg-primary-900 hover:shadow-lg text-white rounded-xl"
        >
          ورود
        </Link>
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
