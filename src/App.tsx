import { Layout } from "./components/layout/layout";
import { RestaurantsPage } from "./components/restaurants-page/restaurants-page";
import styles from "./styles/main.module.scss";
import { IUser, UserContext } from "./contexts/user";
import { useState } from "react";
import { store } from "./redux";
import { Provider } from "react-redux";

export const App: React.FC<unknown> = () => {
  const [user, setUser] = useState<IUser | null>(null);
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        <Layout>
          <div className={styles.main}>
            <RestaurantsPage />
          </div>
        </Layout>
      </UserContext.Provider>
    </Provider>
  );
};
