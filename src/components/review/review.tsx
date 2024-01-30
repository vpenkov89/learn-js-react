import { IReview } from "../../constants/mock";
import styles from "./styles.module.scss";

type ReviewProps = {
  review: IReview;
};

export const Review: React.FC<ReviewProps> = ({ review }) => {
  return (
    <div className={styles.root}>
      <div>
        <b>★{review.rating}</b> {review.user}
      </div>
      <p>{review.text}</p>
    </div>
  );
};
