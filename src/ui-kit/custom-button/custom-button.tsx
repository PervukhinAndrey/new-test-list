import { PropsWithChildren } from "react";
import styles from "./styled.module.scss";
import cn from "classnames";

type TProps = {
  buttonType: "primary" | "secondary";
  callback: () => void;
};
const CustomButton = (props: PropsWithChildren<TProps>) => {
  const { buttonType, children, callback } = { ...props };
  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    callback();
  };
  return (
    <div
      className={cn(styles.buttonContainer, styles[buttonType + "Button"])}
      onClick={handleOnClick}
    >
      <span className={styles[buttonType]}>{children}</span>
    </div>
  );
};

export default CustomButton;
