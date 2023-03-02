import React from "react";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <>
      <video autoPlay muted loop className={styles.video}>
        <source src="/landing.webm" />
      </video>
      <div className={styles.container}>
        <div className={styles.container_text}>
          <h6 className={styles.text_h6}>EXPRESS YOURSELF</h6>
          <h1 className={styles.text_h1}>
            TIMELESS, CREATIVE & SOPHISTICATED.
          </h1>
          <button className={styles.btn}>SHOP COLLECTION</button>
        </div>
      </div>
    </>
  );
};

export default Landing;
