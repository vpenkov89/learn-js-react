import styles from "./styles.module.scss";

type CartProps = {
  dishesIds: string[];
};

export const Cart: React.FC<CartProps> = ({ dishesIds }) => {
  return (
    <div className={styles.root}>
      {dishesIds?.length ? (
        dishesIds.map(
          (dishId) =>
            // TODO в данном случае неясно как отобразить в корзине
            // несколько блюд из разных рестораном без хранения id ресторана
            // в корзине
            dishId
            // <DishContainer key={dishId} dish={dish} />
        )
      ) : (
        <span>Your cart is empty</span>
      )}
    </div>
  );
};
