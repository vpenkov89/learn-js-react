import { Counter } from "../counter/counter";
import styles from "./styles.module.scss";
import { IDish } from "../../types";
import { Link } from "react-router-dom";

type DishProps = {
  dish: IDish;
  amount?: number;
  setAmount?: (amount: number) => void;
};

export const Dish: React.FC<DishProps> = ({ dish, amount, setAmount }) => {
  if (!dish) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div>
        <div>
          <Link to={`/dish/${dish.id}`}>{dish.name}</Link> -{" "}
          <b>${dish.price}</b>
        </div>
        <p>
          <u>Ingridients:</u> {dish.ingredients.join(", ")}
        </p>
      </div>
      {amount != null && setAmount && (
        <Counter count={amount} onChange={setAmount}></Counter>
      )}
    </div>
  );
};
