import { useSelector } from "react-redux";
import { selectCartDishesByRestaurantIds } from "../../redux/ui/cart";
import { Cart } from "./cart";

export const CartContainer: React.FC<unknown> = () => {
  const dishesByRestaurants:[string, Record<string, number>][] = useSelector(selectCartDishesByRestaurantIds);
  return <Cart dishesByRestaurants={dishesByRestaurants} />;
};
