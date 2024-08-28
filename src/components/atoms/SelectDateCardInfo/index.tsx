import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles.module.scss";

interface SelectDateCardInfoProps {
  type: string;
  text: string;
}

const SelectDateCardInfo = ({ type, text }: SelectDateCardInfoProps) => {
  return (
    <div className={styles["SelectDateCardInfo__info-container"]}>
      <div className={styles["SelectDateCardInfo__type-container"]}>
        <p className={styles["SelectDateCardInfo__type-select-title"]}>
          {type}
        </p>
        <div className={styles["SelectDateCardInfo__type-select"]}>
          <p className={styles["SelectDateCardInfo__type-select-text"]}>
            {text}
          </p>
          <IoIosArrowDown size={12} color="#666" />
        </div>
      </div>
      <div className={styles["SelectDateCardInfo__indicator"]} />
    </div>
  );
};

export default SelectDateCardInfo;
