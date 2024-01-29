import { useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

type CounterProps = {
  className?: string;
  count: number;
  countChange: (count: number) => void;
};

export const CounterView: React.FC<CounterProps> = ({
  className,
  count,
  countChange,
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
            countChange(_count - 1);
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
            countChange(_count + 1);
          }
        }}
      >
        +
      </button>
    </div>
  );
};
