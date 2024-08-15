import DownloadApp from "../DownloadApp";
import FootAnalise from "../FootAnalise";
import OrProduct from "../OrProduct";
import Header from "./Header";
import HeroBanner from "./HeroBanner";

const Main = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white to-primary300">
      <Header />
      <HeroBanner />
      <FootAnalise />
      <DownloadApp />
      <OrProduct />
    </div>
  );
};

export default Main;
