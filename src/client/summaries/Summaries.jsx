import SummariesList from "./SummariesList/SummariesList";
import styles from "./Summaries.module.scss";
import Pagination from "../Paginator/Pagination";

const CV = ({
  summaries,
  totalSummaryCount,
  currentPage,
  pageSize,
  onCurrentPageChanged,
}) => {
  return (
    <div className="container">
      <div className={styles.cv}>
        <SummariesList summaries={summaries} />
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={totalSummaryCount}
          pageSize={pageSize}
          onPageChange={(page) => onCurrentPageChanged(page)}
        />
      </div>
    </div>
  );
};
export default CV;
