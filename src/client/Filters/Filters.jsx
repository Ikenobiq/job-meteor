import styles from "./Filters.module.scss";
import SummaryWithPhotoSelector from "./SummaryWithPhotoSelector";
import AgeFilter from "./AgeFilter/AgeFilter";
import SexFilter from "./SexFilter/SexFilter";
import SalaryFilter from "./SalaryFilter/SalaryFilter";
import JobExperienceFilter from "./JobExperienceFilter/JobExperienceFilter";
import LanguageFilter from "./LanguageFilter/LanguageFilter";
import TypeOfEmployment from "./TypeOfEmployment/TypeOfEmployment";
import EducationFilter from "./EducationFilter/EducationFilter";

const Filters = ({ withPhoto, onWithPhotoChange }) => {
  return (
    <div className={styles.filters}>
      <div className={styles.filtersHeadingDiv}>
        <h2 className={styles.filtersHeading}>Фильтры</h2>
      </div>
      <div className={styles.filtersMainDiv}>
        <SummaryWithPhotoSelector
          checked={withPhoto}
          onChange={(checked) => {
            onWithPhotoChange(checked);
          }}
        />
        <AgeFilter />
        <SexFilter />
        <SalaryFilter />
        <JobExperienceFilter />
        <LanguageFilter />
        <TypeOfEmployment />
        <EducationFilter />
      </div>
    </div>
  );
};
export default Filters;