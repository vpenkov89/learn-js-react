import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";
import mainStyles from "../../styles/main.module.scss";
import classNames from "classnames";
import { SelectedRestaurantContext } from "../../contexts/selected-restaurant";
import { useContext } from "react";
import { IRestaurant } from "../../types";

type RestaurantTabProps = {
  restaurantId: string;
};

export const RestaurantTab: React.FC<RestaurantTabProps> = ({
  restaurantId,
}) => {
  const restaurant: IRestaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, restaurantId)
  )!;
  const { selectedRestaurantId, setSelectedRestaurantId } = useContext(
    SelectedRestaurantContext
  );

  return (
    <button
      key={restaurantId}
      className={classNames({
        [mainStyles.selected]: restaurantId === selectedRestaurantId,
      })}
      onClick={() => setSelectedRestaurantId(restaurantId)}
    >
      {restaurant.name}
    </button>
  );
};
