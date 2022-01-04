// import styles from "./HomePage.module.scss";
import Header from "../../client/Header";
import SearchMainSection from "../../client/SearchMainSection";
import AddVacation from "./AddVacation/AddVacation";
import Advantages from "./Advantages/Advantages";
import Chosen from "./Chosen/Chosen";
import Hero from "./Hero/Hero";
import Blog from "./Blog/Blog";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <SearchMainSection />
      <Advantages />
      <Chosen />
      <AddVacation />
      <Blog />
      <p>dawdaw</p>
    </>
  );
};
export default HomePage;
