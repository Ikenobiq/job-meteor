import ubermob from "../../../shared/images/mobile/company/ubermob.png";
import alimob from "../../../shared/images/mobile/company/alimob.png";
import fedexmob from "../../../shared/images/mobile/company/fedexmob.png";
import godaddymob from "../../../shared/images/mobile/company/godaddymob.png";
import hjnewsmob from "../../../shared/images/mobile/company/hjnewsmob.png";
import slickdealsmob from "../../../shared/images/mobile/company/slickdealsmob.png";
import xzmob from "../../../shared/images/mobile/company/xzmob.png";
import yahoomob from "../../../shared/images/mobile/company/yahoomob.png";

const Chosen = () => {
  return (
    <div>
      <h3>Нас Выбрали</h3>
      <ul>
        <li>
          <img src={ubermob} alt="Uber logo" />
        </li>
        <li>
          <img src={yahoomob} alt="Uber logo" />
        </li>
        <li>
          <img src={godaddymob} alt="Uber logo" />
        </li>
        <li>
          <img src={slickdealsmob} alt="Uber logo" />
        </li>
        <li>
          <img src={fedexmob} alt="Uber logo" />
        </li>
        <li>
          <img src={hjnewsmob} alt="Uber logo" />
        </li>
        <li>
          <img src={alimob} alt="Uber logo" />
        </li>
        <li>
          <img src={xzmob} alt="Uber logo" />
        </li>
      </ul>
    </div>
  );
};
export default Chosen;
