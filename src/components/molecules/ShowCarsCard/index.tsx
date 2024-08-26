import styles from "./styles.module.scss";
import ShowCardText from "../../atoms/ShowCardAtoms/ShowCardText";
import ShowCardButton from "../../atoms/ShowCardAtoms/ShowCardButton";
import ShowCardImage from "../../atoms/ShowCardAtoms/ShowCardImage";

interface ShowCarsCardProps {
  title: string;
  description: string;
  image?: string;
  type: string;
}

const ShowCarsCard: React.FC<ShowCarsCardProps> = ({
  title,
  description,
  image,
  type,
}) => {
  return (
    <div className={`${styles["ShowCarsCard"]} ${styles[type ?? "best"]}`}>
      <ShowCardText title={title} type={"title"} />
      <ShowCardText description={description} />
      <ShowCardButton type={type} />
      <ShowCardImage image={image} />
    </div>
  );
};

export default ShowCarsCard;
