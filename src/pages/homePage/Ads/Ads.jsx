import astronaut from "../../../shared/images/mobile/astronaut.png";
import appstore from "../../../shared/images/mobile/appstore.png";
import googleplay from "../../../shared/images/mobile/googleplay.png";
import styles from "./Ads.module.scss";
const Ads = () => {
  return (
    <div className={`${styles.Ads} ${"container"}`}>
      <img className={styles.astronaut} src={astronaut} alt="kosmonaut" />
      <h3 className={styles.heading}>Скачай наше приложение</h3>
      <p className={styles.paragraph}>
        Работодатель смогут найти вас и предложить отличную работу.
      </p>
      <div className={styles.linkDiv}>
        <a className={styles.storeLink} href="/">
          <img className={styles.storeImg} src={appstore} alt="app store" />
        </a>
        <a className={styles.storeLink} href="/">
          <img className={styles.storeImg} src={googleplay} alt="google play" />
        </a>
      </div>
    </div>
  );
};
export default Ads;
