import { useContext } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";
import { RootState } from "../../redux";
import { IRestaurant } from "../../types";

import { SelectedRestaurantContext } from "../../contexts/selected-restaurant";
import { Restaurant } from "./restaurant";

export const RestaurantContainer: React.FC<unknown> = () => {
  const { selectedRestaurantId } = useContext(SelectedRestaurantContext);
  const restaurant: IRestaurant = useSelector((state: RootState) =>
    selectRestaurantById(state, selectedRestaurantId!)
  )!;

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant} />;
};
