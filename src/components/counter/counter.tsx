import { useState } from "react";
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
  const [_count, setCount] = useState(count ?? 0);
  return (
    <div className={classNames(className, styles.root)}>
      <button
        className={classNames(styles.counter_button, {
          [styles.disabled]: _count < 1,
        })}
        onClick={() => {
          if (_count >= 1) {
            setCount(_count - 1);
            decrement();
          }
        }}
      >
        -
      </button>
      <span className={styles.count}>{_count}</span>
      <button
        className={classNames(styles.counter_button, {
          [styles.disabled]: _count > 4,
        })}
        onClick={() => {
          if (_count < 5) {
            setCount(_count + 1);
            increment();
          }
        }}
      >
        +
      </button>
    </div>
  );
};
