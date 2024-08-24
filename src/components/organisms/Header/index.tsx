import React from "react";
import HeaderIcons from "../../molecules/HeaderIcons/HeaderIcons";
import Searchbox from "../../molecules/Searchbox/Searchbox";
import Logo from "../../atoms/Logo";
import styles from "./styles.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles["Header"]}>
      <div className={styles["Header__container"]}>
        <Logo />
        <div className={styles["Header__searchbox"]}>
          <Searchbox />
        </div>
        <div className={styles["Header__icons"]}>
          <HeaderIcons />
        </div>
      </div>
      <div className={styles["Header__indicator"]} />
    </div>
  );
};

export default Header;
