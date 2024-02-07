import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { Dishes } from "../dishes/dishes";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";
import { IRestaurant } from "../../constants/mock";
import { RootState } from "../../redux";

type RestaurantProps = {
  restaurantId: string;
};

export const Restaurant: React.FC<RestaurantProps> = ({ restaurantId }) => {
  const { user } = useContext(UserContext);
  const restaurant: IRestaurant = useSelector((state: RootState) => selectRestaurantById(state, restaurantId))!;
  return (
    <div className={styles.root}>
      <h2>{restaurant.name}</h2>
      <h3>Menu</h3>
      <Dishes dishesIds={restaurant.menu}></Dishes>
      <h3>Reviews</h3>
      <Reviews reviewsIds={restaurant.reviews}></Reviews>
      {user && <ReviewForm className={styles.review_section} />}
    </div>
  );
};
