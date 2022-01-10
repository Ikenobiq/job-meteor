import Footer from "../../client/Footer/Footer";
import Header from "../../client/Header";
import CV from "../../client/summaries/Summaries";
import Lobby from "./lobby/Lobby";
import Candidates from "./сandidates/Сandidates";

const FindEmployees = () => {
  return (
    <>
      <Header />
      <Lobby />
      <Candidates />
      <CV />
      <Footer />
    </>
  );
};
export default FindEmployees;
