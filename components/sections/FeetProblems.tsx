import Image from "next/image";
import React from "react";
import hellSpur from "@/public/image/hell-spur.png";
import knock from "@/public/image/knock-knees.png";
import bowleg from "@/public/image/bowlegs.png";
import bun from "@/public/image/bunion.png";
import backpain from "@/public/image/lower-back-pain.png";
import walking from "@/public/image/fatigue-walking.png";
import ankle from "@/public/image/frequent-ankle.png";

type CardItem = {
  title: string;
  description: string;
  img: any;
  open?: boolean;
  keyItem?: number;
};

const CardDate: CardItem[] = [
  {
    title: "خار پاشنه",
    description:
      "اختلال در صافی کف پا می‌تواند فشار بیشتری را به کف پا وارد کند، به خصوص به ناحیه پاشنه. این فشار اضافی می‌تواند منجر به ایجاد خار پاشنه شود، که در آن توده‌ای از استخوان در قسمت زیرین پاشنه شکل می‌گیرد و باعث درد و ناراحتی در هنگام راه رفتن می‌شود.",
    img: hellSpur,
    open: false,
  },
  {
    title: "انحراف شست پا (هالوس والگوس)",
    description: "اختلال در صافی کف پا باعث می‌شود که توزیع فشار در پاها به...",
    img: knock,
    open: true,
  },
  {
    title: "زانو پرانتزی (ژنوواروم)",
    description: "اختلال در قوس کف پا به خصوص قوس بیش از حد آن ...",
    img: bowleg,
    open: true,
  },
  {
    title: "زانو ضربدری (ژنووالگوم)",
    description: "کاهش قوس کف پا یا صافی آن می‌تواند به تغییراتی در ...",
    img: bun,
    open: true,
  },
  {
    title: "کمردرد",
    description: "اختلال در قوس کف پا می‌تواند به تغییرات در راستای ستون...",
    img: backpain,
    open: true,
  },
  {
    title: "خستگی زودرس هنگام قدم زدن",
    description: "با کاهش یا افزایش قوس کف پا محور تعادل اسکلت دچار ناترازی...",
    img: walking,
    open: true,
  },
  {
    title: "پیچ خوردگی مکرر مچ پا",
    description:
      "اختلال در قوس کف پا می‌تواند تعادل و ثبات پا را در ناحیه مفصل",
    img: ankle,
    open: true,
  },
];

const FeetProblems = () => {
  return (
    <section className="w-full flex flex-col justify-between items-center bg-white">
      <div className="font-bold text-[20px] lg:text-[30px] lg:pb-10 lg:pt-20">
        اختلالات شایع پا و تأثیر آن‌ها بر{" "}
        <span className="text-primary600 underline-offset-2">سلامت</span>
      </div>
      <div
        dir="rtl"
        className="w-[90%] grid grid-cols-1 lg:grid-cols-2 p-10 gap-4 "
      >
        {CardDate.map((item, key) => (
          <Card
            key={item.title}
            keyItem={key}
            title={item.title}
            description={item.description}
            img={item.img}
            open={item.open}
          />
        ))}
      </div>
    </section>
  );
};

const Card = ({ title, description, img, keyItem, open }: CardItem) => {
  return (
    <div
      className={`${
        keyItem === 0 && "row-span-2"
      } flex flex-col lg:flex-row justify-start items-start w-full p-5 bg-bg-sec-color bg-opacity-45 rounded-2xl`}
    >
      <Image
        src={img}
        alt={title}
        className={`w-full  ${
          keyItem === 0 ? "lg:w-56 lg:h-56" : "lg:w-24 lg:h-24"
        }`}
      />
      <div className="p-3 flex flex-col gap-3">
        <span className="text-[20px] font-bold">{title}</span>
        <p className="text-sm leading-9">{description}</p>
      </div>
    </div>
  );
};

export default FeetProblems;
