import { DishContainer } from "../dish/dish-container";
import styles from "./styles.module.scss";

type CartProps = {
  dishesByRestaurants: [string, Record<string, number>][];
};

export const Cart: React.FC<CartProps> = ({ dishesByRestaurants }) => {
  return (
    <div className={styles.root}>
      {dishesByRestaurants.length ? (
        dishesByRestaurants.map((restaurantIdWithDishes) =>
          Object.keys(restaurantIdWithDishes[1]).map((dishId) => {
            return (
              <DishContainer
                key={dishId}
                restaurantId={restaurantIdWithDishes[0]}
                dishId={dishId}
              />
            );
          })
        )
      ) : (
        <span>Your cart is empty</span>
      )}
    </div>
  );
};
