import { Dish } from "../dish/dish";
import styles from "./styles.module.scss";

type MenuProps = {
  dishesIds: string[];
};

export const Menu: React.FC<MenuProps> = ({ dishesIds }) => {
  if (!dishesIds) {
    return null;
  }
  return (
    <ul className={styles.root}>
      {dishesIds.map((dishId: string) => {
        return (
          <li key={dishId}>
            <Dish dishId={dishId} />
          </li>
        );
      })}
    </ul>
  );
};
