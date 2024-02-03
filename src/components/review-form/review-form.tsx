import styles from "./styles.module.scss";
import mainStyles from "../../styles/main.module.scss";
import classNames from "classnames";
import { useReviewForm } from "./use-review-form";

type ReviewFormProps = {
  className?: string;
  // review: IReview;
};

export const ReviewForm: React.FC<ReviewFormProps> = ({ className }) => {
  const { form, setName, setText, setRating } = useReviewForm();
  const name = form.user;

  return (
    <form name="reviewForm" className={classNames(className, styles.root)}>
      <div className={mainStyles.form_group}>
        <label htmlFor="name">User name</label>
        <input name="name" type="text" value={name} onChange={setName}></input>
      </div>
      <div className={mainStyles.form_group}>
        <label htmlFor="text">Review text</label>
        <input
          name="text"
          type="text"
          value={form.text}
          onChange={setText}
        ></input>
      </div>
      <div className={mainStyles.form_group}>
        <label htmlFor="rating">Rating</label>
        <input
          name="rating"
          type="number"
          min="1"
          max="5"
          value={form.rating}
          onChange={setRating}
        ></input>
      </div>
    </form>
  );
};
