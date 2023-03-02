import React from "react";
import styles from "./Vision.module.css";
import sample from "../public/inventory/2.jpg";
import Image from "next/image";

const Vision = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.text_box}>
          <p className={styles.text}>
            SANOJA'S VISION IS TO CREATE STYLISH, SUSTAINABLE FASHION THAT
            EMPOWERS WOMEN AND PROTECTS THE PLANET. WE ARE DEDICATED TO OFFERING
            TIMELESS, MODERN DESIGNS MADE FROM NATURAL FABRICS AND PRODUCED
            RESPONSIBLY. OUR GOAL IS TO BECOME A LEADING FASHION BRAND THAT IS
            RECOGNIZED FOR ITS COMMITMENT TO BEAUTY AND SUSTAINABILITY.
          </p>
        </div>
        <Image src={sample} alt="sample" className={styles.img} />
      </div>
    </div>
  );
};

export default Vision;
