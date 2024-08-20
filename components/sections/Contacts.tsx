import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { SlSocialInstagram } from "react-icons/sl";

function Contacts() {
  return (
    <section
      id="contactus"
      className="w-screen min-h-screen pb-72 pt-4  sm:pb-0 bg-primary100 flex justify-center items-center relative  "
    >
      <Image
        src={"/image/phone.svg"}
        width={100}
        height={100}
        className="absolute w-[200px] bottom-0 sm:w-[250px] lg:w-[500px] left-0"
        alt=""
      />
      <div className="flex flex-col justify-center items-center">
        <div className="sm:ps-32 flex flex-col justify-center items-center  gap-3">
          <h3 className="text-xl text-center text-black Poppins-Bold">
            راه های ارتباط مستقیم با مشاوران و متخصصین ما
          </h3>
          <p className="Poppins-Light text-title text-base"></p>
        </div>
        <div className="grid gap-10 sm:gap-y-20 gap-x-32 grid-cols-2 md:grid-cols-4 mt-12">
          <div className="flex flex-col col-span-2 items-start justify-start">
            <div className="flex cursor-default items-center">
              <FaRegEnvelope color="#424242" size={20} />{" "}
              <h3 className="text-[#A1A1A1] Poppins-Light mx-1">Email</h3>
            </div>
            <h3 className="Poppins-Light mt-2 text-primary900">
              drfootsupport@gmail.com
            </h3>
          </div>
          <div className="flex flex-col col-span-2 items-start justify-start">
            <div className="flex items-center cursor-default">
              <FaWhatsapp color="#424242" size={20} />
              <h3 className="text-[#A1A1A1] Poppins-Light mx-1">Whatsapp</h3>
            </div>
            <h3 className="Poppins-Light mt-2 text-primary900">
              drfootsupport@gmail.com
            </h3>
          </div>
          <div className="flex flex-col col-span-2 items-start justify-start">
            <div className="flex items-center cursor-default">
              <IoMdCall color="#424242" size={20} />
              <h3 className="text-[#A1A1A1] Poppins-Light mx-1">Whatsapp</h3>
            </div>
            <h3 className="Poppins-Light mt-2 text-primary900">0218379302</h3>
          </div>
          <div className="flex flex-col col-span-2 items-start justify-start">
            <div className="flex items-center cursor-default">
              <SlSocialInstagram color="#424242" size={20} />
              <h3 className="text-[#A1A1A1] Poppins-Light mx-1">Instagram</h3>
            </div>
            <h3 className="Poppins-Light mt-2 text-primary900">
              drfootsupport@gmail.com
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
