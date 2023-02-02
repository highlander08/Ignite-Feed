import styles from "./Header.module.css";
import logo from "../assets/Ignite-simbol.svg";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.subHeader}>
        <img src={logo} alt="logo ignite" />
        <h1>Ignite Feed</h1>
      </div>
    </header>
  );
};
