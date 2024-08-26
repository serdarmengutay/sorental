import styles from "./styles.module.scss";

interface ShowCardImageProps {
  image: string | any;
}

const ShowCardImage = ({ image }: ShowCardImageProps) => {
  return (
    <div className={styles["ShowCarsCardImage"]}>
      <img src={image} alt="car" />
    </div>
  );
};
export default ShowCardImage;
