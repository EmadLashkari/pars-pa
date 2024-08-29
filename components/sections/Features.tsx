import {
  Diagram,
  Headphone,
  MedalStar,
  ShoppingCart,
  TruckFast,
  Wallet,
} from "iconsax-react";
import React from "react";
import whyus1 from "@/public/image/whyus-1.svg";
import whyus2 from "@/public/image/whyus-2.svg";
import whyus3 from "@/public/image/whyus-3.svg";
import whyus4 from "@/public/image/whyus-4.svg";
import whyus5 from "@/public/image/whyus-5.svg";
import whyus6 from "@/public/image/whyus-6.svg";
import Image from "next/image";

function Features() {
  return (
    <section
      dir="rtl"
      className="w-screen pb-12 sm:pb-32 pt-12 min-h-[400px] bg-[#C6EDF7] flex items-start justify-center  px-12 sm:px-24"
    >
      <div className=" flex flex-col items-center justify-center w-full gap-5">
        <h2 className="text-title Poppins font-extrabold text-center text-3xl">
          چرا پارس پا
        </h2>
        <p className="text-title Poppins-ExtraLight text-center mt-4">
          هدف ما طراحی و تولید کفی‌های منحصربفردی است که متناسب با اختلالات کف
          پای شما باشد.
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 w-full">
          <div className="bg-white transition-all ease-linear hover:shadow-lg rounded-2xl gap-8 p-4 w-full flex justify-between items-center">
            <p className="text-title text-base"> تحلیل دقیق و تخصصی </p>
            {/* <MedalStar size="32" color="#28BCBE" /> */}
            <Image src={whyus1} alt="" className="w-10 h-10" />
          </div>
          <div className="bg-white transition-all ease-linear hover:shadow-lg rounded-2xl gap-8 p-4 w-full flex justify-between items-center">
            <p className="text-title text-base">فناوری هوش مصنوعی پیشرفته</p>
            {/* <TruckFast size="32" color="#28BCBE" /> */}
            <Image src={whyus2} alt="" className="w-10 h-10" />
          </div>
          <div className="bg-white transition-all ease-linear hover:shadow-lg rounded-2xl gap-8 p-4 w-full flex justify-between items-center">
            <p className="text-title text-base">تولید با کیفیت بالا</p>
            {/* <Headphone size="32" color="#28BCBE" /> */}
            <Image src={whyus3} alt="" className="w-10 h-10" />
          </div>
          <div className="bg-white   transition-all ease-linear hover:shadow-lg rounded-2xl gap-8 p-4 w-full flex justify-between items-center">
            <p className="text-title text-base">
              بهبودی علائم ناشی از اختلالات کف پا
            </p>
            {/* <Diagram size="32" color="#28BCBE" /> */}
            <Image src={whyus4} alt="" className="w-10 h-10" />
          </div>
          <div className="bg-white transition-all ease-linear hover:shadow-lg  rounded-2xl gap-8 p-4 w-full flex justify-between items-center">
            <p className="text-title text-base">
              پیشگیری از عوارض ناشی از اختلالات کف پا
            </p>
            {/* <ShoppingCart size="32" color="#28BCBE" /> */}
            <Image src={whyus5} alt="" className="w-10 h-10" />
          </div>
          <div className="bg-white  transition-all ease-linear hover:shadow-lg rounded-2xl gap-8 p-4 w-full flex justify-between items-center">
            <p className="text-title text-base">طراحی و تولید منحصربفرد</p>
            {/* <Wallet size="32" color="#28BCBE" /> */}
            <Image src={whyus6} alt="" className="w-10 h-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
