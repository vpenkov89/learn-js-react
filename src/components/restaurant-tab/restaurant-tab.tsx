import mainStyles from "../../styles/main.module.scss";
import classNames from "classnames";
import { IRestaurant } from "../../types";

type RestaurantTabProps = {
  restaurant: IRestaurant;
  isActive: boolean;
};

export const RestaurantTab: React.FC<RestaurantTabProps> = ({
  restaurant,
  isActive,
}) => {
  return (
    <button
      key={restaurant.id}
      className={classNames({
        [mainStyles.selected]: isActive,
      })}
    >
      {restaurant.name}
    </button>
  );
};
