import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import styles from "./styles.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.root}>
      <div id="modal-container"></div>
      <Header />
        <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};
