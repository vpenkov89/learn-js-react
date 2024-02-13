import styles from "./styles.module.scss";
import classNames from "classnames";

type CounterProps = {
  className?: string;
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const Counter: React.FC<CounterProps> = ({
  className,
  count,
  increment,
  decrement,
}) => {
  return (
    <div className={classNames(className, styles.root)}>
      <button
        className={classNames(styles.counter_button, {
          [styles.disabled]: count < 1,
        })}
        onClick={() => {
          if (count >= 1) {
            decrement();
          }
        }}
      >
        -
      </button>
      <span className={styles.count}>{count}</span>
      <button
        className={classNames(styles.counter_button, {
          [styles.disabled]: count > 4,
        })}
        onClick={() => {
          if (count < 5) {
            increment();
          }
        }}
      >
        +
      </button>
    </div>
  );
};
