import Doctor from "@/public/image/medicalCare.svg";
import Image from "next/image";
import Fisiotrap from "@/public/image/fisiyotrap.svg";

const OrTeam = () => {
  return (
    <div className="w-full bg-[#AFE5F4] gap-10 flex-col justify-between items-center pt-10 ">
      <Title />
      <div className="mt-20 flex flex-col items-center lg:flex-row lg:justify-around">
        <CardSlider />
        <DoctorImage />
      </div>
    </div>
  );
};

export default OrTeam;

function Title() {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <h2 className="text-black-bold font-bold text-[30px]">Our Team</h2>
      <p className="text-black-bold">Custom Design Based on Your Needs</p>
    </div>
  );
}

function Card({
  title,
  discription,
  src,
  className,
}: {
  title: string;
  discription: string;
  src: any;
  className?: string;
}) {
  return (
    <div
      className={`bg-white w-[22rem] lg:w-[20rem] m-5 lg:m-0 py-6 rounded-3xl ${className}`}
    >
      {/* card  */}
      <div className="flex flex-col gap-9 justify-center items-center p-10">
        {/* image  */}
        <div>
          <Image src={src} alt="" />
        </div>
        {/* text  */}
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="text-black-bold text-center text-[20px] font-bold ">
            {title}
          </h2>
          <p className="text-black-bold text-center">{discription}</p>
        </div>
      </div>
      {/* togle */}
      <div></div>
    </div>
  );
}

function DoctorImage() {
  return (
    <div className="flex justify-center  w-full">
      <Image src={Fisiotrap} className="lg:w-[500px]" alt="" />
    </div>
  );
}

function CardSlider() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-fit flex flex-row justify-center items-center">
        <Card
          title="Health Focused"
          discription="Doctor-approved insole recommendations"
          src={Doctor}
          className="hidden z-0 lg:block translate-x-36 opacity-50"
        />
        <Card
          title="Health Focused"
          discription="Doctor-approved insole recommendations"
          src={Doctor}
          className="block z-10 scale-110 shadow-2xl shadow-primary700"
        />
        <Card
          title="Health Focused"
          discription="Doctor-approved insole recommendations"
          src={Doctor}
          className="hidden z-0 lg:block -translate-x-36 opacity-50"
        />
      </div>
      <div className="flex justify-center gap-3 my-14">
        <button className="bg-[#96afec] opacity-40 w-5 h-5 p-1 rounded-full"></button>
        <button className="bg-white w-5 h-5 p-1 rounded-full"></button>
        <button className="bg-[#96afec] opacity-40  w-5 h-5 p-1 rounded-full"></button>
      </div>
    </div>
  );
}
