import Button from "../../../shared/components/Button/Button";
import cosmonautmob from "../../../shared/images/mobile/cosmonautmob.png";
import styles from "./AddVacation.module.scss";
const AddVacation = () => {
  return (
    <div className={`${styles.AddVacation} ${"container"}`}>
      <img className={styles.img} src={cosmonautmob} alt="cosmonaut img" />
      <h3 className={styles.heading}>разместить вакансию</h3>
      <p className={styles.paragraph}>
        Работодатель смогут найти вас и предложить отличную работу.
      </p>
      <Button className={styles.addBtn} text="разместить вакансию" />
    </div>
  );
};
export default AddVacation;
