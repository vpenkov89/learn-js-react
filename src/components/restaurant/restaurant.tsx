import { IRestaurant } from "../../types";
import { MenuContainer } from "../menu/menu-container";
import { ReviewForm } from "../review-form/review-form";
import { ReviewsContainer } from "../reviews/reviews-container";
import styles from "./styles.module.scss";

type RestaurantProps = {
  restaurant: IRestaurant;
};

export const Restaurant: React.FC<RestaurantProps> = ({ restaurant }) => {
  return (
    <div className={styles.root}>
      <h2>{restaurant.name}</h2>
      <h3>Menu</h3>
      <MenuContainer restaurantId={restaurant.id}></MenuContainer>
      <h3>Reviews</h3>
      <ReviewsContainer restaurantId={restaurant.id}></ReviewsContainer>
      <ReviewForm className={styles.review_section} />
    </div>
  );
};
