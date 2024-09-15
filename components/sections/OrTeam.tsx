import Doctor from "@/public/image/medicalCare.jpg";
import Image from "next/image";
import Fisiotrap from "@/public/image/fisiyotrap.jpg";
import styles from "@/styles/sections/ourteam.module.scss";
import TextFadeIn from "../animations/TextFade";
import CardSliderAnime from "../animations/CardSlider";
import AI from "@/public/image/AI.png";
import Team from "@/public/image/Team.jpg";

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
              title: "تیم کارشناسان فنی",
              url: Doctor,
              discription:
                "فیزیوتراپیست های تیم که با بررسی دقیق و تحلیل علمی وضعیت پاهای شما، نیازهای خاص هر فرد را شناسایی و مشاوره‌های تخصصی ارائه می‌دهند. این تحلیل‌ها مبنای طراحی کفی‌های اختصاصی و بهینه برای هر فرد خواهد بود.",
            },
            {
              title: "تیم نرم‌افزار و هوش مصنوعی",
              discription:
                "قلب تپنده‌ی تکنولوژی پارس پا، این تیم با بهره‌گیری از  فناوری‌های هوش مصنوعی و توسعه نرم‌افزارهای پیشرفته، ابزارهایی دقیق و هوشمند را برای تشخیص و تحلیل مشکلات پا ارائه می‌دهد. اعضای این تیم با ترکیب دانش فنی و خلاقیت، راهکارهایی نوآورانه را طراحی کرده‌اند تا شما بتوانید از تجربه‌ای متفاوت و کارآمد در مراقبت از پاهای خود لذت ببرید",
              url: AI,
            },
            {
              title: "تیم طراحی و تولید کفی کفش",
              discription:
                "شامل مهندسین ارتوپد فنی  که با بهره‌گیری از نتایج تحلیل‌های هوش مصنوعی و‌نظر کارشناسی فیزیوتراپیست های تیم ، کفی‌های  مخصوص پای شما را طراحی و تولید می‌کنند. استفاده از تکنولوژی‌های پیشرفته در این بخش به تضمین کیفیت و تطابق کفی‌ها با نیازهای فردی کمک می‌کند",
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
      <div className="flex justify-center w-full pb-5">
        <Image
          src={Fisiotrap}
          className="w-[300px] lg:w-[400px] rounded-lg"
          alt=""
        />
      </div>
    </TextFadeIn>
  );
}

function CardSlider() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-fit flex flex-row justify-center items-center">
        <Card
          title="تیم کارشناسان فنی"
          discription="فیزیوتراپیست های تیم که با بررسی دقیق و تحلیل علمی وضعیت پاهای شما، نیازهای خاص هر فرد را شناسایی و مشاوره‌های تخصصی ارائه می‌دهند. این تحلیل‌ها مبنای طراحی کفی‌های اختصاصی و بهینه برای هر فرد خواهد بود."
          src={Doctor}
          className="hidden z-0 lg:block translate-x-36 opacity-50"
        />
        <Card
          title="تیم نرم‌افزار و هوش مصنوعی"
          discription="قلب تپنده‌ی تکنولوژی پارس پا، این تیم با بهره‌گیری از  فناوری‌های هوش مصنوعی و توسعه نرم‌افزارهای پیشرفته، ابزارهایی دقیق و هوشمند را برای تشخیص و تحلیل مشکلات پا ارائه می‌دهد. اعضای این تیم با ترکیب دانش فنی و خلاقیت، راهکارهایی نوآورانه را طراحی کرده‌اند تا شما بتوانید از تجربه‌ای متفاوت و کارآمد در مراقبت از پاهای خود لذت ببرید.."
          src={Doctor}
          className="block z-10 scale-110 shadow-2xl shadow-primary700"
        />
        <Card
          title="تیم طراحی و تولید کفی کفش"
          discription="شامل مهندسین ارتوپد فنی  که با بهره‌گیری از نتایج تحلیل‌های هوش مصنوعی و‌نظر کارشناسی فیزیوتراپیست های تیم ، کفی‌های  مخصوص پای شما را طراحی و تولید می‌کنند. استفاده از تکنولوژی‌های پیشرفته در این بخش به تضمین کیفیت و تطابق کفی‌ها با نیازهای فردی کمک می‌کند."
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
