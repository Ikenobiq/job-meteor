import Switch from "react-switch";
import styles from "./Filters.module.scss";
import svg from "../../shared/images/sprite.svg";

const SummaryWithPhotoSelector = ({ checked, onChange }) => (
  <div className={styles.filtersPhotoDiv}>
    <p className={styles.filtersParagraph}>
      <svg className={styles.filtersSvg}>
        <use href={`${svg}#contactList`}></use>
      </svg>
      Только с фотографией
    </p>
    <Switch
      checked={checked}
      onChange={onChange}
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
);

export default SummaryWithPhotoSelector;
// https://github.com/markusenglund/react-switch#readme
