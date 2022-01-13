import astronaut from "../../../shared/images/mobile/astronaut.png";
import appstore from "../../../shared/images/mobile/appstore.png";
import googleplay from "../../../shared/images/mobile/googleplay.png";
import phons from "../../../shared/images/desktop/phons.png";
import styles from "./Ads.module.scss";
import useMedia from "../../../client/useMedia";
const Ads = () => {
  const { isMobile } = useMedia();
  return (
    <div className={styles.AdsBack}>
      <div className={`${styles.Ads} ${"container"}`}>
        <img
          className={styles.astronaut}
          src={isMobile ? astronaut : phons}
          alt="kosmonaut"
        />
        <div className={styles.adsWraper}>
          <h3 className={styles.heading}>Скачай наше приложение</h3>
          <p className={styles.paragraph}>
            Работодатель смогут найти вас и предложить отличную работу.
          </p>
        </div>
        <div className={styles.linkDiv}>
          <a className={styles.storeLink} href="/">
            <img className={styles.storeImg} src={appstore} alt="app store" />
          </a>
          <a className={styles.storeLink} href="/">
            <img
              className={styles.storeImg}
              src={googleplay}
              alt="google play"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Ads;
