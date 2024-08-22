import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface IconAvatarProps {
  children?: ReactNode;
  id?: number;
  onClick?: () => void;
}

const IconAvatar = ({ children, onClick, id }: IconAvatarProps) => {
  return (
    <div onClick={onClick} key={id} className={styles["IconAvatar"]}>
      {children}
    </div>
  );
};

export default IconAvatar;
