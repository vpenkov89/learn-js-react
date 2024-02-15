import { IDish } from "../../types";
import { DishContainer } from "../dish/dish-container";
import styles from "./styles.module.scss";

type MenuProps = {
  restaurantId: string,
  dishes: IDish[];
};

export const Menu: React.FC<MenuProps> = ({ restaurantId, dishes }) => {
  if (!dishes) {
    return null;
  }
  return (
    <ul className={styles.root}>
      {dishes.map((dish: IDish) => {
        return (
          <li key={dish.id}>
            {/* не смотря на наличие всей сущности dish передам только id для совместимости dish с корзиной */}
            <DishContainer restaurantId={restaurantId} dishId={dish.id} />
          </li>
        );
      })}
    </ul>
  );
};
