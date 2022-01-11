import SummariesExperience from "../SummariesExperience/SummariesExperience";
import svg from "../../../shared/images/sprite.svg";
import styles from "./SummariesItem.module.scss";
const SummariesItem = ({ summarie }) => {
  const {
    desiredposition,
    first_name,
    work_city,
    birthday,
    workexperience,
    photo,
    updated_at,
  } = summarie;

  const position = desiredposition
    .flatMap((desiredpositions) => desiredpositions.position)
    .join(",")
    .split(",")
    .slice(0, 1);

  const getAge = () => {
    const today = new Date();
    const born = new Date(birthday);
    let year = today.getFullYear() - born.getFullYear();
    let month = today.getMonth() - born.getMonth();
    let day = today.getDay() - born.getDay();
    if (month < 0 || (month === 0 && day < 0)) {
      year--;
    }
    return year;
  };
  const declination = () => {
    const age = getAge();
    const titles = ["год", "года", "лет"];
    const cases = [2, 0, 1, 1, 1, 2];
    return (
      age +
      " " +
      titles[
        age % 100 > 4 && age % 100 < 20 ? 2 : cases[age % 10 < 5 ? age % 10 : 5]
      ]
    );
  };
  const name = () => {
    const name = "Имя не указано";
    if (typeof first_name === "undefined" || first_name.length === 0) {
      return name;
    } else {
      return first_name + ",";
    }
  };
  const city = () => {
    const city = "Город не указан >_<";
    if (work_city.length === 0) {
      return city;
    }
  };

  return (
    <>
      <li className={styles.item}>
        <div className={styles.avatarDiv}>
          <img className={styles.avatar} src={photo} alt="avatar" />
        </div>
        <div className={styles.describe}>
          <h3 className={styles.describeHeading}>{position}</h3>
          <p className={styles.describeParagraph}>
            {name()} {declination()}
          </p>
          <p className={styles.describeCity}>
            <svg className={styles.svgPoint}>
              <use className={styles.point} href={`${svg}#point`}></use>
            </svg>
            {city()}
          </p>
        </div>
        <div className={styles.experience}>
          <ul className={styles.experienceList}>
            {workexperience.map((experience) => (
              <SummariesExperience
                key={experience.id}
                experience={experience}
              />
            ))}
          </ul>
        </div>
        <div className={styles.isOnline}>
          <p className={styles.isOnlineP}>online</p>
        </div>
        <div className={styles.status}>
          <p className={styles.statusP}>Обновлено {updated_at}</p>
          <div className={styles.statusSvgDiv}>
            <svg className={styles.statusHeart}>
              <use href={`${svg}#heart`}></use>
            </svg>
            <svg className={styles.statusMore}>
              <use href={`${svg}#more`}></use>
            </svg>
          </div>
        </div>
      </li>
    </>
  );
};
export default SummariesItem;
