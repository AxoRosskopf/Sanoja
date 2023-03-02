"use client";
import React from "react";
import logo from "../public/logo.svg";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [showCollections, setCollections] = React.useState(true);
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        {/* SECTIONS */}
        <ul className={styles.box_item}>
          <Link href="/new" className={styles.item}>
            New
          </Link>
          <li className={styles.item}>Collections</li>
          <li className={styles.item}>Lookbook</li>
        </ul>

        {/*LOGO*/}
        <Image src={logo} alt="logo" className={styles.logo} />

        {/* LOGIN AND SHOPPING BAG*/}
        <div className={styles.options}>
          <p className={styles.item}>EN</p>
          <a className={styles.item}>Login</a>
          <a className={styles.item}>Bag</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
