import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <hr />
      <div className={styles.footer_body}>
        <span>© 2024 All rights reserved</span>
      </div>
    </footer>
  );
};
