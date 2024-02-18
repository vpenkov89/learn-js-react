import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { Dish } from "./dish";
import { selectDishAmountById, setAmount } from "../../redux/ui/cart";
import { useCallback } from "react";
import { IDish } from "../../types";

type DishContainerProps = {
  dish: IDish;
};

export const DishContainer: React.FC<DishContainerProps> = ({ dish }) => {
  const amount = useSelector((state: RootState) =>
    selectDishAmountById(state, dish.id)
  );

  const dispatch = useDispatch();

  const handleSetAmount = useCallback(
    (amount: number) => dispatch(setAmount({ dishId: dish.id, amount })),
    [dish, dispatch]
  );

  if (!dish) {
    return null;
  }

  return <Dish dish={dish} amount={amount} setAmount={handleSetAmount} />;
};
