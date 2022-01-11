import { useEffect, useState } from "react";
import { fetchSummaries } from "../../fetch/fecth";
import SummariesList from "./SummariesList/SummariesList";
import styles from "./Summaries.module.scss";

const CV = () => {
  const [summaries, setSummaries] = useState([]);
  useEffect(() => {
    const getSummaries = async () => {
      try {
        const result = await fetchSummaries();
        setSummaries(result);
      } catch (error) {}
    };
    getSummaries();
  }, []);
  return (
    <div className={`${styles.cv} ${"container"}`}>
      <SummariesList summaries={summaries} />
    </div>
  );
};
export default CV;
