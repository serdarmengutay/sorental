import { TbArrowsSort } from "react-icons/tb";
import styles from "./styles.module.scss";

const ChangeSelectedDateButton = () => {
  return (
    <div className={styles["ChangeSelectedDateButton"]} typeof="button">
      <TbArrowsSort size={20} />
    </div>
  );
};
export default ChangeSelectedDateButton;
