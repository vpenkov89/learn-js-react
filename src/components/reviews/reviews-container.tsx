import { Reviews } from "./reviews";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/services/api";
import { useParams } from "react-router-dom";
import { CreateReviewFormContainer } from "../review-form/create-review-form-container";
import styles from "./styles.module.scss";

export const ReviewsContainer: React.FC<unknown> = () => {
  const { restaurantId } = useParams();
  const { data: reviews, isFetching } = useGetReviewsByRestaurantIdQuery(
    restaurantId!
  );

  if (isFetching) {
    return <div>Loading...</div>;
  }
  if (!reviews?.length) {
    return null;
  }
  return (
    <>
      <Reviews reviews={reviews} />
      <CreateReviewFormContainer
        className={styles.review_section}
        restaurantId={restaurantId!}
      />
    </>
  );
};
