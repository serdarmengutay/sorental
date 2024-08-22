import React from "react";
import styles from "./styles.module.scss";
import IconAvatar from "../../atoms/IconAvatar/IconAvatar";
import { navBarIcons } from "../../../db";

const HeaderIcons: React.FC = () => {
  return (
    <div className={styles["headerIcons"]}>
      {navBarIcons.map((icon) => (
        <IconAvatar onClick={icon.onClick} id={icon.id}>
          {icon.image ? (
            <img src={icon.image} className={styles["headerIcons__image"]} />
          ) : (
            icon.icon
          )}
        </IconAvatar>
      ))}
    </div>
  );
};

export default HeaderIcons;
