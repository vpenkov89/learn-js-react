import { Dish } from "../../constants/mock";
import styles from "./styles.module.scss";

type DishProps = {
  dish: Dish;
};

export const DishView: React.FC<DishProps> = ({ dish }) => {
  return (
    <div className={styles.root}>
      <div>
        {dish.name} - <b>${dish.price}</b>
      </div>
      <p>Ingridients: {dish.ingredients.join(", ")}</p>
    </div>
  );
};
