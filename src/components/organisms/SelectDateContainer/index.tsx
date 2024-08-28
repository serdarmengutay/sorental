import SelectDateCard from "../../molecules/SelectDateCard";
import ChangeSelectedDateButton from "../../atoms/ChangeSelectedDateButton";
import styles from "./styles.module.scss";

const SelectDateContainer = () => {
  return (
    <div className={styles["SelectDateContainer"]}>
      <SelectDateCard type="pick" />
      <ChangeSelectedDateButton />
      <SelectDateCard type="drop" />
    </div>
  );
};

export default SelectDateContainer;
