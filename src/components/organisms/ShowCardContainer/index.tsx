import { showCardData } from "../../../db";
import ShowCarsCard from "../../molecules/ShowCarsCard";
import styles from "./styles.module.scss";

const ShowCardContainer = () => {
  return (
    <div className={styles["ShowCardContainer"]}>
      {showCardData?.map((cardData) => (
        <ShowCarsCard
          key={cardData?.id}
          title={cardData?.title}
          description={cardData?.description}
          type={cardData?.type}
          image={cardData?.image}
        />
      ))}
    </div>
  );
};

export default ShowCardContainer;
