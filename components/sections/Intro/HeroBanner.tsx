import Image from "next/image";
import React from "react";
import Doctor from "@/public/image/young-doctor-sec1.svg";
import BackImg from "@/public/image/back.svg";
import SquareImg from "@/public/image/squre.svg";
import { motion } from "framer-motion";
import styles from "@/styles/sections/hero.module.scss";
import arrow from "@/public/image/arrow.png";

const HeroBanner = () => {
  return (
    <section
      dir="rtl"
      className="w-full h-[100vh] flex flex-col lg:flex-row justify-between items-center lg:items-center lg:justify-around overflow-hidden"
    >
      <div className=" w-fit flex flex-col items-center md:items-start lg:ml-10 sm:px-5 gap-5">
        <h1
          className={`${styles.text} text-[25px] md:text-[36px] w-[288px] md:w-[491px] md:text-start pt-[130px] lg:pt-0 text-center leading-snug font-poppins font-bold text-black `}
        >
          آنالیز <span className="text-primary950 px-2">رایگان</span> کف پا
          مبتنی بر هوش مصنوعی
        </h1>
        <p
          className={`text-[#424242] w-80 sm:w-[525px] md:text-start text-center leading-8 font-poppins font-normal text-[14px] ${styles.parag}`}
        >
          ما با بهره‌گیری از هوش مصنوعی و مشاوره تخصصی فیزیوتراپیست‌ها، پاهای
          شما را به صورت رایگان آنالیز می‌کنیم و شما را نسبت به وضعیت کف پایتان
          آگاه میکنیم. همچنین در صورت نیاز، با استفاده از دستگاه‌های پیشرفته و
          هوشمند، کفی‌های مخصوص هر پای شما طراحی و تولید میکنیم.
        </p>
        <button
          className={`bg-primary950 p-4 gap-3 hover:bg-primary800 shadow-lg hover:shadow-2xl transition-all ease-linear group text-white rounded-[15px] text-lg flex Poppins-SemiBold justify-around items-center ${styles.parag} `}
        >
          شروع آنالیز
          <Image
            width={10}
            height={10}
            alt=""
            src={arrow}
            className="w-2 object-cover scale-x-[-1] group-hover:-translate-x-2 transition-all ease-linear duration-200"
          />
        </button>
      </div>
      <DoctorImage />
    </section>
  );
};

export default HeroBanner;

function DoctorImage() {
  return (
    <div className="relative flex justify-center  w-auto mt-10 overflow-visible lg:mt-10 lg:mr-10">
      <Image
        src={Doctor}
        alt=""
        className={`w-[250px] h-[343px]  z-30  lg:w-[468px] lg:h-[650px] ${styles.image}`}
      />
      <div
        className={`z-0 absolute bottom-0 left-0 ${styles.bgImage} ${styles.move}`}
      >
        <Image alt="" src={BackImg} className="w-full object-cover" />
      </div>
      <Image
        alt=""
        width={447}
        height={377}
        src={SquareImg}
        className={`z-20 absolute top-10 left-0 lg:top-0 lg:left-0 ${styles.frame}`}
      />
    </div>
  );
}
