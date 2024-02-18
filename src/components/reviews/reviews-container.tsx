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

  if (isFetching) {
    return <div>Loading...</div>;
  }
  if (!reviews?.length) {
    return null;
  }
  return <Reviews reviews={reviews} />;
};
