import { Dish } from "../../constants/mock";
import { DishView } from "../dish/dish";
import styles from "./styles.module.scss";

type DishesProps = {
  dishes: Dish[];
};

export const DishesView: React.FC<DishesProps> = ({ dishes }) => {
  return (
    <ul className={styles.root}>
      {dishes.map((dish: Dish) => (
        <li key={dish.id}>
          <DishView dish={dish} />
        </li>
      ))}
    </ul>
  );
};
