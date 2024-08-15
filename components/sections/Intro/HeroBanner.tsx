import Image from "next/image";
import React from "react";
import Doctor from "@/public/image/young-doctor-sec1.svg";
import BackImg from "@/public/image/back.svg";
import SquareImg from "@/public/image/squre.svg";
const HeroBanner = () => {
  return (
    <section className="w-full lg:w-[90%] h-[100vh] flex flex-col lg:flex-row justify-between items-center lg:items-center lg:justify-between overflow-hidden">
      <div className=" w-fit flex flex-col items-center lg:items-start  sm:px-5 gap-5">
        <h1 className="text-[30px] md:text-[36px] w-[288px] md:w-[491px] md:text-start pt-[130px] md:pt-0 text-center leading-snug font-poppins font-bold text-black ">
          Experience the<span className="text-primary950 px-2">Ultimate</span>in
          Insole Technology
        </h1>
        <p className="text-[#424242] w-80 sm:w-[525px] md:text-start text-center leading-8 font-poppins font-normal text-[16px] ">
          Welcome to our insole ordering application. We are committed to
          protecting your privacy and ensuring the security of your personal
          information.
        </p>
        <button className="bg-primary950 w-44 h-12 hover:bg-primary800 shadow-lg hover:shadow-2xl transition-all ease-linear group text-white rounded-[15px] text-lg flex Poppins-SemiBold justify-around items-center ">
          Order Now{" "}
          <Image
            width={10}
            height={10}
            alt=""
            src={"/image/arrow.png"}
            className="w-2 object-cover group-hover:translate-x-2 transition-all ease-linear duration-200"
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
    <div className="relative flex justify-center lg:h-full w-full mt-10 overflow-visible lg:mt-40">
      <Image
        src={Doctor}
        alt=""
        className="w-[250px] h-[343px] static z-50  md:w-[468px] md:h-[550px] lg:w-full lg:h-full "
      />
      <div className="z-0 absolute overflow-hidden bottom-0 left-16 w-[250px] h-[330px] md:w-[350px] sm:w-[200px] lg:top-0 lg:left-52 lg:w-[800px] lg:h-[900px]">
        <Image alt="" src={BackImg} className="w-full object-cover" />
      </div>
      <Image
        alt=""
        width={447}
        height={377}
        src={SquareImg}
        className="z-20 absolute -top-10  w-[300px] h-[377.66px] lg:w-[700px] lg:h-[600px] lg:top-56 lg:left-32"
      />
    </div>
  );
}
