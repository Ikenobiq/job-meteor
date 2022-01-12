import Footer from "../../client/Footer/Footer";
import Header from "../../client/Header";
import CV from "../../client/summaries/Summaries";
import Lobby from "./lobby/Lobby";
import Candidates from "./сandidates/Сandidates";
import {useEffect, useState} from "react";
import {fetchAllSummaries, fetchFilteredSummaries} from "../../fetch/fetch";

const FindEmployees = () => {
    const [summaries, setSummaries] = useState([]);
    const [totalSummaryCount, setTotalSummaryCount] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);

    const [withPhoto, setWithPhoto] = useState(false);

    function handleWithPhotoChanged(checked) {
        if (withPhoto !== checked)
            setCurrentPage(1)

        setWithPhoto(checked)
    }

    useEffect(() => {
        const getSummaries = async () => {
            try {
                const resp = await (withPhoto ? fetchFilteredSummaries(currentPage, withPhoto) : fetchAllSummaries(currentPage));
                const {results, total_count} = resp
                setSummaries(results)
                setTotalSummaryCount(total_count)
            } catch (error) {
            }
        };
        getSummaries();
    }, [currentPage, withPhoto]);


    return (
        <>
            <Header/>
            <Lobby/>
            <Candidates withPhoto={withPhoto} onWithPhotoChange={handleWithPhotoChanged}/>
            <CV summaries={summaries} totalSummaryCount={totalSummaryCount} currentPage={currentPage}
                onCurrentPageChanged={setCurrentPage}/>
            <Footer/>
        </>
    );
};
export default FindEmployees;
