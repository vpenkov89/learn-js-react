import { Menu } from "../../constants/mock";

type MenuProps = {
  menu: Menu;
};

export const MenuCard: React.FC<MenuProps> = ({ menu }: MenuProps) => {
  return (
    <li>
      <div>
        {menu.name} - <b>${menu.price}</b>
      </div>
      <p>Ingridients: {menu.ingredients.join(", ")}</p>
    </li>
  );
};
