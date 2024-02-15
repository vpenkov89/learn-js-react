import { IReview } from "../../types";
import { useGetUsersQuery } from "../../redux/services/api";
import { Review } from "./review";

type ReviewContainerProps = {
  review: IReview;
};

export const ReviewContainer: React.FC<ReviewContainerProps> = ({ review }) => {
  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find((userItem) => review?.userId === userItem.id),
    }),
  });

  if (!review || !user) {
    return null;
  }

  return <Review review={review} user={user} />;
};
