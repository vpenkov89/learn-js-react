import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { Dish } from "./dish";
import { selectDishesAmountById, setAmount } from "../../redux/ui/cart";
import { useCallback } from "react";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api";

type DishContainerProps = {
  restaurantId: string;
  dishId: string;
};

export const DishContainer: React.FC<DishContainerProps> = ({
  restaurantId,
  dishId,
}) => {
  const amount = useSelector((state: RootState) =>
    selectDishesAmountById(state, restaurantId, dishId)
  );

  const { data: dish } = useGetDishesByRestaurantIdQuery(restaurantId, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find((dishItem) => dishId === dishItem.id),
    }),
  });

  const dispatch = useDispatch();

  const handleSetAmount = useCallback(
    (amount: number) =>
      dispatch(setAmount({ dishId: dishId, amount, restaurantId })),
    [dishId, dispatch, restaurantId]
  );

  if (!dish) {
    return null;
  }

  return <Dish dish={dish} amount={amount} setAmount={handleSetAmount} />;
};
