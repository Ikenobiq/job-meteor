import {useEffect, useMemo, useState} from "react";
import {fetchAllSummaries} from "../../fetch/fetch";
import SummariesList from "./SummariesList/SummariesList";
import styles from "./Summaries.module.scss";
import svg from "../../shared/images/sprite.svg";
import Pagination from "../Paginator/Pagination";


const PageSize = 10;

const CV = ({summaries, totalSummaryCount, currentPage, onCurrentPageChanged}) => {
    return (
        <div className={`${styles.cv} ${"container"}`}>
            <SummariesList summaries={summaries} filters/>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={totalSummaryCount}
                pageSize={PageSize}
                onPageChange={page => onCurrentPageChanged(page)}
            />
        </div>
    );
};
export default CV;
