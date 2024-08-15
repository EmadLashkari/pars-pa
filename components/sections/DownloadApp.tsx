import Image from "next/image";
import React from "react";
import Mobiles from "@/public/image/mobiles.svg";
import AppStore from "@/public/image/AppStore.svg";
import GooglePlay from "@/public/image/GooglePlay.svg";

const DownloadApp = () => {
  return (
    <div className="w-full h-[100vh] lg:h-[70vh] bg-white lg:bg-bg-sec-color flex flex-col justify-around py-5 items-center lg:px-20 lg:flex-row">
      <Discription />

      {/* mobile images */}
      <div className="w-[70%] lg:w-full flex flex-row justify-center items-center">
        <Image src={Mobiles} alt="" />
      </div>

      {/* download buttons */}
      <div className="flex flex-col w-[50%] gap-2 lg:gap-10">
        <button>
          <Image src={AppStore} alt="" />
        </button>
        <button>
          <Image src={GooglePlay} alt="" />
        </button>
      </div>
    </div>
  );
};

export default DownloadApp;

function Discription() {
  return (
    <div className="px-5 flex flex-col lg:gap-10">
      <h2 className="font-poppins text-[20px] lg:text-[30px] font-bold text-black-bold w-52 lg:w-72 leading-8 lg:leading-10">
        Experience the Insole Technology
      </h2>
      <p className="text-[16px] mt-5 text-gray-thin leading-[33px] lg:w-[23rem]">
        Welcome to our insole ordering application. We are committed to
        protecting your privacy and ensuring the security of your personal
        information.
      </p>
    </div>
  );
}
