import { useDispatch, useSelector } from "react-redux";
import { Menu } from "./menu";
import { selectRestaurantMenuById } from "../../redux/entities/restaurant/selectors";
import { AppDispatch, RootState } from "../../redux";
import { getDishesByRestaurantId } from "../../redux/entities/dish/thunks/get-dishes-by-restaurant-id";
import { useEffect, useState } from "react";
import { selectIsLoading } from "../../redux/ui/request";

type MenuContainerProps = {
  restaurantId: string;
};

export const MenuContainer: React.FC<MenuContainerProps> = ({
  restaurantId,
}) => {
  const [menuRequestId, setMenuRequestId] = useState<string | null>(null);
  const dishesIds = useSelector((state: RootState) =>
    selectRestaurantMenuById(state, restaurantId)
  );

  const isDishesLoading = useSelector(
    (state: RootState) => menuRequestId && selectIsLoading(state, menuRequestId)
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setMenuRequestId(
      dispatch(getDishesByRestaurantId(restaurantId!)).requestId
    );
  }, [restaurantId, dispatch]);

  if (!dishesIds?.length) {
    return null;
  }

  return (
    <>
      {isDishesLoading ? <div>Loading...</div> : <Menu dishesIds={dishesIds} />}
    </>
  );
};
