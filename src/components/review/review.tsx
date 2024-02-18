import classNames from "classnames";
import styles from "./styles.module.scss";
import mainStyles from "../../styles/main.module.scss";
import { IReview, IUserShort } from "../../types";
import { useState } from "react";
import { EditReviewFormContainer } from "../review-form/edit-review-form-container";

type ReviewProps = {
  review: IReview;
  user: IUserShort;
};

export const Review: React.FC<ReviewProps> = ({ review, user }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  return (
    <div
      className={classNames({ [styles.edit_mode]: !isEditMode }, styles.root)}
    >
      {isEditMode ? (
        <EditReviewFormContainer
          review={review}
          user={user}
          onUpdateFinished={() => {
            setIsEditMode(false);
          }}
        />
      ) : (
        <div>
          <div>
            <b>★{review.rating}</b> {user?.name}
          </div>
          <p>{review.text}</p>
        </div>
      )}
      {!isEditMode && (
        <button
          className={mainStyles.outlined}
          onClick={() => setIsEditMode(!isEditMode)}
        >
          Edit
        </button>
      )}
    </div>
  );
};
