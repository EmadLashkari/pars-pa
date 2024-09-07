import Image from "next/image";
import React from "react";
import mobileFrame from "@/public/image/mobile-layer.svg";
import IconButton from "../main/Button/IconButton";
import nurse from "@/public/image/nurse.svg";
import MobileAnime from "../animations/Mobile";
import TextAnime from "../animations/Text";
import Link from "next/link";
const FootAnalise = () => {
  return (
    <div
      id="analize"
      className="w-full relative gap-10 h-full flex flex-col justify-between items-center bg-gradient-to-b from-bg-main-color to-bg-sec-color"
    >
      <TextAnime text="آنالیز رایگان کف پا مبتنی بر هوش مصنوعی ">
        <h2 className="text-black font-poppins font-bold text-[20px] lg:text-[30px] lg:mt-32 w-[80%] mt-10 text-center">
          آنالیز کف پا مبتنی بر هوش مصنوعی (رایگان)
        </h2>
      </TextAnime>
      <MobileSteps />
      {/* <Image  /> */}
      <MobileImage />
    </div>
  );
};

export default FootAnalise;

function MobileSteps() {
  return (
    <div
      dir="rtl"
      className="lg:hidden md:justify-center flex flex-row justify-start items-stretch w-[80%]"
    >
      <LineSVGMobile />
      <div className=" flex flex-col justify-between items-start text-[16px] w-fit pr-5">
        <p>
          بررسی و نتیجه گیری با مدل سازی هوشمند کف پا نسبت به ده هزار مدل مشابه
        </p>
        <p>
          ارائه اپلیکیشن و وب اپ برای بررسی دقیق مشکلات کف پا با استفاده از
          آخرین تکنولوژی روز دنیا و هوش مصنوعی{" "}
        </p>
        <p>بررسی و نتیجه گیری نهایی توسط تیم فیزیوتراپی پارس</p>
      </div>
    </div>
  );
}

function DesktopSteps() {
  return (
    <>
      <div className="z-20 absolute hidden lg:flex flex-row justify-center gap-5 items-center top-[25%] -right-[95%]">
        <LineOne />
        <span dir="rtl" className="w-64">
          ارائه اپلیکیشن و وب اپ برای بررسی دقیق مشکلات کف پا با استفاده از
          آخرین تکنولوژی روز دنیا و هوش مصنوعی
        </span>
      </div>
      <div className="z-20 hidden lg:flex absolute flex-row justify-center items-center gap-4 bottom-1/3 left-[80%]">
        <LineThree />
        <span dir="rtl" className="w-36">
          بررسی و نتیجه گیری با مدل سازی هوشمند کف پا نسبت به ده هزار مدل مشابه
        </span>
      </div>
      <div className="z-20 hidden lg:flex  flex-col justify-center items-start absolute bottom-0 -left-[80%]">
        <span dir="rtl" className="w-52 mb-4">
          بررسی و نتیجه گیری نهایی توسط تیم فیزیوتراپی
        </span>
        <div className="">
          <LineTwo />
        </div>
        <Image src={nurse} alt="" />
      </div>
    </>
  );
}

function MobileImage() {
  return (
    <MobileAnime>
      <div className=" relative flex flex-row justify-center items-center mx-auto">
        <DesktopSteps />
        <Image
          className="w-[60%] md:w-[80%] lg:w-[90%] z-0 object-cover"
          src={mobileFrame}
          alt=""
        />
        <div
          dir="rtl"
          className="z-10 absolute top-[20%] left-1/2 -translate-x-1/2 w-[50%] md:top-[20%] lg:w-[75%] lg:top-[18%] bg-opacity-50 rounded-lg p-3"
        >
          <p className="text-black-bold w-32 font-bold text-right text-[10px] md:text-[16px] lg:text-[16px]  lg:leading-7 lg:mb-1 ">
            آنالیز کف پا مبتنی بر هوش مصنوعی
          </p>
          <p className="text-black-bold text-right text-[6px] md:text-[10px] lg:text-[12px]">
            با ما از اختلالات کف پای خود آگاه شوید، همین الان آنالیز رو شروع
            کنید.
          </p>
        </div>
        <Link href={"https://web.parspa-ai.ir/login"}>
          <IconButton
            className="z-10 absolute left-1/2 -translate-x-1/2 bottom-5 font-semibold text-[12px] lg:text-[18px] px-3 py-2 w-32 lg:w-44 lg:p-4 lg:rounded-2xl"
            text=" شروع آنالیز"
          />
        </Link>
      </div>
    </MobileAnime>
  );
}

function LineSVGMobile() {
  return (
    <svg
      width="9"
      height="258"
      viewBox="0 0 9 258"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="4.5" y1="128" x2="4.50001" y2="248" stroke="#28BCBE" />
      <line x1="4.5" y1="10" x2="4.50001" y2="117" stroke="#28BCBE" />
      <circle cx="4.5" cy="4.5" r="4" stroke="#28BCBE" />
      <circle cx="4.5" cy="122.5" r="4" stroke="#28BCBE" />
      <circle cx="4.5" cy="253.5" r="4" stroke="#28BCBE" />
    </svg>
  );
}

function LineOne() {
  return (
    <svg
      width="167"
      height="7"
      viewBox="0 0 167 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.331868 3.5C0.331868 4.97276 1.52578 6.16667 2.99854 6.16667C4.47129 6.16667 5.6652 4.97276 5.6652 3.5C5.6652 2.02724 4.47129 0.833333 2.99854 0.833333C1.52578 0.833333 0.331868 2.02724 0.331868 3.5ZM2.99854 4H167.002V3H2.99854V4Z"
        fill="#A4A4A4"
      />
    </svg>
  );
}

function LineTwo() {
  return (
    <svg
      width="79"
      height="154"
      viewBox="0 0 79 154"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M77.1926 153.385C78.5098 152.727 79.0438 151.125 78.3851 149.807C77.7265 148.49 76.1247 147.956 74.8074 148.615C73.4902 149.273 72.9562 150.875 73.6149 152.193C74.2735 153.51 75.8753 154.044 77.1926 153.385ZM76.4472 150.776L1.44722 0.776413L0.552796 1.22363L75.5528 151.224L76.4472 150.776Z"
        fill="#A4A4A4"
      />
    </svg>
  );
}

function LineThree() {
  return (
    <svg
      width="256"
      height="32"
      viewBox="0 0 256 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.349643 29.2945C0.512282 30.7582 1.83073 31.813 3.29448 31.6504C4.75824 31.4877 5.813 30.1693 5.65036 28.7055C5.48772 27.2418 4.16927 26.187 2.70552 26.3496C1.24176 26.5123 0.187004 27.8307 0.349643 29.2945ZM3.05522 29.4969L255.055 1.49694L254.945 0.503057L2.94478 28.5031L3.05522 29.4969Z"
        fill="#A4A4A4"
      />
    </svg>
  );
}
