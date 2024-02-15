import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { selectDishesAmountById } from "../../redux/ui/cart";
import { Dish } from "./dish";
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

  if (!dish) {
    return null;
  }

  return <Dish restaurantId={restaurantId} dish={dish} amount={amount} />;
};
