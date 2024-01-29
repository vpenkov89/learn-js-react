import { Review } from "../../constants/mock";
import { ReviewView } from "../review/review";
import styles from "./styles.module.scss";

type ReviewsProps = {
  reviews: Review[];
};

export const ReviewsView: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <ul className={styles.root}>
      {reviews.map((review: Review) => (
        <li key={review.id}>
          <ReviewView review={review} />
        </li>
      ))}
    </ul>
  );
};
