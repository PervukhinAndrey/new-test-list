import { PropsWithChildren, ReactElement, useRef } from "react";
import styles from "./styled.module.scss";

type TProps = {
  prefix?: ReactElement | string;
  postfix?: ReactElement | string;
  callback: (a: string) => void;
  value: string;
};
const CustomInput = (props: PropsWithChildren<TProps>) => {
  const { prefix, postfix, callback, value } = { ...props };
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    inputRef.current?.focus();
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    callback(e.currentTarget.value);
  };
  return (
    <div className={styles.inputContainer} onClick={handleOnClick}>
      {prefix && typeof prefix === "string" && (
        <span className={styles.textPrefix}>{prefix}</span>
      )}
      {prefix && typeof prefix !== "string" && prefix}
      <input
        ref={inputRef}
        onChange={handleOnChange}
        value={value}
        placeholder="What test are you looking for?"
      />
      {postfix && typeof postfix === "string" && (
        <span className={styles.textPostfix}>{postfix}</span>
      )}
      {postfix && typeof postfix !== "string" && postfix}
    </div>
  );
};

export default CustomInput;
