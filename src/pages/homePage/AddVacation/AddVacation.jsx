import Button from "../../../shared/components/Button/Button";
import cosmonaut from "../../../shared/images/desktop/cosmonaut.png";
import styles from "./AddVacation.module.scss";
const AddVacation = () => {
  return (
    <div className={styles.AddVacationBack}>
      <div className={`${styles.AddVacation} ${"container"}`}>
        <div className={styles.AddVacationWrap}>
          <img className={styles.img} src={cosmonaut} alt="cosmonaut img" />
          <div className={styles.AddVacationTextWrap}>
            <h3 className={styles.heading}>разместить вакансию</h3>
            <p className={styles.paragraph}>
              Работодатель смогут найти вас и предложить отличную работу.
            </p>
          </div>
          <Button className={styles.addBtn} text="разместить вакансию" />
        </div>
      </div>
    </div>
  );
};
export default AddVacation;
