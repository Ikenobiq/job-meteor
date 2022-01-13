import Header from "../../client/Header";
import AddVacation from "./AddVacation/AddVacation";
import Advantages from "./Advantages/Advantages";
import ChosenMobile from "./Chosen/ChosenMobile";
import Hero from "./Hero/Hero";
import Blog from "./Blog/Blog";
import Ads from "./Ads/Ads";
import Footer from "../../client/Footer/Footer";
import Chosen from "./Chosen/Chosen";
import useMedia from "../../client/useMedia";

const HomePage = () => {
  const { isMobile } = useMedia();
  return (
    <main>
      <Header burger={true} />
      <Hero />
      <Advantages />
      {isMobile ? <ChosenMobile /> : <Chosen />}
      <AddVacation />
      <Blog />
      <Ads />
      <Footer />
    </main>
  );
};
export default HomePage;
