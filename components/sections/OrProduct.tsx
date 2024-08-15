import Shous from "@/public/image/shoes.svg";
import Image from "next/image";

const exampleText =
  "Custom Design Based on Your Needs Our orthopedic insoles are individually ";

const OrProduct = () => {
  return (
    <div className="w-full bg-white py-20 flex flex-col lg:flex-row lg:justify-around lg:items-baseline">
      <div className="flex flex-col lg:justify-center lg:items-start gap-5 mb-10">
        <h2 className="text-black-bold text-[24px] font-bold text-center">
          Our Product
        </h2>
        <p className="text-black-bold text-center">
          Custom Design Based on Your Needs
        </p>
        <div className="mt-5 lg:mt-20 flex flex-row justify-center items-center">
          <Image src={Shous} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center justify-items-center gap-5">
        <Card text={exampleText} index="01" />
        <Card text={exampleText} index="02" />
        <Card text={exampleText} index="03" />
        <Card text={exampleText} index="04" />
      </div>
    </div>
  );
};

export default OrProduct;

function Card({ text, index }: { text: string; index: string }) {
  return (
    <div className="w-[20rem] border-bg-sec-color  bg-white shadow-bg-sec-color shadow-2xl px-10 pt-10 rounded-2xl flex flex-col justify-center items-end gap-3">
      <p className="text-black-bold">{text}</p>
      <span className="text-bg-sec-color text-[81px]">{index}</span>
    </div>
  );
}
