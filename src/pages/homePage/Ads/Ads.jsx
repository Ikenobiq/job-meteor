import astronaut from "../../../shared/images/mobile/astronaut.jpg";
import appstore from "../../../shared/images/mobile/appstore.png";
import googleplay from "../../../shared/images/mobile/googleplay.png";

const Ads = () => {
  return (
    <div>
      <img src={astronaut} alt="kosmonaut" />
      <p>Скачай наше приложение</p>
      <p>Работодатель смогут найти вас и предложить отличную работу.</p>
      <a>
        <img src={appstore} alt="app store" />
      </a>
      <a>
        <img src={googleplay} alt="google play" />
      </a>
    </div>
  );
};
export default Ads;
