import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/user";
import { Dishes } from "../dishes/dishes";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";
import { AppDispatch, RootState } from "../../redux";
import { IRestaurant } from "../../types";
import { getDishes } from "../../redux/entities/dish/thunks/get-dishes";
import { selectIsFulfilled } from "../../redux/ui/request";
import { getReviews } from "../../redux/entities/review/thunks/get-reviews";
import { SelectedRestaurantContext } from "../../contexts/selected-restaurant";

export const Restaurant: React.FC<unknown> = () => {
  const { user } = useContext(UserContext);
  const { selectedRestaurantId } = useContext(SelectedRestaurantContext);

  const restaurant: IRestaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, selectedRestaurantId!)
  )!;

  const dispath = useDispatch<AppDispatch>();
  const [dishesRequestId, setDishesRequestId] = useState<string | null>(null);
  const [reviewsRequestId, setReviewsRequestId] = useState<string | null>(null);
  const isDishesLoaded = useSelector(
    (state: RootState) =>
      dishesRequestId && selectIsFulfilled(state, dishesRequestId)
  );
  const isReviewsLoaded = useSelector(
    (state: RootState) =>
      reviewsRequestId && selectIsFulfilled(state, reviewsRequestId)
  );
  useEffect(() => {
    setDishesRequestId(dispath(getDishes(selectedRestaurantId!)).requestId);
    setReviewsRequestId(dispath(getReviews(selectedRestaurantId!)).requestId);
  }, [dispath, selectedRestaurantId]);

  return (
    <div className={styles.root}>
      <h2>{restaurant.name}</h2>
      <h3>Menu</h3>
      {isDishesLoaded && <Dishes dishesIds={restaurant.menu}></Dishes>}
      <h3>Reviews</h3>
      {isReviewsLoaded && <Reviews reviewsIds={restaurant.reviews}></Reviews>}
      {user && <ReviewForm className={styles.review_section} />}
    </div>
  );
};
