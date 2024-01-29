import { useState } from "react";
import { Restaurant } from "../../constants/mock";
import { RestaurantView } from "../restaurant/restaurant";
import styles from "./styles.module.scss";
import classNames from "classnames";

type RestaurantsProps = {
  restaurants: Restaurant[];
};

export const RestaurantsView: React.FC<RestaurantsProps> = ({
  restaurants,
}) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);
  return (
    <div className={styles.root}>
      <b>Select restaurant:</b>
      <div className={styles.restaurants_buttons}>
        {restaurants.map((restaurant: Restaurant) => (
          <button
            key={restaurant.id}
            className={classNames(styles.select_button, {
              [styles.selected]: restaurant.id === selectedRestaurant.id,
            })}
            onClick={() => setSelectedRestaurant(restaurant)}
          >
            {restaurant.name}
          </button>
        ))}
      </div>
      <RestaurantView restaurant={selectedRestaurant} />
    </div>
  );
};
