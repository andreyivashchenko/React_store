import React from "react";
import styles from "./CartEmpty.module.scss";
import emptyCart from "../../assets/empty_cart4.webp";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.empty__title}>Корзина пустая</h2>
      <h3 className={styles.empty__subtitle}>
        Вероятней всего, вы не выбрали ни один товар.
      </h3>
      <h3 className={styles.empty__subtitle}>
        Для того, чтобы выбрать товары, перейдите на главную страницу.
      </h3>
      <div className={styles.empty__img}>
        <img className={styles.img} src={emptyCart} alt="" />
      </div>
      <Link className={styles.empty__button} to="/">
        {" "}
        Вернуться на главную
      </Link>
    </div>
  );
};

export default CartEmpty;
