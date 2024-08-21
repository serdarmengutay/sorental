import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface IconAvatarProps {
  children?: ReactNode;
}

const IconAvatar = ({ children }: IconAvatarProps) => {
  return <div className={styles["IconAvatar"]}>{children}</div>;
};

export default IconAvatar;
