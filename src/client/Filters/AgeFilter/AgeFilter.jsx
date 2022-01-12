import styles from "../Filters.module.scss";
import RangeSelector from "../RangeSelector/RangeSelector";
const AgeFilter = () => {
  return (
    <div className={styles.filtersAgeDiv}>
      <h3 className={styles.filtersAgeHeading}>Возраст</h3>
      <RangeSelector
        rangeLabelAfter={"лет"}
        rangeLabelBefor={"от"}
        rangeInputBefor={"от"}
        rangeInputBetween={"до"}
        rangeInputAfter={"лет"}></RangeSelector>
    </div>
  );
};
export default AgeFilter;
