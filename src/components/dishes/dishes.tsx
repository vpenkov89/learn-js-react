import { Dish } from "../dish/dish";
import styles from "./styles.module.scss";
type DishesProps = {
  dishesIds: string[];
};

export const Dishes: React.FC<DishesProps> = ({ dishesIds }) => {
  return (
    <ul className={styles.root}>
      {dishesIds.map((dishId: string) => {
        return (
          <li key={dishId}>
            <Dish dishId={dishId} />
          </li>
        );
      })}
    </ul>
  );
};
