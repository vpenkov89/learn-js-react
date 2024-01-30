import { IDish } from "../../constants/mock";
import { Dish } from "../dish/dish";
import styles from "./styles.module.scss";

type DishesProps = {
  dishes: IDish[];
};

export const Dishes: React.FC<DishesProps> = ({ dishes }) => {
  return (
    <ul className={styles.root}>
      {dishes.map((dish: IDish) => (
        <li key={dish.id}>
          <Dish dish={dish} />
        </li>
      ))}
    </ul>
  );
};
