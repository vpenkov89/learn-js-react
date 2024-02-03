import { useContext } from "react";
import { IRestaurant } from "../../constants/mock";
import { UserContext } from "../../contexts/user";
import { Dishes } from "../dishes/dishes";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import styles from "./styles.module.scss";

type RestaurantProps = {
  restaurant: IRestaurant;
};

export const Restaurant: React.FC<RestaurantProps> = ({ restaurant }) => {
  const { user } = useContext(UserContext);
  return (
    <div className={styles.root}>
      <h2>{restaurant.name}</h2>
      <h3>Menu</h3>
      <Dishes dishes={restaurant.menu}></Dishes>
      <h3>Reviews</h3>
      <Reviews reviews={restaurant.reviews}></Reviews>
      {user && <ReviewForm className={styles.review_section} />}
    </div>
  );
};
