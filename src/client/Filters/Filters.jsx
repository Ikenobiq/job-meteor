import styles from "./Filters.module.scss";
import SummaryWithPhotoSelector from "./SummaryWithPhotoSelector";
import AgeFilter from "./AgeFilter/AgeFilter";
import SexFilter from "./SexFilter/SexFilter";
import SalaryFilter from "./SalaryFilter/SalaryFilter";
import JobExperienceFilter from "./JobExperienceFilter/JobExperienceFilter";
import LanguageFilter from "./LanguageFilter/LanguageFilter";
import TypeOfEmployment from "./TypeOfEmployment/TypeOfEmployment";

const Filters = ({hasPhoto, onHasPhotoChange}) => {
    return (
        <div className={styles.filters}>
            <div className={styles.filtersHeadingDiv}>
                <h2 className={styles.filtersHeading}>Фильтры</h2>
            </div>
            <div className={styles.filtersMainDiv}>
                <SummaryWithPhotoSelector
                    checked={hasPhoto}
                    onChange={(checked) => onHasPhotoChange(checked)}
                />
                <AgeFilter/>
                <SexFilter/>
                <SalaryFilter/>
                <JobExperienceFilter/>
                <LanguageFilter/>
                <TypeOfEmployment/>
            </div>
        </div>
    );
};
export default Filters;
