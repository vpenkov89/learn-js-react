import { ReviewForm } from "./review-form";
import { useUpdateReviewMutation } from "../../redux/services/api";
import { IReview, IUserShort } from "../../types";
import { useEffect } from "react";

type EditReviewFormContainerProps = {
  className?: string;
  review: IReview;
  user: IUserShort;
  onUpdateFinished: () => void;
};

export const EditReviewFormContainer: React.FC<
  EditReviewFormContainerProps
> = ({ className, review, user, onUpdateFinished }) => {
  const [updateReview, { isLoading, isSuccess }] = useUpdateReviewMutation();

  useEffect(() => {
    if (isSuccess) {
      onUpdateFinished();
    }
  }, [isSuccess, onUpdateFinished]);

  if (isLoading) {
    return <div>Updating...</div>;
  }

  if (!review && !user) {
    return null;
  }

  const { id, text, rating } = review;

  return (
    <ReviewForm
      className={className}
      initialState={{ text, rating }}
      userName={user?.name}
      showCancelBtn={true}
      onCancel={onUpdateFinished}
      onSave={(updatedReview) =>
        updateReview({
          updatedReview: {
            ...updatedReview,
            userId: review.userId,
            id,
          },
        })
      }
    />
  );
};
