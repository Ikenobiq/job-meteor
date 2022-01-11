import styles from "./Filters.module.scss";
import svg from "../../shared/images/sprite.svg";
const Filters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.filtersHeadingDiv}>
        <h2 className={styles.filtersHeading}>Фильтры</h2>
      </div>
      <div className={styles.filtersPhotoDiv}>
        <p className={styles.filtersPhotoParagraph}>
          <svg className={styles.filtersPhotoSvg}>
            <use href={`${svg}#contactList`}></use>
          </svg>
          Только с фотографией
        </p>
      </div>
      <div className={styles.filtersAgeDiv}>
        <h3 className={styles.filtersAgeHeading}>Возраст</h3>
      </div>
      <div className={styles.filtersSexDiv}>
        <h3 className={styles.filtersSexHeading}>Пол</h3>
      </div>
      <div className={styles.filtersSalaryDiv}>
        <h3 className={styles.filtersSalaryHeading}>
          Желаемая зарплата в гривне
        </h3>
        <p className={styles.filtersSalaryParagraph}>
          Не показывать без зарплаты
        </p>
      </div>
    </div>
  );
};
export default Filters;
