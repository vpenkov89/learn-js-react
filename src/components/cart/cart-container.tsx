import { useSelector } from "react-redux";

import { selectCartProducIds } from "../../redux/ui/cart";
import { Cart } from "./cart";

export const CartContainer: React.FC<unknown> = () => {
  const productIds = useSelector(selectCartProducIds);
  return <Cart productIds={productIds} />;
};
