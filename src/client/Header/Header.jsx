import styles from "./Header.module.scss";
import svg from "../../shared/images/sprite.svg";
import { useState } from "react";
import Modal from "../../shared/components/Modal/Modal";
import HeaderModal from "./HeaderModal/HeaderModal";
import Button from "../../shared/components/Button/Button";
const Header = ({ burger }) => {
  const [showModal, setShowModal] = useState(false);
  const [showBurger] = useState(burger);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <header className={`${styles.header} ${"container"}`}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a className={styles.jobSeeker} href="/">
              Соискателю
              <svg className={styles.svg}>
                <use className={styles.Arrow} href={`${svg}#arrow`}></use>
              </svg>
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.employer} href="/">
              Работодатель
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.hr} href="/">
              HR
            </a>
          </li>
        </ul>
        {showBurger && (
          <Button
            className={styles.HeaderModal}
            text={
              <svg className={styles.svg}>
                <use className={styles.Arrow} href={`${svg}#burger`}></use>
              </svg>
            }
            onClick={toggleModal}
            type={"button"}
            variant="svg"></Button>
        )}
        {showModal && (
          <Modal closeModal={closeModal}>
            <HeaderModal closeModal={closeModal} />
          </Modal>
        )}
      </nav>
    </header>
  );
};
export default Header;
