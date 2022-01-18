import Button from "../../../shared/components/Button/Button";
import svg from "../../../shared/images/sprite.svg";
import styles from "./Candidates.module.scss";
import { useState } from "react";
import Modal from "../../../shared/components/Modal/Modal";
import Filters from "../../../client/Filters/Filters";
import useMedia from "../../../client/useMedia";

const Candidates = ({ hasPhoto, onHasPhotoChange }) => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const { isMobile } = useMedia();
  const toggleModal = () => {
    setShowFilterModal(!showFilterModal);
  };
  const closeModal = () => {
    setShowFilterModal(false);
  };
  return (
    <div className="container">
      <div className={styles.candidates}>
        <div className={styles.settingsDiv}>
          {isMobile ? (
            <Button
              className={styles.settingsBtn}
              text={
                <svg className={styles.svg}>
                  <use href={`${svg}#settings`}></use>
                </svg>
              }
              onClick={toggleModal}
              type={"button"}
              variant="svg"></Button>
          ) : (
            <Filters
              closeModal={closeModal}
              hasPhoto={hasPhoto}
              onHasPhotoChange={onHasPhotoChange}
            />
          )}
          {showFilterModal && (
            <Modal closeModal={closeModal}>
              <Filters
                closeModal={closeModal}
                hasPhoto={hasPhoto}
                onHasPhotoChange={onHasPhotoChange}
              />
            </Modal>
          )}
        </div>
        <div className={styles.resultBaseWrap}>
          <div className={styles.result}>
            <h2 className={styles.resultHeading}>
              Мы подобрали <span className={styles.resultSpan}>451 642</span>{" "}
              резюме
            </h2>
          </div>
          <div className={styles.resultWrap}>
            <div className={styles.resultDivParagraph}>
              <p className={styles.resultParagraph}>
                Резюме продавец консультант во Всей Украине
              </p>
            </div>
            <div className={styles.interval}>
              <p className={styles.intervalSet}>за все время</p>
              <svg className={styles.intervalSvg}>
                <use href={`${svg}#arrowDown`}></use>
              </svg>
              <Button className={styles.intervalBtn} />
            </div>
          </div>
          <div className={styles.candidatesCV}>
            <ul></ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Candidates;
