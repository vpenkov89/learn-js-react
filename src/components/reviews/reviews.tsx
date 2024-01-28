import { Review } from "../../constants/mock";
import { ReviewView } from "../review/review";
import styles from "./styles.module.scss";

type ReviewsProps = {
  reviews: Review[];
};

export const ReviewsView: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <ul className={styles.root}>
      {reviews.map((reviews: Review) => (
        <li>
          <ReviewView review={reviews} />
        </li>
      ))}
    </ul>
  );
};
