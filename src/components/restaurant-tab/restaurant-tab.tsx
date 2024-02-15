import mainStyles from "../../styles/main.module.scss";
import classNames from "classnames";
import { SelectedRestaurantContext } from "../../contexts/selected-restaurant";
import { useContext } from "react";
import { IRestaurant } from "../../types";

type RestaurantTabProps = {
  restaurant: IRestaurant;
};

export const RestaurantTab: React.FC<RestaurantTabProps> = ({ restaurant }) => {
  const { selectedRestaurantId, setSelectedRestaurantId } = useContext(
    SelectedRestaurantContext
  );

  return (
    <button
      key={restaurant.id}
      className={classNames({
        [mainStyles.selected]: restaurant.id === selectedRestaurantId,
      })}
      onClick={() => setSelectedRestaurantId(restaurant.id)}
    >
      {restaurant.name}
    </button>
  );
};
