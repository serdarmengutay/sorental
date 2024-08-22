import React from "react";
import styles from "./styles.module.scss";

interface InputProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  onChange,
  value,
  type,
}) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      type={type ?? "text"}
      className={styles["Input"]}
    />
  );
};
export default Input;
