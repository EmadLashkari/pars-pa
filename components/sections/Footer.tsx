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

function Footer() {
  return (
    <footer className="w-screen bg-[#28BCBE63] px-8 md:px-8 lg:px-18 pt-12 flex flex-col items-center justify-start">
      <div className="flex flex-col sm:flex-row w-full justify-start items-start sm:items-start gap-8 sm:gap-0 sm:justify-evenly">
        <div className="flex flex-col items-start ">
          {" "}
          <h2 className="text-white text-2xl mb-4">Dr Foot Team</h2>
          <p className="text-[#505050] Poppins-Light text-lg">
            Our team of seasoned experts collaborates
          </p>
          <p className="text-[#505050] Poppins-Light text-lg">
            seamlessly to deliver cutting-edge software
          </p>
          <p className="mt-4 text-[#505050] Poppins-Light text-lg">
            of our clients.
          </p>
          <p className="flex gap-1 mt-2 items-center text-[#505050] Poppins-Light text-lg">
            <Call size="20" color="#505050" /> +(98) 901-967-3075
          </p>
          <p className="flex gap-1 mt-2 items-center text-[#505050] Poppins-Light text-lg">
            <HiOutlineEnvelope color="#505050" size={20} /> Info@drfoot.com
          </p>
          <div className="flex gap-4 mt-4">
            <FaTelegram color="#505050" size={32} />
            <FaLinkedin color="#505050" size={32} />
            <FaInstagram color="#505050" size={32} />
          </div>
        </div>
        <div className="flex flex-col items-start sm:items-center ">
          <h2 className="text-white text-2xl mb-4">Popular Links</h2>
          <ul>
            <li className="text-lg Poppins-Light text-[#505050]">
              <a href="">About us</a>
            </li>
            <li className="text-lg Poppins-Light text-[#505050]">
              <a href="">Contact us</a>
            </li>
            <li className="text-lg Poppins-Light text-[#505050]">
              <a href="">Solutions</a>
            </li>
            <li className="text-lg Poppins-Light text-[#505050]">
              <a href="">Services</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-start  md:w-1/3">
          <div className="flex items-center justify-center gap-1">
            <Image src={"/image/Logo.svg"} alt=" " width={93} height={80} />
            <h1 className="text-[#009D6D] font-[700] text-3xl">
              <span className="text-[#3CCAFF] text-3xl">Dr </span>
              Foot
            </h1>
          </div>
          <p className="text-[#505050] Poppins-Light text-start mt-4">
            Stay in the loop with our latest updates <br />
            and exclusive offers by subscribing to <br /> our newsletter today!
          </p>
          <div className="mt-2 flex flex-col md:flex-row gap-2 justify-center items-center w-full">
            <label htmlFor="email" hidden></label>
            <input
              placeholder="Enter you email address"
              id="email"
              type="email"
              className="w-full md:w-3/4 h-12 px-2 bg-white rounded-xl outline-none"
            />
            <button className="w-full px-2 hover:text-white hover:shadow-lg transition-all ease-linear md:w-1/4 h-12 text-center rounded-xl bg-[#60C2B7] text-[#505050]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mt-8 flex items-center justify-center">
        <p className="text-[#505050] text-lg Poppins-Light py-4">
          Copyright © Dr foot | All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
