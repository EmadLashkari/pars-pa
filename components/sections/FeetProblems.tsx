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
    description:
      "اختلال در صافی کف پا باعث می‌شود که توزیع فشار در پاها به درستی انجام نشود. این وضعیت می‌تواند منجر به انحراف شست پا به سمت بیرون (هالوس والگوس) شود، که باعث تغییر شکل و درد در ناحیه انگشت شست پا می‌شود.",
    img: knock,
    open: true,
  },
  {
    title: "زانو پرانتزی (ژنوواروم)",
    description:
      "اختلال در قوس کف پا به خصوص قوس بیش از حد آن (  pes cavous foot )‌میتواند باعث تغییراتی در ساختار پا شود که منجر به انحراف زانو به بیرون (زانو پرانتزی) می‌شود. این وضعیت می‌تواند به درد و اسیب در ناحیه زانو منجر می شود.",
    img: bowleg,
    open: true,
  },
  {
    title: "زانو ضربدری (ژنووالگوم)",
    description:
      " کاهش قوس کف پا یا صافی آن می‌تواند به تغییراتی در الگوی حرکت پا و زانو منجر شود. این وضعیت می‌تواند باعث انحراف زانوها به سمت داخل (زانو ضربدری) شود که منجر به درد و افزایش خطر آسیب به زانوها می‌گردد.",
    img: bun,
    open: true,
  },
  {
    title: "کمردرد",
    description:
      "اختلال در قوس کف پا می‌تواند به تغییرات در راستای ستون فقرات و فشار اضافی به کمر منجر شود. این تغییرات می‌توانند علت ایجاد کمردرد و ناراحتی‌های مرتبط با آن باشند.",
    img: backpain,
    open: true,
  },
  {
    title: "خستگی زودرس هنگام قدم زدن",
    description:
      "با کاهش یا افزایش قوس کف پا محور تعادل اسکلت دچار ناترازی گشته و این مسئله فشار بیشتری به عضلات و مفاصل وارد میکند که این فشار باعث‌خستگی زودرس هنگام راه رفتن میشود",
    img: walking,
    open: true,
  },
  {
    title: "پیچ خوردگی مکرر مچ پا",
    description:
      "اختلال در قوس کف پا می‌تواند تعادل و ثبات پا را در ناحیه مفصل مچ تغییر داده و باعث افزایش ریسک پیچ خوردگی و آسیب دیدگی آن شود.",
    img: ankle,
    open: true,
  },
];

const FeetProblems = () => {
  return (
    <section className="w-full gap-10 pt-10 flex flex-col justify-between items-center bg-white">
      <div className="font-bold text-[20px] text-center lg:text-[30px] lg:pb-10 lg:pt-20">
        اختلالات شایع پا و تأثیر آن‌ها بر{" "}
        <span className="text-primary600 underline-offset-2">سلامت</span>
      </div>
      <div
        dir="rtl"
        className="w-full lg:w-[90%] grid grid-cols-1 lg:grid-cols-2 p-2 lg:p-10 gap-4 "
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
        className={`w-20 h-20 hidden lg:block  ${
          keyItem === 0 ? "lg:w-56 lg:h-56" : "lg:w-24 lg:h-24"
        }`}
      />
      <div className="lg:hidden flex flex-row justify-center items-center gap-5">
        <Image
          src={img}
          alt={title}
          className={`w-20 h-20  ${
            keyItem === 0 ? "lg:w-56 lg:h-56" : "lg:w-24 lg:h-24"
          }`}
        />
        <span className="text-[20px] font-bold ">{title}</span>
      </div>
      <div className="p-3 flex flex-col gap-3">
        <span className="text-[20px] font-bold hidden lg:block">{title}</span>
        <p className="text-sm leading-9">{description}</p>
      </div>
    </div>
  );
};

export default FeetProblems;
