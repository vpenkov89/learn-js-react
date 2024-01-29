import { useState } from "react";
import { Dish } from "../../constants/mock";
import { CounterView } from "../counter/counter";
import styles from "./styles.module.scss";

type DishProps = {
  dish: Dish;
};

export const DishView: React.FC<DishProps> = ({ dish }) => {
  const [count, setCount] = useState(0);
  const updateCount = (_count: number) => {
    setCount(_count);
  };

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
      {/* TODO возможно обновлять count через колбэк - плохое решение. Уточнить. */}
      <CounterView count={count} countChange={updateCount}></CounterView>
    </div>
  );
};
