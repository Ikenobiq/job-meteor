import Button from "../../shared/components/Button/Button";
import TextField from "../../shared/components/TextField/TextField";
import styles from "./SearchMainSection.module.scss";
import svg from "../../shared/images/sprite.svg";
import useMedia from "../../client/useMedia";
const SearchMainSection = ({ variant }) => {
  const { isMobile } = useMedia();
  return (
    <div className={styles.mainDiv}>
      <div className={styles.searchDiv}>
        <TextField
          className={styles.inputSearch}
          placeholder={
            isMobile ? "Поиск" : "На какую должность вы ищете кандидата?"
          }
        />
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
      <a href="./find">
        <Button
          className={styles.searchBtn}
          variant={variant}
          text="Найти кандидатов"
        />
      </a>
    </div>
  );
};
export default SearchMainSection;
