import { IReview } from "../../constants/mock";
import { Review } from "../review/review";
import styles from "./styles.module.scss";

type ReviewsProps = {
  reviews: IReview[];
};

export const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <ul className={styles.root}>
      {reviews.map((review: IReview) => (
        <li key={review.id}>
          <Review review={review} />
        </li>
      ))}
    </ul>
  );
};
