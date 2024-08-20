import styles from "./styles.module.scss";

const Loading = () => {
  return (
    <div className={styles["loading__container"]}>
      <div className={styles["loading__spinner"]}></div>
      <p className={styles["loading__message"]}>Loading...</p>
    </div>
  );
};

export default Loading;
