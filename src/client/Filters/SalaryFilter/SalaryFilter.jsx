import styles from "../Filters.module.scss";
import RangeSelector from "../RangeSelector/RangeSelector";
import Switch from "react-switch";
const SalaryFilter = () => {
  return (
    <div className={styles.filtersSalaryDiv}>
      <h3 className={styles.filtersSalaryHeading}>
        Желаемая зарплата в гривне
      </h3>
      <RangeSelector
        rangeLabelAfter={"лет"}
        rangeLabelBefor={"от"}
        rangeInputBefor={"от"}
        rangeInputBetween={"до"}
        rangeInputAfter={"грн"}></RangeSelector>
      <div className={styles.filtersSwitchWrap}>
        <p className={styles.filtersParagraph}>Не показывать без зарплаты</p>
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
    </div>
  );
};
export default SalaryFilter;
