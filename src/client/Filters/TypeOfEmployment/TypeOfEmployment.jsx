import styles from "../Filters.module.scss";
import SelectString from "../SelectString/SelectString";
const TypeOfEmployment = () => {
  return (
    <div className={styles.filtersJobExperienceDiv}>
      <h3 className={styles.filtersJobExperienceHeading}>Тип занятости</h3>
      <div className={styles.filtersJobExperienceInputDiv}>
        <ul className={styles.filtersJobExperienceInputList}>
          <SelectString
            text="Полная занятость"
            id="full"
            value="34567"
            color="Yellow"
          />
          <SelectString
            text="Неполная занятость"
            id="Underemployment"
            value="603"
            color="Yellow"
          />
          <SelectString
            text="Удаленная работа"
            id="RemoteWork"
            value="603"
            color="Yellow"
          />
        </ul>
      </div>
    </div>
  );
};
export default TypeOfEmployment;
