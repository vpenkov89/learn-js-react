import { useSelector } from "react-redux";

import { selectCartDishesIds } from "../../redux/ui/cart";
import { Cart } from "./cart";

export const CartContainer: React.FC<unknown> = () => {
  const dishesIds = useSelector(selectCartDishesIds);
  return <Cart dishesIds={dishesIds} />;
};
