import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.root}>
      <span className={styles.main_header}>Restaurant Ratings and Reviews</span>
    </header>
  );
};
