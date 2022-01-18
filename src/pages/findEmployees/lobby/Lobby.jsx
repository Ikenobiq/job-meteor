import SearchMainSection from "../../../client/SearchMainSection/SearchMainSection";
import styles from "./Lobby.module.scss";
import svg from "../../../shared/images/sprite.svg";
const Lobby = () => {
  return (
    <div className={`${styles.lobby} ${"container"}`}>
      <div className={styles.personDiv}>
        <p className={styles.person}>
          <svg className={styles.svg}>
            <use href={`${svg}#person`}></use>
          </svg>
          Юра Марченко
        </p>
      </div>
      <SearchMainSection variant={"secondary"} />
    </div>
  );
};
export default Lobby;
