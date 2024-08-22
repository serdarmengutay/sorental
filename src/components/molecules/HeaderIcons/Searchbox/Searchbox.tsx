import React from "react";
import styles from "./styles.module.scss";
import Input from "../../../atoms/Input/Input";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { VscSettings } from "react-icons/vsc";

const Searchbox: React.FC = () => {
  const [value, setValue] = React.useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles["Searchbox"]}>
      <HiMagnifyingGlass className={styles["Searchbox__icon"]} />
      <Input
        placeholder="Search something here"
        value={value}
        onChange={handleSearch}
      />
      <VscSettings className={styles["Searchbox__icon"]} />
    </div>
  );
};
export default Searchbox;
