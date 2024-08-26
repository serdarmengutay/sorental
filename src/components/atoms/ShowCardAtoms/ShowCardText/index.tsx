import styles from "./styles.module.scss";

interface ShowCardTextProps {
  title?: string;
  description?: string;
  type?: string;
}

const ShowCardText = ({ title, description, type }: ShowCardTextProps) => {
  return (
    <p
      className={`${styles["ShowCarsCardText"]} ${
        styles[type ?? "description"]
      }`}
    >
      {type === "title" ? title : description}
    </p>
  );
};

export default ShowCardText;
