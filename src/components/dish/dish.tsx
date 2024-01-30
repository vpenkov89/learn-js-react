import { useState } from "react";
import { IDish } from "../../constants/mock";
import { Counter } from "../counter/counter";
import styles from "./styles.module.scss";

type DishProps = {
  dish: IDish;
};

export const Dish: React.FC<DishProps> = ({ dish }) => {
  const [count, setCount] = useState(0);

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
