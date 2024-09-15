import Image from "next/image";
import React from "react";
import hellSpur from "@/public/image/hell-spur.png";
import knock from "@/public/image/ALLUX-VALGUS.png";
import bowleg from "@/public/image/pa-parantecies.jpg";
import bun from "@/public/image/pa-zarbdari.jpg";
import backpain from "@/public/image/back-pain.jpg";
import walking from "@/public/image/fatigue-walking.png";
import ankle from "@/public/image/pichkhordegi.jpg";
import TextFadeIn from "../animations/TextFade";

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
      "اختلال درقوس کف پا با ایجاد فشار به بافت تاندونی و همبند در ناحیه کف پا، باعث ایجاد التهاب در ناحیه پاشنه شده که در صورت عدم درمان مناسب تبدیل به خار پاشنه می شود که با علایمی مانند درد در ناحیه پاشنه به هنگام راه رفتن بویژه درد صبحگاهی همراه است",
    img: hellSpur,
    open: false,
  },
  {
    title: "انحراف شست پا (هالوس والگوس)",
    description:
      "اختلال در قوس کف پا باعث می‌شود که توزیع فشار در کف پا و زیر انگشتان به درستی انجام نشود. این وضعیت می‌تواند منجر به انحراف شست پا به سمت بیرون (هالوس والگوس) شود، که با تغییر شکل و درد در ناحیه انگشت شست پا همراه است.",
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
          <TextFadeIn key={item.title}>
            <Card
              keyItem={key}
              title={item.title}
              description={item.description}
              img={item.img}
              open={item.open}
            />
          </TextFadeIn>
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
        className={`w-20 h-20 hidden lg:block rounded-lg  ${
          keyItem === 0 ? "lg:w-56 lg:h-56" : "lg:w-24 lg:h-24"
        }`}
      />
      <div className="lg:hidden flex flex-row justify-center items-center gap-5">
        <Image
          src={img}
          alt={title}
          className={`w-20 h-20 rounded-lg ${
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
