import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const NotFound = () => {
  return (
    <div className={styles["notFound"]}>
      <h1 className={styles["notFound__title"]}>404</h1>
      <p className={styles["notFound__text"]}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className={styles["notFound__homeLink"]}>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
