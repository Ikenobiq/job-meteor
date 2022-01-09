import Button from "../../shared/components/Button/Button";
import TextField from "../../shared/components/TextField/TextField";
import styles from "./SearchMainSection.module.scss";
import svg from "../../shared/images/sprite.svg";
const SearchMainSection = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.searchDiv}>
        <TextField className={styles.inputSearch} placeholder="Поиск" />
        <svg className={styles.svgZoom}>
          <use className={styles.zoom} href={`${svg}#zoom`}></use>
        </svg>
      </div>
      <div className={styles.cityDiv}>
        <TextField className={styles.inputCity} placeholder="Город" />
        <svg className={styles.svgPoint}>
          <use className={styles.point} href={`${svg}#point`}></use>
        </svg>
      </div>
      <Button className={styles.searchBtn} text="Найти кандидатов" />
    </div>
  );
};
export default SearchMainSection;
