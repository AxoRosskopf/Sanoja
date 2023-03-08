import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container_header}>
      <p>Shop</p>
      <p>/</p>
      <p>New</p>
    </div>
  );
};

export default Header;
