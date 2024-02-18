import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { ReviewForm } from "./review-form";
import { useCreateReviewMutation } from "../../redux/services/api";

type CreateReviewFormContainerProps = {
  className?: string;
  restaurantId: string;
};

export const CreateReviewFormContainer: React.FC<
  CreateReviewFormContainerProps
> = ({ className, restaurantId }) => {
  const [createReview, { isLoading }] = useCreateReviewMutation();
  const { user } = useContext(UserContext);

  if (isLoading) {
    return <div>Creating...</div>;
  }
  if (!user) {
    return null;
  }

  return (
    <ReviewForm
      className={className}
      userName={user?.name}
      onSave={(newReview) =>
        createReview({
          restaurantId,
          newReview: {
            ...newReview,
            userId: user.id,
            id: "",
          },
        })
      }
    />
  );
};
