import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantReviewsById } from "../../redux/entities/restaurant/selectors";
import { AppDispatch, RootState } from "../../redux";
import { Reviews } from "./reviews";
import { selectIsLoading } from "../../redux/ui/request";
import { useEffect, useState } from "react";
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunks/get-reviews-by-restaurant-id";

type ReviewsContainerProps = {
  restaurantId: string;
};

export const ReviewsContainer: React.FC<ReviewsContainerProps> = ({
  restaurantId,
}) => {
  const [reviewsRequestId, setReviewsRequestId] = useState<string | null>(null);

  const reviewsIds = useSelector((state: RootState) =>
    selectRestaurantReviewsById(state, restaurantId)
  );

  const isReviewsLoading = useSelector(
    (state: RootState) =>
      reviewsRequestId && selectIsLoading(state, reviewsRequestId)
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setReviewsRequestId(
      dispatch(getReviewsByRestaurantId(restaurantId!)).requestId
    );
  }, [dispatch, restaurantId]);

  if (!reviewsIds?.length) {
    return null;
  }
  return (
    <>
      {isReviewsLoading ? (
        <div>Loading...</div>
      ) : (
        <Reviews reviewsIds={reviewsIds} />
      )}
    </>
  );
};
