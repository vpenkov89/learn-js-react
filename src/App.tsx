import { Layout } from "./components/layout/layout";
import { RestaurantPage } from "./components/pages/restaurant-page/restaurant-page";
import { UserContext } from "./contexts/user";
import { useState } from "react";
import { store } from "./redux";
import { Provider } from "react-redux";
import { IUser } from "./types";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { DishPage } from "./components/pages/dish-page/dish-page";
import { HomePage } from "./components/pages/home-page/home-page";
import { RestaurantContainer } from "./components/restaurant/restaurant-container";
import { ReviewsContainer } from "./components/reviews/reviews-container";
import { MenuContainer } from "./components/menu/menu-container";

export const App: React.FC<unknown> = () => {
  const [user, setUser] = useState<IUser | null>(
    // TODO remove it
    {
      id: "a304959a-76c0-4b34-954a-b38dbf310360",
      name: "Antony",
      email: "test@test.test",
    }
  );
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "restaurants",
          element: <RestaurantPage />,
          children: [
            {
              path: ":restaurantId",
              element: <RestaurantContainer />,
              children: [
                {
                  index: true,
                  element: <Navigate to="menu" replace />,
                },
                {
                  path: "menu",
                  element: <MenuContainer />,
                },
                {
                  path: "reviews",
                  element: <ReviewsContainer />,
                },
              ],
            },
          ],
        },
        {
          path: "dish/:dishId",
          element: <DishPage />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
          <RouterProvider router={router} />
      </UserContext.Provider>
    </Provider>
  );
};
