import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectedRestaurantContext } from "../../contexts/selected-restaurant";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";
import { AppDispatch, RootState } from "../../redux";
import { selectIsLoading } from "../../redux/ui/request";
import { RestaurantsTabsContainer } from "../restaurants-tabs/restaurants-tabs-container";
import { RestaurantContainer } from "../restaurant/restaurant-container";
import { getUsers } from "../../redux/entities/user/thunks/get-users";

export const RestaurantsPage: React.FC<unknown> = () => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<
    string | null
  >(null);
  const [restaurantsRequestId, setRestaurantsRequestId] = useState<
    string | null
  >(null);
  const [usersRequestId, setUsersRequestId] = useState<string | null>(null);

  const isRestaurantsLoading = useSelector(
    (state: RootState) =>
      restaurantsRequestId && selectIsLoading(state, restaurantsRequestId)
  );
  const isUsersLoading = useSelector(
    (state: RootState) =>
      usersRequestId && selectIsLoading(state, usersRequestId)
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setRestaurantsRequestId(dispatch(getRestaurants()).requestId);
    setUsersRequestId(dispatch(getUsers()).requestId);
  }, [dispatch]);

  return (
    <SelectedRestaurantContext.Provider
      value={{ selectedRestaurantId, setSelectedRestaurantId }}
    >
      {isRestaurantsLoading || isUsersLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <b>Select restaurant:</b>
          <RestaurantsTabsContainer />
          {selectedRestaurantId && <RestaurantContainer />}
        </div>
      )}
    </SelectedRestaurantContext.Provider>
  );
};
