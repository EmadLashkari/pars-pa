import DownloadApp from "../DownloadApp";
import FootAnalise from "../FootAnalise";
import Header from "./Header";
import HeroBanner from "./HeroBanner";

const Main = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white to-primary300">
      <Header />
      <HeroBanner />
      <FootAnalise />
      <DownloadApp />
    </div>
  );
};

export default Main;
