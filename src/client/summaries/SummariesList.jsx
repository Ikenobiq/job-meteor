import SummariesItem from "./SummariesItem";
const SummariesList = (summaries) => {
  console.log(summaries);
  return (
    <ul>
      {summaries.map((summarie) => (
        <SummariesItem key={summarie.id} trends={summarie} />
      ))}
    </ul>
  );
};
export default SummariesList;
