// @ts-ignore
import styles from "./Button.module.scss";
import cn from "classnames";

interface IButton {
  title: string;
  onClick?: () => void;
  buttonMinus?: boolean;
}

export const Button = ({ title, onClick, buttonMinus }: IButton) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.buttonRed]: buttonMinus,
      })}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
