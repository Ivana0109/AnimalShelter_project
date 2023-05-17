import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import { slide as MobileMenu } from "react-burger-menu";
function Menu() {
  const mobileMenuStyles = {
    bmBurgerButton: {
      position: "relative",
      width: "36px",
      height: "30px",
    },
    bmBurgerBars: {
      background: "#3747",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      top: "0px",
      position: "fixed",
    },
    bmMenu: {
      background: "white",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
      overflow: "hidden",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <>
      <div className={styles.mobileContainer}>
        <MobileMenu noOverlay right styles={mobileMenuStyles}>
          <Link to={"/onama"}>
            <button className={styles.button}>O NAMA</button>
          </Link>
          <Link to={"/popis"}>
            <button className={styles.button}>POPIS</button>
          </Link>
          <Link to={"/unos"}>
            <button className={styles.button}>UNOS</button>
          </Link>
          <Link to={"/donacije"}>
            <button className={styles.button}>DONACIJE</button>
          </Link>
          <Link to={"/obavijesti"}>
            <button className={styles.button}>OBAVIJESTI</button>
          </Link>
        </MobileMenu>
      </div>
      <div className={styles.container}>
        <Link to={"/onama"}>
          <button className={styles.button}>O NAMA</button>
        </Link>
        <Link to={"/popis"}>
          <button className={styles.button}>POPIS</button>
        </Link>
        <Link to={"/unos"}>
          <button className={styles.button}>UNOS</button>
        </Link>
        <Link to={"/donacije"}>
          <button className={styles.button}>DONACIJE</button>
        </Link>
        <Link to={"/obavijesti"}>
          <button className={styles.button}>OBAVIJESTI</button>
        </Link>{" "}
      </div>
    </>
  );
}

export default Menu;
