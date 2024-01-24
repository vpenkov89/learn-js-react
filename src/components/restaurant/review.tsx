import { Review } from "../../constants/mock";
import styles from "./styles.module.scss";

type ReviewProps = {
  review: Review;
};

export const ReviewCard: React.FC<ReviewProps> = ({ review }: ReviewProps) => {
  return (
    <li className={styles.root}>
      <div>
        <b>★{review.rating}</b> {review.user}
      </div>
      <p>{review.text}</p>
    </li>
  );
};
