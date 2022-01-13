import styles from "./Chosen.module.scss";
import uber from "../../../shared/images/desktop/company/uber.png";
import aliexpress from "../../../shared/images/desktop/company/aliexpress.png";
import fedex from "../../../shared/images/desktop/company/fedex.png";
import godaddy from "../../../shared/images/desktop/company/godaddy.png";
import theheraldjournal from "../../../shared/images/desktop/company/theheraldjournal.png";
import slickdeals from "../../../shared/images/desktop/company/slickdeals.png";
import verizon from "../../../shared/images/desktop/company/verizon.png";
import yahoo from "../../../shared/images/desktop/company/yahoo.png";
import bankofamerica from "../../../shared/images/desktop/company/bankofamerica.png";
import cnn from "../../../shared/images/desktop/company/cnn.png";
import onlyfans from "../../../shared/images/desktop/company/onlyfans.png";
import netflix from "../../../shared/images/desktop/company/netflix.png";
const Chosen = () => {
  return (
    <div className={`${styles.chosen} ${"container"}`}>
      <h3 className={styles.heading}>Нас Выбрали</h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <img className={styles.img} src={uber} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={yahoo} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={godaddy} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={slickdeals} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={bankofamerica} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={cnn} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={fedex} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={theheraldjournal} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={aliexpress} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={verizon} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={onlyfans} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={netflix} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={uber} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={yahoo} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={godaddy} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={slickdeals} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={bankofamerica} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={cnn} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={fedex} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={theheraldjournal} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={aliexpress} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={verizon} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={onlyfans} alt=" logo" />
        </li>
        <li className={styles.item}>
          <img className={styles.img} src={netflix} alt=" logo" />
        </li>
      </ul>
    </div>
  );
};
export default Chosen;
