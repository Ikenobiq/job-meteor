import styles from "./SummariesExperience.module.scss";
const SummariesExperience = ({ experience }) => {
  const getTerm = () => {
    const from = new Date(experience.date_from);
    const to = new Date(experience.date_to);
    let year = to.getFullYear() - from.getFullYear();
    let month = to.getMonth() - from.getMonth();
    let day = to.getDay() - from.getDay();
    const monthInYear = year * 12;
    if (day < 0 || day === 0) {
      month--;
    }
    return month + monthInYear;
  };

  return (
    <li className={styles.item}>
      {experience.position} &#160;
      {experience.company_name} - {getTerm()}мес.
    </li>
  );
};
export default SummariesExperience;
