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
    <section className="w-screen pb-12 sm:pb-32 pt-12 min-h-[400px] bg-[#C6EDF7] flex items-start justify-center  px-12 sm:px-24">
      <div className=" flex flex-col items-center justify-center w-full">
        <h2 className="text-title Poppins-SemiBold text-center text-3xl">
          Why Dr Foot ?
        </h2>
        <p className="text-title Poppins-ExtraLight text-center mt-4">
          Welcome to our insole ordering application.
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4 w-full">
          <div className="bg-white transition-all ease-linear hover:shadow-lg rounded-2xl gap-8 p-4 w-full flex justify-between items-center">
            <p className="text-title text-base">Welcome to our insole</p>
            <MedalStar size="32" color="#28BCBE" />
          </div>
          <div className="bg-white transition-all ease-linear hover:shadow-lg rounded-2xl gap-8 p-4 w-full flex justify-between items-center">
            <p className="text-title text-base">Welcome to our insole</p>
            <TruckFast size="32" color="#28BCBE" />
          </div>
          <div className="bg-white transition-all ease-linear hover:shadow-lg rounded-2xl gap-8 p-4 w-full flex justify-between items-center">
            <p className="text-title text-base">Welcome to our insole</p>
            <Headphone size="32" color="#28BCBE" />
          </div>
          <div className="bg-white   transition-all ease-linear hover:shadow-lg rounded-2xl gap-8 p-4 w-full flex justify-between items-center">
            <p className="text-title text-base">Welcome to our insole</p>
            <Diagram size="32" color="#28BCBE" />
          </div>
          <div className="bg-white transition-all ease-linear hover:shadow-lg  rounded-2xl gap-8 p-4 w-full flex justify-between items-center">
            <p className="text-title text-base">Welcome to our insole</p>
            <ShoppingCart size="32" color="#28BCBE" />
          </div>
          <div className="bg-white  transition-all ease-linear hover:shadow-lg rounded-2xl gap-8 p-4 w-full flex justify-between items-center">
            <p className="text-title text-base">Welcome to our insole</p>
            <Wallet size="32" color="#28BCBE" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
