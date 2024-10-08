import Shous from "@/public/image/shoes.png";
import Image from "next/image";
import HoverScale from "../animations/CardScale";
import TextFadeIn from "../animations/TextFade";
import feet2 from "@/public/image/feet2.png";

const OrProduct = () => {
  return (
    <div
      id="our-product"
      dir="rtl"
      className="w-full bg-white py-20 flex flex-col "
    >
      <TextFadeIn>
        <div className="flex flex-col lg:justify-center lg:items-start lg:pr-10 gap-5 mb-10">
          <h2 className="text-black-bold text-[24px] font-bold text-center">
            کفی پارس پا
          </h2>
          <p className="text-black-bold text-center">
            مزیت های استفاده از کفی پارس پا
          </p>
        </div>
      </TextFadeIn>
      <div className="flex flex-col lg:flex-row justify-around items-center">
        <div className="my-5 lg:mt-20 flex flex-row justify-center items-center">
          <Image src={Shous} alt="" className="w-[80%] lg:w-[500px] " />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center gap-5">
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
      <div className="flex flex-col lg:flex-row-reverse justify-around items-center lg:pt-8">
        <div className="my-5 lg:mt-20 flex flex-row justify-center items-center">
          <Image src={feet2} alt="" className="w-[80%] lg:w-[500px]" />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center gap-5">
          <Card
            text={
              " کفی‌های پارس پا برای زانوهای ضربدری و پرانتزی به‌طور ویژه طراحی میشوند تا با بهبود تراز پا و تنظیم صحیح قوس‌ها، فشار را به‌طور یکنواخت توزیع کنند و از انحراف‌های غیرطبیعی زانو جلوگیری کنند. این کفی‌ها به اصلاح الگوی حرکت و کاهش فشار اضافی بر زانوها کمک کرده و به بهبود وضعیت و کاهش درد ناشی از این اختلالات می‌پردازند."
            }
            index="05"
          />

          <Card
            text={
              " کفی‌های پارس پا برای پیچ خوردگی مکرر پا طراحی میشوند تا با فراهم کردن حمایت اضافی و ثبات بهتر، از حرکت‌های ناگهانی و غیرطبیعی پا جلوگیری کنند. این کفی‌ها با بهبود تراز پا و جذب ضربه‌های ناشی از حرکت، به کاهش خطر پیچ خوردگی و آسیب‌های مربوطه کمک کرده و به افزایش امنیت و راحتی در فعالیت‌های روزانه می‌پردازند."
            }
            index="06"
          />
          <Card
            text={
              "کفی‌های پارس پا برای کمر درد پا طراحی میشوند تا با بهبود تراز و توزیع یکنواخت فشار بر روی کف پا، به کاهش فشار اضافی بر ستون فقرات کمک کنند. این کفی‌ها با فراهم کردن حمایت مناسب و جذب ضربه، به تسکین درد کمر و افزایش راحتی در هنگام راه رفتن و ایستادن می‌پردازند، که به بهبود وضعیت کلی بدن و کاهش مشکلات ناشی از کمر درد کمک می‌کند."
            }
            index="07"
          />
        </div>
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
