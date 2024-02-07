import { Review } from "../review/review";
import styles from "./styles.module.scss";

type ReviewsProps = {
  reviewsIds: string[];
};

export const Reviews: React.FC<ReviewsProps> = ({ reviewsIds }) => {
  return (
    <ul className={styles.root}>
      {reviewsIds.map((reviewId: string) => {
        return (
          <li key={reviewId}>
            <Review reviewId={reviewId} />
          </li>
        );
      })}
    </ul>
  );
};
