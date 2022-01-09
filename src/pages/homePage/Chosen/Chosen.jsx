import ubermob from "../../../shared/images/mobile/company/ubermob.png";
import alimob from "../../../shared/images/mobile/company/alimob.png";
import fedexmob from "../../../shared/images/mobile/company/fedexmob.png";
import godaddymob from "../../../shared/images/mobile/company/godaddymob.png";
import hjnewsmob from "../../../shared/images/mobile/company/hjnewsmob.png";
import slickdealsmob from "../../../shared/images/mobile/company/slickdealsmob.png";
import xzmob from "../../../shared/images/mobile/company/xzmob.png";
import yahoomob from "../../../shared/images/mobile/company/yahoomob.png";
import styles from "./Chosen.module.scss";
const Chosen = () => {
  return (
    <div className={`${styles.chosen} ${"container"}`}>
      <h3 className={styles.heading}>Нас Выбрали</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <img className={styles.img} src={ubermob} alt="Uber logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={yahoomob} alt="Uber logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={godaddymob} alt="Uber logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={slickdealsmob} alt="Uber logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={fedexmob} alt="Uber logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={hjnewsmob} alt="Uber logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={alimob} alt="Uber logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={xzmob} alt="Uber logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={ubermob} alt="Uber logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={yahoomob} alt="Uber logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={godaddymob} alt="Uber logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={slickdealsmob} alt="Uber logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={fedexmob} alt="Uber logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={hjnewsmob} alt="Uber logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={alimob} alt="Uber logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={xzmob} alt="Uber logo" />
        </li>
      </ul>
    </div>
  );
};
export default Chosen;
