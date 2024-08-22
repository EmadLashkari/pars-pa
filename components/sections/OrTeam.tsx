import Doctor from "@/public/image/medicalCare.svg";
import Image from "next/image";
import Fisiotrap from "@/public/image/fisiyotrap.svg";
import styles from "@/styles/sections/ourteam.module.scss";
import TextFadeIn from "../animations/TextFade";
import CardSliderAnime from "../animations/CardSlider";
import AI from "@/public/image/AI.svg";
import Team from "@/public/image/Team.svg";

const OrTeam = () => {
  return (
    <div
      id="our-team"
      className="w-full bg-[#AFE5F4] gap-10 flex-col justify-between items-center pt-10 "
    >
      <Title />
      <div className="mt-20 flex flex-col items-center lg:flex-row lg:justify-around">
        <CardSliderAnime
          data={[
            {
              title: "تیم فیزیوتراپ",
              url: Doctor,
              discription:
                "پزشکان و متخصصان فیزیوتراپی که با بررسی دقیق و تحلیل علمی وضعیت پاهای شما، نیازهای خاص هر فرد را شناسایی و مشاوره‌های تخصصی ارائه می‌دهند. این تحلیل‌ها مبنای طراحی کفی‌های اختصاصی و بهینه برای هر فرد خواهد بود",
            },
            {
              title: "تیم نرم‌افزاری و پیاده‌سازی هوش مصنوعی",
              discription:
                "پزشکان و متخصصان فیزیوتراپی که با بررسی دقیق و تحلیل علمی وضعیت پاهای شما، نیازهای خاص هر فرد را شناسایی و مشاوره‌های تخصصی ارائه می‌دهند. این تحلیل‌ها مبنای طراحی کفی‌های اختصاصی و بهینه برای هر فرد خواهد بود",
              url: AI,
            },
            {
              title: "تیم طراحی و تولید کفی کفش",
              discription:
                "طراحان و مهندسان تولید که با بهره‌گیری از نتایج تحلیل‌های فیزیوتراپی و داده‌های نرم‌افزاری، کفی‌های کفش را طراحی و تولید می‌کنند. استفاده از تکنولوژی‌های پیشرفته در این بخش به تضمین کیفیت و تطابق کفی‌ها با نیازهای فردی کمک می‌کند",
              url: Team,
            },
          ]}
        >
          <CardSlider />
        </CardSliderAnime>
        <DoctorImage />
      </div>
    </div>
  );
};

export default OrTeam;

function Title() {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <h2 className="text-black-bold font-bold text-[30px]">تیم ما</h2>
      <p className="text-black-bold"> درباره تیم تخصصی ما بخوانید</p>
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
      className={`bg-white w-[20rem] lg:w-[20rem] m-5 lg:m-0 py-6 rounded-3xl ${styles.card} ${className}`}
    >
      {/* card  */}
      <div className="flex flex-col gap-9 justify-center items-center p-10">
        {/* image  */}
        <div>
          <Image src={src} alt="" />
        </div>
        {/* text  */}
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="text-black-bold text-center text-[18px] font-bold ">
            {title}
          </h2>
          <p className="text-black-bold text-center text-[14px]">
            {discription}
          </p>
        </div>
      </div>
      {/* togle */}
      <div></div>
    </div>
  );
}

function DoctorImage() {
  return (
    <TextFadeIn>
      <div className="flex justify-center  w-full">
        <Image src={Fisiotrap} className="lg:w-[400px]" alt="" />
      </div>
    </TextFadeIn>
  );
}

function CardSlider() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-fit flex flex-row justify-center items-center">
        <Card
          title="تیم فیزیوتراپ"
          discription="پزشکان و متخصصان فیزیوتراپی که با بررسی دقیق و تحلیل علمی وضعیت پاهای شما، نیازهای خاص هر فرد را شناسایی و مشاوره‌های تخصصی ارائه می‌دهند. این تحلیل‌ها مبنای طراحی کفی‌های اختصاصی و بهینه برای هر فرد خواهد بود."
          src={Doctor}
          className="hidden z-0 lg:block translate-x-36 opacity-50"
        />
        <Card
          title="تیم نرم‌افزاری و پیاده‌سازی هوش مصنوعی"
          discription="توسعه و بهینه‌سازی اپلیکیشن و الگوریتم‌های هوش مصنوعی که به آنالیز و مدل سازی دقیق وضعیت پاها را ارائه می‌دهند. با استفاده از تکنولوژی‌های پیشرفته، این تیم داده‌های فیزیوتراپی و تصاویر پاهای شما  را به صورت علمی و کارآمد پردازش و نتایج دقیق را ارائه می‌دهد."
          src={Doctor}
          className="block z-10 scale-110 shadow-2xl shadow-primary700"
        />
        <Card
          title="تیم طراحی و تولید کفی کفش"
          discription="طراحان و مهندسان تولید که با بهره‌گیری از نتایج تحلیل‌های فیزیوتراپی و داده‌های نرم‌افزاری، کفی‌های کفش را طراحی و تولید می‌کنند. استفاده از تکنولوژی‌های پیشرفته در این بخش به تضمین کیفیت و تطابق کفی‌ها با نیازهای فردی کمک می‌کند."
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
