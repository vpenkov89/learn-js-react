import styles from "./styles.module.scss";
import mainStyles from "../../styles/main.module.scss";
import cart from "../../assets/img/cart.svg";
import classNames from "classnames";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CartContainer } from "../cart/cart-container";

type CartButtonProps = {
  amount: number;
};

export const CartButton: React.FC<CartButtonProps> = ({ amount }) => {
  const [coordinates, setCoordinates] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleCartPopover = () => {
    if (coordinates) {
      setCoordinates(null);
      return;
    }

    const buttonDOMRect = buttonRef.current?.getBoundingClientRect();
    if (buttonDOMRect) {
      const { left, bottom } = buttonDOMRect;
      setCoordinates({ left: left - 250, top: bottom });
    }
  };
  return (
    <>
      <button
        ref={buttonRef}
        className={styles.cart_button}
        onClick={toggleCartPopover}
      >
        <img src={cart} alt="Cart" className={styles.cart_img}></img>
        {!!amount && (
          <span className={classNames(mainStyles.badge, styles.cart_badge)}>
            {amount}
          </span>
        )}
      </button>
      {coordinates &&
        createPortal(
          <div style={coordinates} className={styles.popover}>
            <CartContainer />
          </div>,
          document.getElementById("popover-container")!
        )}
    </>
  );
};
