import { FC } from "react";
import FooterIndicator from "../../atoms/FooterIndicator";
import FooterHeader from "../../molecules/FooterHeader";
import FooterBottom from "../../molecules/FooterBottom";
import styles from "./styles.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles["Footer"]}>
      <div className={styles["Footer__top"]}>
        <FooterHeader />
      </div>
      <FooterIndicator />
      <div className={styles["Footer__bottom"]}>
        <FooterBottom />
      </div>
    </footer>
  );
};
export default Footer;
