import styles from "./styles.module.scss";
import mainStyles from "../../styles/main.module.scss";
import classNames from "classnames";
import { IReviewForm, useReviewForm } from "./use-review-form";

type ReviewFormProps = {
  className?: string;
  initialState?: IReviewForm;
  userName: string;
  showCancelBtn?: boolean;
  onSave: (newReview: IReviewForm) => void;
  onCancel?: () => void;
};

export const ReviewForm: React.FC<ReviewFormProps> = ({
  className,
  initialState,
  userName,
  showCancelBtn,
  onSave,
  onCancel,
}) => {
  const { form, setText, setRating } = useReviewForm(initialState);

  return (
    <form name="reviewForm" className={classNames(className, styles.root)}>
      <div className={mainStyles.form_group}>
        <label htmlFor="name">User name</label>
        <input name="name" type="text" disabled={true} value={userName}></input>
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
      <div className={styles.buttons_container}>
        {showCancelBtn && onCancel && (
          <button className={mainStyles.outlined} onClick={() => onCancel()}>
            Cancel
          </button>
        )}
        <button onClick={() => onSave(form)}>Save</button>
      </div>
    </form>
  );
};
