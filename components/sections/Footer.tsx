import { Call } from "iconsax-react";
import Image from "next/image";
import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaRegEnvelope,
  FaTelegram,
} from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import Logo from "@/public/image/Logo.svg";
import insta from "@/public/image/instagram.svg";
import tel from "@/public/image/telegram.svg";
import eitaa from "@/public/image/eitaa.svg";

function Footer() {
  return (
    <footer
      dir="rtl"
      className="w-screen bg-[#28BCBE63] px-8 md:px-8 lg:px-18 pt-12 flex flex-col items-center justify-start"
    >
      <div className="flex flex-col sm:flex-row w-full justify-start items-start sm:items-start gap-8 sm:gap-0 sm:justify-evenly">
        <div className="flex flex-col items-start ">
          {" "}
          <h2 className="text-white text-2xl mb-4">تیم پارس پا</h2>
          <p className="text-[#505050] Poppins-Light text-sm w-80">
            شامل متخصصان فیزیوتراپی، کارشناسان نرم‌افزار و مهندسان ارتوپد فنی
            است. ما با بهره‌گیری از تحلیل‌های تخصصی و فناوری‌های هوش مصنوعی،
            کفی‌های کفش منحصربفرد متناسب به اختلالات پای هر فرد ارائه می‌دهیم.
            هدف ما ارتقاء سلامت و راحتی گام بر داشتن شما از طریق تکنولوژی و
            تخصص‌های پیشرفته است.
          </p>
          <p
            dir="ltr"
            className="flex gap-1 mt-2 items-center text-[#505050] Poppins-Light text-lg"
          >
            <Call size="20" color="#505050" /> 051-038421313
          </p>
          <p className="flex gap-1 mt-2 items-center text-[#505050] Poppins-Light text-lg">
            pars.pa.with.ai@gmail.com
            <HiOutlineEnvelope color="#505050" size={20} />{" "}
          </p>
          <div className="flex flex-row justify-center items-center gap-4 mt-4">
            <Image src={tel} alt="telegram icon" className="w-10 h-10" />
            <Image src={insta} alt="instagram icon" className="w-10 h-10" />
            <Image src={eitaa} alt="eitaa icon" className="w-8 h-8" />
          </div>
        </div>
        <div className="flex flex-col items-start sm:items-center ">
          <h2 className="text-white text-2xl mb-4">لینک های محبوب</h2>
          <ul>
            <li className="text-lg Poppins-Light text-[#505050]">
              <a href="">درباره ما</a>
            </li>
            <li className="text-lg Poppins-Light text-[#505050]">
              <a href="">ارتباط با ما</a>
            </li>
            <li className="text-lg Poppins-Light text-[#505050]">
              <a href="">تیم ما</a>
            </li>
            <li className="text-lg Poppins-Light text-[#505050]">
              <a href="">محصول ما</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-start  md:w-1/3">
          <div className="flex items-center justify-center gap-1">
            <Image src={Logo} alt=" " width={93} height={80} />
            <h1 className="text-[#009D6D] font-[700] text-3xl">پارس پا</h1>
          </div>
          <p className="text-[#505050] Poppins-Light text-start mt-4">
            با ارسال شماره همراه از آخرین بروزرسانی ها و اخبار تیم پارس پا مطلع
            شوید.
          </p>
          <div className="mt-2 flex flex-col md:flex-row gap-2 justify-center items-center w-full">
            <label htmlFor="email" hidden></label>
            <input
              placeholder="شماره همراه"
              id="email"
              type="text"
              className="w-full md:w-3/4 h-12 px-2 bg-white rounded-xl outline-none"
            />
            <button className="w-full px-2 hover:text-white hover:shadow-lg transition-all ease-linear md:w-1/4 h-12 text-center rounded-xl bg-[#60C2B7] text-[#505050]">
              ارسال
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mt-8 flex items-center justify-center">
        <p className="text-[#505050] text-lg Poppins-Light py-4">
          تمامی حقوق و محتوا برای تیم پارس پا محفوظ می باشد.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
