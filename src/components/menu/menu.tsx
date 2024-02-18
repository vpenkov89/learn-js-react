import { IDish } from "../../types";
import { DishContainer } from "../dish/dish-container";
import styles from "./styles.module.scss";

type MenuProps = {
  dishes: IDish[];
};

export const Menu: React.FC<MenuProps> = ({ dishes }) => {
  if (!dishes) {
    return null;
  }
  return (
    <ul className={styles.root}>
      {dishes.map((dish: IDish) => {
        return (
          <li key={dish.id}>
            <DishContainer dish={dish} />
          </li>
        );
      })}
    </ul>
  );
};
