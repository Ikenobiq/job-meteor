import styles from "./Header.module.scss";
import svg from "../../shared/images/sprite.svg";
const Header = () => {
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
      </nav>
    </header>
  );
};
export default Header;
