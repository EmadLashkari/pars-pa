import Contacts from "../Contacts";
import DownloadApp from "../DownloadApp";
import Features from "../Features";
import FootAnalise from "../FootAnalise";
import Footer from "../Footer";
import OrProduct from "../OrProduct";
import OrTeam from "../OrTeam";
import Testminials from "../Testminials";
import Header from "./Header";
import HeroBanner from "./HeroBanner";

const Main = () => {
  return (
    <div className="w-full flex flex-col overflow-hidden justify-between items-center h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white to-primary300">
      <Header />
      <HeroBanner />
      <FootAnalise />
      <DownloadApp />
      <OrProduct />
      <OrTeam />
      <Testminials />
      <Features />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Main;
