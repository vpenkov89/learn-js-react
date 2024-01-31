import { IRestaurant } from "../../constants/mock";
import styles from "./styles.module.scss";
import classNames from "classnames";

type RestaurantsTabsProps = {
  restaurants: IRestaurant[];
  selectedRestaurantId: string;
  onSelectedRestaurantIdChange: (restaurantId: string) => void;
};

export const RestaurantsTabs: React.FC<RestaurantsTabsProps> = ({
  restaurants,
  selectedRestaurantId,
  onSelectedRestaurantIdChange,
}) => {
  return (
    <div className={styles.root}>
      {restaurants.map((restaurant: IRestaurant) => (
        <button
          key={restaurant.id}
          className={classNames(styles.select_button, {
            [styles.selected]: restaurant.id === selectedRestaurantId,
          })}
          onClick={() => onSelectedRestaurantIdChange(restaurant.id)}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
};
