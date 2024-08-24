import styles from "./styles.module.scss";
import { currentYear } from "../../../utils/getCurrentYear";

const FooterBottom = () => {
  return (
    <>
      <div className={styles["FooterBottom__bottom-left"]}>
        <p className={styles["FooterBottom__bottom-text"]}>
          © {currentYear} Sorental. All rights reserved.
        </p>
      </div>
      <div className={styles["FooterBottom__bottom-right"]}>
        <p className={styles["FooterBottom__bottom-text"]}>
          Terms of Service | Privacy Policy
        </p>
      </div>
    </>
  );
};

export default FooterBottom;
