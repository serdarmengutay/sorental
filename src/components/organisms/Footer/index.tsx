import { FC } from "react";
import Logo from "../../atoms/Logo";
import styles from "./styles.module.scss";
import { FooterList } from "../../../db";

const currentYear = new Date().getFullYear();

const Footer: FC = () => {
  return (
    <footer className={styles["Footer"]}>
      <div className={styles["Footer__top"]}>
        <div className={styles["Footer__top-left"]}>
          <Logo />
          <p className={styles["Footer__top-subtitle"]}>
            Our vision is to provide convenience {"\n"} and help increase your
            sales business.
          </p>
        </div>
        <div className={styles["Footer__top-right"]}>
          {FooterList.map((list, index) => (
            <div className={styles["Footer__top-right-container"]}>
              <p key={index} className={styles["Footer__top-right-title"]}>
                {list.title}
              </p>
              <div className={styles["Footer__top-right-list-container"]}>
                {list.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className={styles["Footer__top-right-link"]}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles["Footer__indicator"]} />
      <div className={styles["Footer__bottom"]}>
        <div className={styles["Footer__bottom-left"]}>
          <p className={styles["Footer__bottom-text"]}>
            © {currentYear} Sorental. All rights reserved.
          </p>
        </div>
        <div className={styles["Footer__bottom-right"]}>
          <p className={styles["Footer__bottom-text"]}>
            Terms of Service | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
