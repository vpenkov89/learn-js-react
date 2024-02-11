import styles from "./styles.module.scss";
import logo from "../../assets/img/logo.svg";

import { LoginControl } from "../login-control/login-control";

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.logo_container}>
        <img src={logo} alt="Logo" className={styles.logo}></img>
      </div>
      <div className={styles.main_header}>Restaurant Ratings and Reviews</div>
      <div className={styles.login_container}>
        <LoginControl />
      </div>
    </header>
  );
};
