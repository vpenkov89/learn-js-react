import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { RootState } from "../../redux";
import { selectReviewById } from "../../redux/entities/review/selectors";
import { selectUserById } from "../../redux/entities/user/selectors";
import { IReview, IUserShort } from "../../types";

type ReviewProps = {
  reviewId: string;
};

export const Review: React.FC<ReviewProps> = ({ reviewId }) => {
  const review: IReview = useSelector((state: RootState) =>
    selectReviewById(state, reviewId)
  )!;
  const user: IUserShort = useSelector((state: RootState) =>
    review ? selectUserById(state, review.userId) : null
  )!;
  if (!review) {
    return null;
  }
  return (
    <div className={styles.root}>
      <div>
        <b>★{review.rating}</b> {user?.name}
      </div>
      <p>{review.text}</p>
    </div>
  );
};
