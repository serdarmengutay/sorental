import SelectDateCardInfo from "../../atoms/SelectDateCardInfo";
import styles from "./styles.module.scss";

interface SelectDateCardProps {
  type: string;
}

const SelectDateCard = ({ type }: SelectDateCardProps) => {
  return (
    <div className={styles["SelectDateCard"]}>
      <div className={styles["SelectDateCard__process-type"]}>
        <div
          className={`${styles["SelectDateCard__radioBtn"]} ${
            styles[type ?? "pick"]
          }`}
        />
        <p>{type === "pick" ? "Pick - Up" : "Drop - off"}</p>
      </div>
      <div className={styles["SelectDateCard__info-wrapper"]}>
        <SelectDateCardInfo type="Locations" text="Select your city" />
        <SelectDateCardInfo type="Date" text="Select your date" />
        <SelectDateCardInfo type="Time" text="Select your time" />
      </div>
    </div>
  );
};

export default SelectDateCard;
