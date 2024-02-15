import { Reviews } from "./reviews";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/services/api";

type ReviewsContainerProps = {
  restaurantId: string;
};

export const ReviewsContainer: React.FC<ReviewsContainerProps> = ({
  restaurantId,
}) => {
  const { data: reviews, isFetching } =
    useGetReviewsByRestaurantIdQuery(restaurantId);
  if (!reviews?.length) {
    return null;
  }
  return (
    <>{isFetching ? <div>Loading...</div> : <Reviews reviews={reviews} />}</>
  );
};
