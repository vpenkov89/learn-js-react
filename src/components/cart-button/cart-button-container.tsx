import { useSelector } from "react-redux";
import { selectTotalProductsAmount } from "../../redux/ui/cart";
import { CartButton } from "./cart-button";
import { RootState } from "../../redux";

export const CartButtonContainer: React.FC<unknown> = () => {
  const totalProductAmount = useSelector((state: RootState) =>
    selectTotalProductsAmount(state)
  );
  return (
   <CartButton amount={totalProductAmount}/>
  );
};
