import styles from "./styles.module.scss";
import { IReview, IUserShort } from "../../types";

type ReviewProps = {
  review: IReview;
  user: IUserShort;
};

export const Review: React.FC<ReviewProps> = ({ review, user }) => {
  return (
    <div className={styles.root}>
      <div>
        <b>★{review.rating}</b> {user?.name}
      </div>
      <p>{review.text}</p>
    </div>
  );
};
