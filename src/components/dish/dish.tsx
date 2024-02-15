import { Counter } from "../counter/counter";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux";
import { decrement, increment } from "../../redux/ui/cart";
import { IDish } from "../../types";

type DishProps = {
  restaurantId: string;
  dish: IDish;
  amount: number;
};

export const Dish: React.FC<DishProps> = ({ restaurantId, dish, amount }) => {
  const dispatch = useDispatch<AppDispatch>();

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
      <Counter
        count={amount}
        increment={() =>
          dispatch(
            increment({
              restaurantId,
              dishId: dish.id,
            })
          )
        }
        decrement={() =>
          dispatch(
            decrement({
              restaurantId,
              dishId: dish.id,
            })
          )
        }
      ></Counter>
    </div>
  );
};
