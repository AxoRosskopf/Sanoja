import React from "react";
import styles from "./MainSection.module.css";
import sample from "../public/inventory/Sample.jpg";
import Image from "next/image";

const MainSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {/* TITTLE */}
        <div className={styles.text_box}>
          <p className={styles.title}>Best Sellers</p>
          <p className={styles.subtitle}>
            Discover the Most Coveted Clothes of the Moment - Effortlessly Chic
            and Timelessly Elegant
          </p>
          <button className={styles.btn}>SHOP NOW</button>
        </div>
        {/* ITEM - CLOTH */}
        <div className={styles.item_box}>
          <div className={styles.item_text}>
            <p className={styles.name}>Brown Jacket</p>
            <p className={styles.price}>ARS$ 90.000</p>
          </div>
          <Image src={sample} alt="Sample" className={styles.img} />
        </div>
        {/* ITEM - CLOTH */}
        <div className={styles.item_box}>
          <div className={styles.item_text}>
            <p className={styles.name}>Brown Jacket</p>
            <p className={styles.price}>ARS$ 90.000</p>
          </div>
          <Image src={sample} alt="Sample" className={styles.img} />
        </div>
        {/* ITEM - CLOTH */}
        <div className={styles.item_box}>
          <div className={styles.item_text}>
            <p className={styles.name}>Brown Jacket</p>
            <p className={styles.price}>ARS$ 90.000</p>
          </div>
          <Image src={sample} alt="Sample" className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
