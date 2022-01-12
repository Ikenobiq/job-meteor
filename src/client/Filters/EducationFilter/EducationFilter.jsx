import styles from "../Filters.module.scss";
import SelectString from "../SelectString/SelectString";
const EducationFilter = () => {
  return (
    <div className={styles.filtersJobExperienceDiv}>
      <h3 className={styles.filtersJobExperienceHeading}>Тип занятости</h3>
      <div className={styles.filtersJobExperienceInputDiv}>
        <ul className={styles.filtersJobExperienceInputList}>
          <SelectString
            text="Высшее"
            id="higherEducation"
            value="34567"
            color="Yellow"
          />
          <SelectString
            text="Неоконченное высшее"
            id="incomplete"
            value="603"
            color="Yellow"
          />
          <SelectString
            text="Средне-специальное"
            id="secondarySpecial"
            value="603"
            color="Yellow"
          />
          <SelectString
            text="Средне"
            id="secondaryEducation"
            value="603"
            color="Yellow"
          />
        </ul>
      </div>
    </div>
  );
};
export default EducationFilter;
