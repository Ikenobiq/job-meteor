import SearchMainSection from "../../../client/SearchMainSection/SearchMainSection";
import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <div className={`${styles.heroBack} ${"container"}`}>
      <div className={styles.hero}>
        <p className={styles.paragraph}>сайт по поиску работы №1</p>
        <h1 className={styles.title}>Please enter the vacancy and the city</h1>
        <SearchMainSection variant={"primary"} />
      </div>
    </div>
  );
};
export default Hero;
