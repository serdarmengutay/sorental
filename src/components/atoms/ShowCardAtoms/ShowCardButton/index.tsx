import styles from "./styles.module.scss";

interface ShowCardButtonProps {
  type?: string;
}

const ShowCardButton = ({ type }: ShowCardButtonProps) => {
  return (
    <div
      typeof="button"
      className={`${styles["ShowCarsCardButton"]} ${
        styles[type ?? "bestButton"]
      }`}
    >
      Rental Car
    </div>
  );
};
export default ShowCardButton;
