import PropTypes from "prop-types";
import svg from "../../../shared/images/sprite.svg";
import styles from "../Filters.module.scss";
const SelectString = ({ color, img, text, id, value, svgType }) => {
  return (
    <>
      <li className={styles.filtersJobExperienceInputItem}>
        <div className={`${styles.filtersJobExperienceCheckbox} ${color}`}>
          <input
            id={id}
            className={`${styles.filtersCheckbox} ${color}`}
            type="checkbox"
            required
          />
          <label for={id} className={styles.filtersJobExperienceLabel}>
            <span className={styles.filtersStringWrap}>
              <p className={styles.filtersParagraph}>
                {img}
                {text}
              </p>
              <p className={styles.filtersParagraphSecond}>
                {value}
                {svgType}
              </p>
            </span>
          </label>
        </div>
      </li>
    </>
  );
};
export default SelectString;
SelectString.defaultProps = {
  color: "",
  img: "",
};
SelectString.prototype = {
  color: PropTypes.oneOf(["", "Yellow"]),
  text: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.number,
};
