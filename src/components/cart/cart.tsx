import { Dish } from "../dish/dish";
import styles from "./styles.module.scss";

type CartProps = {
  productIds: string[];
};

export const Cart: React.FC<CartProps> = ({ productIds }) => {
  return (
    <div className={styles.root}>
      {productIds?.length ? (
        productIds.map((productId) => (
          <Dish key={productId} dishId={productId} />
        ))
      ) : (
        <span>Your cart is empty</span>
      )}
    </div>
  );
};
