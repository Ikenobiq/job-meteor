import { useEffect, useState } from "react";
import { fetchSummaries } from "../../fetch/fecth";
import SummariesList from "./SummariesList";

const CV = () => {
  const [summaries, setSummaries] = useState([]);
  useEffect(() => {
    const getSummaries = async () => {
      try {
        const result = await fetchSummaries();
        console.log(result);
        setSummaries(result);
      } catch (error) {}
    };
    getSummaries();
  }, []);
  return (
    <div>
      <SummariesList summaries={summaries} />
    </div>
  );
};
export default CV;
