import SummariesList from "./SummariesList/SummariesList";
import styles from "./Summaries.module.scss";
import Pagination from "../Paginator/Pagination";


const CV = ({summaries, totalSummaryCount, currentPage, pageSize, onCurrentPageChanged}) => {
    return (
        <div className={`${styles.cv} ${"container"}`}>
            <SummariesList summaries={summaries}/>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={totalSummaryCount}
                pageSize={pageSize}
                onPageChange={page => onCurrentPageChanged(page)}
            />
        </div>
    );
};
export default CV;
