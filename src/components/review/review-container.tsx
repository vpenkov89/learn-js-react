import { IReview } from "../../types";
import { useGetUsersQuery } from "../../redux/services/api";
import { Review } from "./review";

type ReviewContainerProps = {
  review: IReview;
};

export const ReviewContainer: React.FC<ReviewContainerProps> = ({ review }) => {
  const { data: user, isLoading } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find((userItem) => review?.userId === userItem.id),
    }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!review || !user) {
    return null;
  }

  return <Review review={review} user={user} />;
};
