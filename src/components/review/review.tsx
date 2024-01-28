import { Review } from "../../constants/mock";
import styles from "./styles.module.scss";

type ReviewProps = {
  review: Review;
};

export const ReviewView: React.FC<ReviewProps> = ({ review }) => {
  return (
    <div className={styles.root}>
      <div>
        <b>★{review.rating}</b> {review.user}
      </div>
      <p>{review.text}</p>
    </div>
  );
};
