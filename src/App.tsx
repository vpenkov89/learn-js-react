import { Layout } from "./components/layout/layout";
import { RestaurantsPage } from "./components/restaurants-page/restaurants-page";
import { restaurants } from "./constants/mock";
import styles from "./styles/main.module.scss";
import { User, UserContext } from "./contexts/user";
import { useState } from "react";

export const App: React.FC<unknown> = () => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout>
        <div className={styles.main}>
          <RestaurantsPage restaurants={restaurants} />
        </div>
      </Layout>
    </UserContext.Provider>
  );
};
