import styles from "./Advantages.module.scss";
const Advantages = () => {
  return (
    <div className="container">
      <div className={styles.advantages}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h3 className={styles.heading}>100 422</h3>
            <p className={styles.paragraph}>актуальных вакансий</p>
          </li>
          <li className={styles.item}>
            <h3 className={styles.heading}>100 422</h3>
            <p className={styles.paragraph}>актуальных вакансий</p>
          </li>
          <li className={styles.item}>
            <h3 className={styles.heading}>100 422</h3>
            <p className={styles.paragraph}>актуальных вакансий</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Advantages;
