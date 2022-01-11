// import styles from "./HomePage.module.scss";
import Header from "../../client/Header";
import AddVacation from "./AddVacation/AddVacation";
import Advantages from "./Advantages/Advantages";
import Chosen from "./Chosen/Chosen";
import Hero from "./Hero/Hero";
import Blog from "./Blog/Blog";
import Ads from "./Ads/Ads";
import Footer from "../../client/Footer/Footer";

const HomePage = () => {
  return (
    <main>
      <Header burger={true} />
      <Hero />
      <Advantages />
      <Chosen />
      <AddVacation />
      <Blog />
      <Ads />
      <Footer />
    </main>
  );
};
export default HomePage;
