import Image from "next/image";
import IconButton from "../main/Button/IconButton";
import { IoStar } from "react-icons/io5";
import { FaQuoteLeft } from "react-icons/fa";
import { data } from "@/data/comments/comments";

const Testminials = () => {
  return (
    <div className="bg-white w-full flex flex-col lg:flex-row justify-center items-center lg:items-stretch lg:justify-around lg:py-20">
      <Info />
      <div className="flex flex-col gap-4 pb-10">
        {data.map((item, index) => {
          return (
            <div key={item.name}>
              <CardMobile title={item.title} url={item.url} name={item.name} />
              <CardDesktop
                key={item.name}
                index={index}
                title={item.title}
                url={item.url}
                name={item.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

function Info() {
  return (
    <div className="flex flex-col justify-center lg:items-start items-center py-14 lg:py-0 lg:pb-32 lg:justify-between gap-10">
      <div className="flex flex-col justify-center gap-5">
        <h2 className="text-black-bold text-[30px] font-bold text-center lg:text-start">
          DR Foot <span className="text-primary950">Testminials</span>
        </h2>
        <p className="text-black-bold text-center lg:text-start w-[18rem] lg:w-[38rem]">
          Welcome to our insole ordering application. We are committed to
          protecting your privacy and ensu ring the security of your personal
          information.{" "}
        </p>
      </div>
      <IconButton text="view more" />
    </div>
  );
}

function CardMobile({
  name,
  url,
  title,
}: {
  name: string;
  url: any;
  title: string;
}) {
  return (
    <div className="w-[20rem] lg:hidden border-[#C6EDF7] border-s-[10px] flex flex-col justify-between items-start bg-opacity-25 bg-[#C6EDF7] p-5 rounded-3xl">
      <div className="w-full px-2 flex flex-row justify-between items-center">
        <div className="self-end flex justify-end gap-2">
          <IoStar className="text-[#FFA800] text-lg" />
          <IoStar className="text-[#FFA800] text-lg" />
          <IoStar className="text-[#FFA800] text-lg" />
          <IoStar className="text-[#FFE8AF] text-lg" />
          <IoStar className="text-[#FFE8AF] text-lg" />
        </div>
        <FaQuoteLeft className="text-[#8F8F8F] transition-all ease-linear text-2xl group-hover:text-[#28BCBE]" />
      </div>
      <div className="flex flex-row justify-center items-center gap-5 pt-6">
        <Image
          alt="profile"
          className="w-[100px] h-[100px] rounded-full object-top "
          src={url}
          width={10}
          height={10}
        />
        <h2 className="text-black font-bold">{name}</h2>
      </div>
      <p className="pl-5 py-5 leading-8">&quot;{title}&quot;</p>
    </div>
  );
}

function CardDesktop({
  name,
  url,
  title,
  index,
}: {
  name: string;
  url: any;
  title: string;
  index: number;
}) {
  return (
    <div
      className={`${
        index === 1 && "-translate-x-20 border-blue-400"
      } w-[40rem] hidden border-[#C6EDF7] border-s-[10px] lg:flex flex-col justify-between items-start bg-opacity-25 bg-[#C6EDF7] p-5 rounded-3xl`}
    >
      <div className="flex flex-row justify-center items-center">
        <Image
          alt="profile"
          className="w-[100px] h-[100px] rounded-full object-top "
          src={url}
          width={10}
          height={10}
        />
        <div className="flex flex-col justify-center items-center">
          <div className="w-full px-5 flex flex-row justify-between items-center">
            <h2 className="text-black font-bold">{name}</h2>
            <FaQuoteLeft className="text-[#8F8F8F] transition-all ease-linear text-2xl group-hover:text-[#28BCBE]" />
          </div>
          <p className="pl-5 py-1 leading-8">&quot;{title}&quot;</p>
        </div>
      </div>

      <div className="self-end flex justify-end gap-2">
        <IoStar className="text-[#FFA800] text-lg" />
        <IoStar className="text-[#FFA800] text-lg" />
        <IoStar className="text-[#FFA800] text-lg" />
        <IoStar className="text-[#FFE8AF] text-lg" />
        <IoStar className="text-[#FFE8AF] text-lg" />
      </div>
    </div>
  );
}

function SCard({
  name,
  url,
  title,
}: {
  name: string;
  url: any;
  title: string;
}) {
  return (
    <div
      key={name}
      className="w-full z-40 transition-all ease-in-out shadow-md hover:shadow-lg hover:border-s-[#28BCBE] group rounded-xl p-4 flex flex-col bg-[#C6EDF745] border-s-8 border-s-[#CACACA] duration-500 md:hover:-translate-x-16"
    >
      <div className="self-end flex w-4/5 pe-16 justify-between items-center">
        <h2 className="Poppins-Bold text-black ">{name}</h2>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-[150px] h-[75px] rounded-full"></div>
        <p className="text-sm Poppins-Light">{`" ${title} "`}</p>
      </div>
    </div>
  );
}

export default Testminials;
