import {
  Diagram,
  Headphone,
  MedalStar,
  ShoppingCart,
  TruckFast,
  Wallet,
} from "iconsax-react";
import React from "react";

function Features() {
  return (
    <section
      dir="rtl"
      className="w-screen pb-12 sm:pb-32 pt-12 min-h-[400px] bg-[#C6EDF7] flex items-start justify-center  px-12 sm:px-24"
    >
      <div className=" flex flex-col items-center justify-center w-full">
        <h2 className="text-title Poppins-SemiBold text-center text-3xl">
          چرا پارس پا ؟
        </h2>
        <p className="text-title Poppins-ExtraLight text-center mt-4">
          هدف ما آنالیز و طراحی و تولید محصولی بوده که بتوانیم نظر شما را با
          کیفیت خوبمان جلب کنیم
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4 w-full">
          <div className="bg-white transition-all ease-linear hover:shadow-lg rounded-2xl gap-8 p-4 w-full flex justify-between items-center">
            <p className="text-title text-base"> تحلیل دقیق و تخصصی </p>
            <MedalStar size="32" color="#28BCBE" />
          </div>
          <div className="bg-white transition-all ease-linear hover:shadow-lg rounded-2xl gap-8 p-4 w-full flex justify-between items-center">
            <p className="text-title text-base">فناوری هوش مصنوعی پیشرفته</p>
            <TruckFast size="32" color="#28BCBE" />
          </div>
          <div className="bg-white transition-all ease-linear hover:shadow-lg rounded-2xl gap-8 p-4 w-full flex justify-between items-center">
            <p className="text-title text-base">تولید با کیفیت بالا</p>
            <Headphone size="32" color="#28BCBE" />
          </div>
          <div className="bg-white   transition-all ease-linear hover:shadow-lg rounded-2xl gap-8 p-4 w-full flex justify-between items-center">
            <p className="text-title text-base">کاهش درد و بهبود راحتی</p>
            <Diagram size="32" color="#28BCBE" />
          </div>
          <div className="bg-white transition-all ease-linear hover:shadow-lg  rounded-2xl gap-8 p-4 w-full flex justify-between items-center">
            <p className="text-title text-base">پیشگیری از مشکلات آینده</p>
            <ShoppingCart size="32" color="#28BCBE" />
          </div>
          <div className="bg-white  transition-all ease-linear hover:shadow-lg rounded-2xl gap-8 p-4 w-full flex justify-between items-center">
            <p className="text-title text-base">سفارشی‌سازی کامل</p>
            <Wallet size="32" color="#28BCBE" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
