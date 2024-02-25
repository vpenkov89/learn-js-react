import styles from "./styles.module.scss";
import logo from "../../assets/img/logo.svg";

import { LoginControl } from "../login-control/login-control";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.root}>
      <NavLink to={`/`} className={styles.logo_container}>
        <img src={logo} alt="Logo" className={styles.logo}></img>
      </NavLink>
      <NavLink to={`/`} className={styles.main_header}>
        Restaurant Ratings and Reviews
      </NavLink>
      <div className={styles.login_container}>
        <LoginControl />
      </div>
    </header>
  );
};
