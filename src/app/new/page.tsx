import React from "react";
import styles from "./page.module.css";
import Header from "components/Shop/Header";

const page = () => {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
};

export default page;
