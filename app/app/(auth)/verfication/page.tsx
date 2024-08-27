import VerficationTitle from "@/components/pages/verfication/VerficationTitle";
import VerficationData from "@/components/pages/verfication/VerficatoinData";

const Verfication = () => {
  return (
    <div className="bg-bg-sec-color w-full h-[100vh] p-5 lg:p-0 ">
      <div className="flex flex-col-reverse justify-between items-center lg:flex-row h-full w-full bg-[#fff] rounded-2xl">
        <VerficationTitle />
        <VerficationData />
      </div>
    </div>
  );
};

export default Verfication;
