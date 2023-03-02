import React from "react";
import Image from "next/image";
import sample from "../public/inventory/1.jpg";
import styles from "./Collection.module.css";

const Collection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.box_text}>
          <p className={styles.text}>DREAMLANDIA</p>
          <p className={styles.text}>STARRY NIGHTS FASHION</p>
          <p className={styles.text}>ETERNAL GLAMOUR</p>
        </div>

        <Image src={sample} alt="sample" className={styles.img} />
      </div>
    </div>
  );
};

export default Collection;
