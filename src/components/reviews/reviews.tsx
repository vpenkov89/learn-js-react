import { IReview } from "../../types";
import { ReviewContainer } from "../review/review-container";
import styles from "./styles.module.scss";
type ReviewsProps = {
  reviews: IReview[];
};

export const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  if (!reviews?.length) {
    return null;
  }
  return (
    <ul className={styles.root}>
      {reviews.map((review: IReview) => {
        return (
          <li key={review.id}>
            <ReviewContainer review={review} />
          </li>
        );
      })}
    </ul>
  );
};
