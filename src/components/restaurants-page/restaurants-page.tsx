import { useEffect, useState } from "react";
import { Restaurant } from "../restaurant/restaurant";
import { RestaurantsTabs } from "../restaurants-tabs/restaurants-tabs";
import { useDispatch, useSelector } from "react-redux";
import { SelectedRestaurantContext } from "../../contexts/selected-restaurant";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";
import { AppDispatch, RootState } from "../../redux";
import { RequestSlice, selectIsLoading } from "../../redux/ui/request";
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
    (state: RequestSlice) =>
      restaurantsRequestId && selectIsLoading(state, restaurantsRequestId)
  );
  const isUsersLoading = useSelector(
    (state: RootState) =>
      usersRequestId && selectIsLoading(state, usersRequestId)
  );

  const dispath = useDispatch<AppDispatch>();

  useEffect(() => {
    setRestaurantsRequestId(dispath(getRestaurants()).requestId);
    setUsersRequestId(dispath(getUsers()).requestId);
  }, [dispath]);

  return (
    <SelectedRestaurantContext.Provider
      value={{ selectedRestaurantId, setSelectedRestaurantId }}
    >
      {isRestaurantsLoading || isUsersLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <b>Select restaurant:</b>
          <RestaurantsTabs />
          {selectedRestaurantId && (
            <Restaurant/>
          )}
        </div>
      )}
    </SelectedRestaurantContext.Provider>
  );
};
