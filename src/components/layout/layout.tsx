import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import styles from "./styles.module.scss";

export const Layout = () => {
  return (
    <div className={styles.root}>
      <div id="modal-container"></div>
      <div id="popover-container" className={styles.popover_container}></div>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
