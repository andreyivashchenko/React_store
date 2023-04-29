import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Search from "../Search/Search";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__row}>
        <Link to="/" className={styles.header__logo}>
          <h1 className={styles.title}>React Store</h1>
          <p className={styles.subtitle}>Мобилки ваййя крутые</p>
        </Link>
        <Search />

        <Link to="/Cart" className={styles.header__basket}>
          <div className={styles.basket}>
            <div className={styles.basket__item}>500</div>
            <div className={styles.basket__item}></div>
            <div className={styles.basket__item}>1</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
