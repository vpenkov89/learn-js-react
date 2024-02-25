import styles from "./styles.module.scss";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/user";
import classNames from "classnames";
import mainStyles from "../../styles/main.module.scss";
import { LoginForm } from "../login-form/login-form";
import { Modal } from "../modal/modal";
import { CartButtonContainer } from "../cart-button/cart-button-container";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/ui/cart";

export const LoginControl: React.FC<unknown> = () => {
  const { user, setUser } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      dispatch(clearCart());
    }
  }, [dispatch, user]);

  return (
    <>
      <div className={styles.root}>
        {user ? (
          <>
            <div className={styles.cart_container}>
              <CartButtonContainer />
            </div>
            <div>
              <span className={styles.username}>{user.name}</span>
              <button
                className={classNames(mainStyles.outlined, styles.login_btn)}
                onClick={() => setUser(null)}
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <button
            className={classNames(mainStyles.outlined, styles.login_btn)}
            onClick={() => setIsModalOpen(true)}
          >
            Login
          </button>
        )}
      </div>
      {isModalOpen && (
        <Modal headerText="Login" onClose={closeModal}>
          <LoginForm onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};
