import { Button } from "../ui/button/Button";

// @ts-ignore
import styles from "./Counter.module.scss";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClickMinus = () => {
    if (count == 0) {
      return;
    }
    setCount(count - 1);
  };

  const handleClickPlus = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Cчётчик</div>
      <div className={styles.number}>{count}</div>
      <div className={styles.wrapperButtons}>
        <Button title="- Минус" buttonMinus={true} onClick={handleClickMinus} />
        <Button title="Плюс +" onClick={handleClickPlus} />
      </div>
    </div>
  );
};
