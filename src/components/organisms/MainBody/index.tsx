import ShowCardContainer from "../ShowCardContainer";
import SelectDateContainer from "../SelectDateContainer";
import styles from "./styles.module.scss";

const MainBody = () => {
  return (
    <div className={styles["MainBody"]}>
      <ShowCardContainer />
      <SelectDateContainer />
    </div>
  );
};

export default MainBody;
