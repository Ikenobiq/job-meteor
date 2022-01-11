import SummariesItem from "../SummariesItem/SummariesItem";
import styles from "./SummariesList.module.scss";
const SummariesList = ({ summaries }) => {
  return (
    <ul className={styles.list}>
      {summaries.map((summarie) => (
        <SummariesItem key={summarie.id} summarie={summarie} />
      ))}
    </ul>
  );
};
export default SummariesList;
