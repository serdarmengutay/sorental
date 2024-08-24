import Logo from "../../atoms/Logo";
import { FooterList } from "../../../db";
import styles from "./styles.module.scss";

const FooterHeader = () => {
  return (
    <>
      <div className={styles["FooterHeader__top-left"]}>
        <Logo />
        <p className={styles["FooterHeader__top-subtitle"]}>
          Our vision is to provide convenience {"\n"} and help increase your
          sales business.
        </p>
      </div>
      <div className={styles["FooterHeader__top-right"]}>
        {FooterList.map((list, index) => (
          <div className={styles["FooterHeader__top-right-container"]}>
            <p key={index} className={styles["FooterHeader__top-right-title"]}>
              {list.title}
            </p>
            <div className={styles["FooterHeader__top-right-list-container"]}>
              {list.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className={styles["FooterHeader__top-right-link"]}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FooterHeader;
