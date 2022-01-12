import styles from "../Filters.module.scss";
import Button from "../../../shared/components/Button/Button";
const SexFilter = () => {
  return (
    <div className={styles.filtersSexDiv}>
      <h3 className={styles.filtersSexHeading}>Пол</h3>
      <ul className={styles.filtersSexList}>
        <li className={styles.filtersSexItem}>
          <Button
            className={styles.filtersSexBtn}
            type={"button"}
            text={"Любой"}
          />
        </li>
        <li className={styles.filtersSexItem}>
          <Button
            className={styles.filtersSexBtn}
            type={"button"}
            text={"Женщины"}
          />
        </li>
        <li className={styles.filtersSexItem}>
          <Button
            className={styles.filtersSexBtn}
            type={"button"}
            text={"Мужчины"}
          />
        </li>
      </ul>
    </div>
  );
};
export default SexFilter;
