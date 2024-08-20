import Shous from "@/public/image/shoes.svg";
import Image from "next/image";
import HoverScale from "../animations/CardScale";
import TextFadeIn from "../animations/TextFade";

const exampleText =
  "Custom Design Based on Your Needs Our orthopedic insoles are individually ";

const OrProduct = () => {
  return (
    <div
      id="our-product"
      dir="rtl"
      className="w-full bg-white py-20 flex flex-col lg:flex-row lg:justify-around lg:items-baseline"
    >
      <TextFadeIn>
        <div className="flex flex-col lg:justify-center lg:items-start gap-5 mb-10">
          <h2 className="text-black-bold text-[24px] font-bold text-center">
            کفی پارس پا
          </h2>
          <p className="text-black-bold text-center">
            میدونی کفی پارس پا پا مشکلاتی را پوشش میدهد؟
          </p>
          <div className="mt-5 lg:mt-20 flex flex-row justify-center items-center">
            <Image src={Shous} alt="" />
          </div>
        </div>
      </TextFadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center gap-5">
        <Card
          text={
            "کفی‌های پارس پا برای صافی کف پا با ایجاد قوس مناسب، فشار را به‌ طور یکنواخت توزیع کرده و از درد و خستگی ناشی از صافی کف پا جلوگیری می‌کنند. این کفی‌ها به بهبود تراز بدن، کاهش فشار روی زانوها و کمر، و پیشگیری از مشکلات جدی‌تر مانند التهاب فاشیا کمک می‌کنند و راحتی بیشتری در فعالیت‌های روزانه فراهم می‌سازند."
          }
          index="01"
        />

        <Card
          text={
            " کفی‌های پارس پا برای خارپاشنه به‌طور ویژه طراحی میشوند تا با توزیع یکنواخت فشار و ایجاد حمایت مناسب از قوس پا، درد و التهاب ناشی از خارپاشنه را کاهش دهند. این کفی‌ها با کاهش فشار روی پاشنه و بهبود تراز پاها، به بهبود راحتی در هنگام راه رفتن و ایستادن کمک کرده و روند بهبودی را تسریع می‌کنند."
          }
          index="02"
        />
        <Card
          text={
            "کفی‌های پارس پا برای خستگی زودرس طراحی میشوند تا با بهبود تراز پا و توزیع یکنواخت فشار در سراسر کف پا، از ایجاد فشار بیش‌ازحد بر عضلات و مفاصل جلوگیری کنند. این کفی‌ها با حمایت مناسب از قوس پا و جذب ضربه‌های ناشی از راه رفتن، به کاهش خستگی و افزایش راحتی در طول روز کمک می‌کنند، و انرژی بیشتری برای فعالیت‌های روزانه فراهم می‌سازند."
          }
          index="03"
        />
        <Card
          text={
            "کفی‌های پارس پا برای هالوس والگوس (انحراف شست پا) طراحی میشوند تا با فراهم کردن حمایت مناسب و تصحیح تراز پا، فشار و اصطکاک بر روی انگشت شست را کاهش دهند. این کفی‌ها به توزیع یکنواخت فشار در کف پا کمک کرده و از انحراف بیشتر انگشت شست جلوگیری می‌کنند، که به کاهش درد و بهبود راحتی در هنگام راه رفتن و ایستادن کمک می‌کند."
          }
          index="04"
        />
      </div>
    </div>
  );
};

export default OrProduct;

function Card({ text, index }: { text: string; index: string }) {
  return (
    <HoverScale>
      <p className="text-black-bold text-[14px]">{text}</p>
      <span className="text-bg-sec-color text-[81px]">{index}</span>
    </HoverScale>
  );
}
