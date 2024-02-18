import { useSelector } from "react-redux";
import { CartButton } from "./cart-button";
import { RootState } from "../../redux";
import { selectTotalDishesAmount } from "../../redux/ui/cart";

export const CartButtonContainer: React.FC<unknown> = () => {
  const totalAmount = useSelector((state: RootState) =>
    selectTotalDishesAmount(state)
  );
  return <CartButton amount={totalAmount} />;
};
