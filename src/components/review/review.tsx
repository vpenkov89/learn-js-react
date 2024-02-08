import { useSelector } from "react-redux";
import { IReview, IUserShort } from "../../constants/mock";
import styles from "./styles.module.scss";
import { RootState } from "../../redux";
import { selectReviewById } from "../../redux/entities/review/selectors";
import { selectUserById } from "../../redux/entities/user/selectors";

type ReviewProps = {
  reviewId: string;
};

export const Review: React.FC<ReviewProps> = ({ reviewId }) => {
  const review: IReview = useSelector((state: RootState) =>
    selectReviewById(state, reviewId)
  )!;
  const user: IUserShort = useSelector((state: RootState) =>
    selectUserById(state, review.userId)
  )!;
  return (
    <div className={styles.root}>
      <div>
        <b>★{review.rating}</b> {user.name}
      </div>
      <p>{review.text}</p>
    </div>
  );
};
