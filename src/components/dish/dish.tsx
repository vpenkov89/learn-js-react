import { Counter } from "../counter/counter";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux";
import { selectDishById } from "../../redux/entities/dish/selectors";
import {
  CartSlice,
  decrement,
  increment,
  selectProductAmountById,
} from "../../redux/ui/cart";
import { IDish } from "../../types";

type DishProps = {
  dishId: string;
};

export const Dish: React.FC<DishProps> = ({ dishId }) => {
  const dish: IDish = useSelector((state: RootState) =>
    selectDishById(state, dishId)
  )!;

  const amount = useSelector((state: CartSlice) =>
    selectProductAmountById(state, dishId)
  );
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
        increment={() => dispatch(increment(dishId))}
        decrement={() => dispatch(decrement(dishId))}
      ></Counter>
    </div>
  );
};
