import Footer from "../../client/Footer/Footer";
import Header from "../../client/Header";
import CV from "../../client/summaries/Summaries";
import Lobby from "./lobby/Lobby";
import Candidates from "./сandidates/Сandidates";
import { useEffect, useState } from "react";
import { fetchAllSummaries, fetchFilteredSummaries } from "../../fetch/fetch";

import { useMediaQuery } from "react-responsive";
import useMedia from "../../client/useMedia";

const PageSize = {
  desktop: 9,
  mobile: 5,
};

const FindEmployees = () => {
  const [summaries, setSummaries] = useState([]);
  const [totalSummaryCount, setTotalSummaryCount] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);

  const [hasPhoto, setHasPhoto] = useState(false);

  const { isMobile } = useMedia();
  const pageSize = isMobile ? PageSize.mobile : PageSize.desktop;

  function handleWithPhotoChanged(checked) {
    if (hasPhoto !== checked) setCurrentPage(1);

    setHasPhoto(checked);
  }

  useEffect(() => {
    const getSummaries = async () => {
      try {
        const resp = await (hasPhoto
          ? fetchFilteredSummaries(currentPage, hasPhoto, pageSize)
          : fetchAllSummaries(currentPage, pageSize));
        const { results, total_count } = resp;
        setSummaries(results);
        setTotalSummaryCount(total_count);
      } catch (error) {}
    };
    getSummaries();
  }, [currentPage, hasPhoto, pageSize]);

  return (
    <>
      <Header />
      <Lobby />
      <Candidates
        hasPhoto={hasPhoto}
        onHasPhotoChange={handleWithPhotoChanged}
      />
      <CV
        summaries={summaries}
        totalSummaryCount={totalSummaryCount}
        currentPage={currentPage}
        pageSize={pageSize}
        onCurrentPageChanged={setCurrentPage}
      />
      <Footer />
    </>
  );
};

export default FindEmployees;
