import styles from "./styles.module.scss";
import front from "../../../assets/img/front.jpeg";
import { NavLink } from "react-router-dom";

export const HomePage: React.FC<unknown> = () => {
  return (
    <div className={styles.root}>
      <NavLink to={`restaurants`} className={styles.front_img__container}>
        <img src={front} alt="Front" className={styles.front_img}></img>
      </NavLink>
    </div>
  );
};
