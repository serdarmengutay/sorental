import React from "react";
import styles from "./styles.module.scss";
import HeaderIcons from "../../molecules/HeaderIcons/HeaderIcons";
import Input from "../../atoms/Input/Input";
import Searchbox from "../../molecules/HeaderIcons/Searchbox/Searchbox";

const Header: React.FC = () => {
  return (
    <div className={styles["Header"]}>
      <div className={styles["Header__container"]}>
        <div className={styles["Header__logo"]}>
          <h1 className={styles["Header__title"]}>SORENTAL</h1>
        </div>
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
