import styles from "../Filters.module.scss";
import Switch from "react-switch";
import svg from "../../../shared/images/sprite.svg";
import SelectString from "../SelectString/SelectString";
const JobExperienceFilter = () => {
  return (
    <div className={styles.filtersJobExperienceDiv}>
      <h3 className={styles.filtersJobExperienceHeading}>Опыт работы </h3>
      <div className={styles.filtersJobExperienceInputDiv}>
        <ul className={styles.filtersJobExperienceInputList}>
          <SelectString text="Без опыта" id="unemployed" value="603" />
          <SelectString text="До 1 года" id="lessThanAYear" value="603" />
          <SelectString
            text="От 1 до 2 лет"
            id="fromОneToTwoYears"
            value="603"
          />
          <SelectString
            text="От 2 до 5 лет"
            id="fromTwoToFiveYears"
            value="603"
          />
          <SelectString
            text="От 5 до 10 лет"
            id="fromFiveToTenYears"
            value="603"
          />
          <SelectString text="Более 10 лет" id="moreThanTen" value="603" />
          <div className={styles.filtersSwitchWrap}>
            <p className={styles.filtersParagraph}>
              <svg className={styles.filtersSvg}>
                <use href={`${svg}#education`}></use>
              </svg>
              Только студенты
            </p>
            <Switch
              onColor="#EAEAEA"
              offColor="#EAEAEA"
              onHandleColor="#851fff"
              offHandleColor="#5b5b5b"
              handleDiameter={12}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
              height={10}
              width={27}
              className="react-switch"
              id="material-switch"
            />
          </div>
        </ul>
      </div>
    </div>
  );
};
export default JobExperienceFilter;
