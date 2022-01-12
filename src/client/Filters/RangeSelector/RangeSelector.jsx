import TextField from "../../../shared/components/TextField";
import styles from "./RangeSelector.module.scss";
import { Range } from "rc-slider";
import "../../../shared/styles/rc-slider/index.css";

const RangeSelector = ({
  rangeLabelBefor,
  rangeLabelAfter,
  rangeInputBefor,
  rangeInputAfter,
  rangeInputBetween,
}) => {
  return (
    <div className={styles.RangeSelector}>
      <div className={styles.RangeWrap}>
        <p className={styles.rangeLabelBefor}>{rangeLabelBefor}</p>
        <div className={styles.RangeDiv}>
          <Range
            min={0}
            max={100}
            defaultValue={[10, 90]}
            tipFormatter={(value) => `${value}%`}
          />
        </div>
        <p className={styles.rangeLabelAfter}>{rangeLabelAfter}</p>
      </div>
      <div className={styles.RangeInputWrap}>
        <div className={styles.RangeInputDiv}>
          <p className={styles.rangeInputBefor}>{rangeInputBefor}</p>
          <input className={styles.rengeInput} />
        </div>
        <p className={styles.rangeInputBetween}>{rangeInputBetween}</p>
        <div className={styles.RangeInputDiv}>
          <input className={styles.rengeInput} />
          <p className={styles.rangeInputAfter}>{rangeInputAfter}</p>
        </div>
      </div>
    </div>
  );
};
export default RangeSelector;
