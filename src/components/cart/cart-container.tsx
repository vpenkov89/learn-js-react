import { useSelector } from "react-redux";
import { selectCartDishesByRestaurantds } from "../../redux/ui/cart";
import { Cart } from "./cart";

export const CartContainer: React.FC<unknown> = () => {
  const dishesByRestaurants:[string, Record<string, number>][] = useSelector(selectCartDishesByRestaurantds);

  return <Cart dishesByRestaurants={dishesByRestaurants} />;
};
