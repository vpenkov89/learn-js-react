import { Restaurant } from "../../constants/mock";
import { DishesView } from "../dishes/dishes";
import { ReviewsView } from "../reviews/reviews";
import styles from "./styles.module.scss";

type RestaurantProps = {
  restaurant: Restaurant;
};

export const RestaurantView: React.FC<RestaurantProps> = ({ restaurant }) => {
  return (
    <div className={styles.root}>
      <h2>{restaurant.name}</h2>
      <h3>Menu</h3>
      <DishesView dishes={restaurant.menu}></DishesView>
      <h3>Reviews</h3>
      <ReviewsView reviews={restaurant.reviews}></ReviewsView>
      <hr />
    </div>
  );
};
