import { useSelector } from "react-redux";
import { CartSlice, selectTotalProductsAmount } from "../../redux/ui/cart";
import { CartButton } from "./cart-button";

export const CartButtonContainer: React.FC<unknown> = () => {
  const totalProductAmount = useSelector((state: CartSlice) =>
    selectTotalProductsAmount(state)
  );
  return (
   <CartButton amount={totalProductAmount}/>
  );
};
