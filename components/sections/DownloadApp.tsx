import Image from "next/image";
import React from "react";
import Mobiles from "@/public/image/mobiles.png";
import AppStore from "@/public/image/AppStore.svg";
import GooglePlay from "@/public/image/GooglePlay.svg";
import TextFadeIn from "../animations/TextFade";
import ImageTop from "../animations/ImageTop";
import Link from "next/link";

const DownloadApp = () => {
  return (
    <div
      id="app"
      dir="rtl"
      className="w-full h-full gap-4  bg-white lg:bg-bg-sec-color flex flex-col justify-around py-5 items-center lg:px-20 lg:flex-row"
    >
      <Discription />

      {/* mobile images */}
      <div className="w-[70%] lg:w-full flex flex-row justify-center items-center">
        <ImageTop>
          <Image src={Mobiles} alt="" />
        </ImageTop>
      </div>

      {/* download buttons */}
      <div className="flex flex-col w-[50%] gap-2 lg:gap-10 justify-center items-center">
        <a
          href={"https://dl.parspa-ai.ir/parspa.apk"}
          download
          className="p-3 bg-black-bold text-white rounded-lg text-nowrap"
        >
          دانلود مستقیم اپلیکیشن
        </a>
      </div>
    </div>
  );
};

export default DownloadApp;

function Discription() {
  return (
    <TextFadeIn>
      <div className="px-5 flex flex-col justify-between items-start lg:gap-10">
        <h2 className="font-poppins text-start text-[20px] lg:text-[30px] font-bold text-black-bold w-52 lg:w-72 leading-8 lg:leading-10">
          اپلیکیشن پارس پا
        </h2>
        <p className="text-[16px] mt-5 text-gray-thin leading-[33px] lg:w-[23rem]">
          اپلیکیشن پارس پا با بهره‌گیری از هوش مصنوعی و مشاوره تخصصی
          فیزیوتراپیست‌های تیم پاهای شما را به دقت آنالیز می‌کند و منطبق بر آن
          کفی منحصربفرد پای شما طراحی میشود. با اپلیکیشن هوشمند پارس پا، پاهای
          خود را به دقت بالا آنالیز کنید و با مشاوره آنلاین تیم فیزیوتراپیست‌های
          ما، کفی‌های مخصوص پای خود را سفارش دهید.
        </p>
      </div>
    </TextFadeIn>
  );
}
