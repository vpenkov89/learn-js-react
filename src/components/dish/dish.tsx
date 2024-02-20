import { Counter } from "../counter/counter";
import styles from "./styles.module.scss";
import { IDish } from "../../types";

type DishProps = {
  dish: IDish;
  amount: number;
  setAmount: (amount: number) => void;
};

export const Dish: React.FC<DishProps> = ({ dish, amount, setAmount }) => {
  if (!dish) {
    return null;
  }

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
      <Counter count={amount} onChange={setAmount}></Counter>
    </div>
  );
};
