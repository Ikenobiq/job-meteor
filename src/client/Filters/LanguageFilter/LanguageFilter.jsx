import styles from "../Filters.module.scss";
import SelectString from "../SelectString/SelectString";
import unitedKingdom from "../../../shared/images/countries/unitedKingdom.png";
import russia from "../../../shared/images/countries/russia.png";
import ukraine from "../../../shared/images/countries/ukraine.png";
import germany from "../../../shared/images/countries/germany.png";
import poland from "../../../shared/images/countries/poland.png";
import spain from "../../../shared/images/countries/spain.png";
import svg from "../../../shared/images/sprite.svg";
const LanguageFilter = () => {
  return (
    <div className={styles.filtersJobExperienceDiv}>
      <h3 className={styles.filtersJobExperienceHeading}>Владение языками</h3>
      <div className={styles.filtersJobExperienceInputDiv}>
        <ul className={styles.filtersJobExperienceInputList}>
          <SelectString
            img={
              <img
                className={styles.filtersImg}
                src={unitedKingdom}
                alt="United Kingdom flag"
              />
            }
            text="Английский"
            id="english"
            value="603"
            svgType={
              <svg className={styles.filtersCheckboxSvg}>
                <use href={`${svg}#arrowDown`}></use>
              </svg>
            }
          />
          <SelectString
            img={
              <img
                className={styles.filtersImg}
                src={russia}
                alt="Russia flag"
              />
            }
            text="Русский"
            id="russia"
            value="603"
            svgType={
              <svg className={styles.filtersCheckboxSvg}>
                <use href={`${svg}#arrowDown`}></use>
              </svg>
            }
          />
          <SelectString
            img={
              <img
                className={styles.filtersImg}
                src={ukraine}
                alt="Ukraine flag"
              />
            }
            text="Украинский"
            id="ukraine"
            value="603"
            svgType={
              <svg className={styles.filtersCheckboxSvg}>
                <use href={`${svg}#arrowDown`}></use>
              </svg>
            }
          />
          <SelectString
            img={
              <img
                className={styles.filtersImg}
                src={germany}
                alt="Germany flag"
              />
            }
            text="Немецкий"
            id="germany"
            value="603"
            svgType={
              <svg className={styles.filtersCheckboxSvg}>
                <use href={`${svg}#arrowDown`}></use>
              </svg>
            }
          />
          <SelectString
            img={
              <img
                className={styles.filtersImg}
                src={poland}
                alt="Poland flag"
              />
            }
            text="Польский"
            id="poland"
            value="603"
            svgType={
              <svg className={styles.filtersCheckboxSvg}>
                <use href={`${svg}#arrowDown`}></use>
              </svg>
            }
          />
          <SelectString
            img={
              <img className={styles.filtersImg} src={spain} alt="Spain flag" />
            }
            text="Испанский"
            id="spain"
            value="603"
            svgType={
              <svg className={styles.filtersCheckboxSvg}>
                <use href={`${svg}#arrowDown`}></use>
              </svg>
            }
          />
        </ul>
      </div>
    </div>
  );
};
export default LanguageFilter;
