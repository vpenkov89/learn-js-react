import { useState } from "react";
import { IDish } from "../../constants/mock";
import { Counter } from "../counter/counter";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { selectDishById } from "../../redux/entities/dish/selectors";

type DishProps = {
  dishId: string;
};

export const Dish: React.FC<DishProps> = ({ dishId }) => {
  const [count, setCount] = useState(0);
  const dish: IDish = useSelector((state: RootState) =>
    selectDishById(state, dishId)
  )!;

  return (
    <div className={styles.root}>
      <div>
        <div>
          {dish.name} - <b>${dish.price}</b>
        </div>
        <p>
          <u>Ingridients:</u> {dish.ingredients.join(", ")}
        </p>
      </div>
      <Counter count={count} countChange={setCount}></Counter>
    </div>
  );
};
