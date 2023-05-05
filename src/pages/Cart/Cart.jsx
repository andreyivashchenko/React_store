import React, { Fragment } from "react";
import styles from "./Cart.module.scss";
import cartImg from "../../assets/cart.svg";
import trash from "../../assets/trash.svg";
import CartItem from "../../components/CartItem/CartItem";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.cart__header}>
        <img className={styles.cart__img} src={cartImg} alt="" />
        <h2 className={styles.cart__title}>Корзина</h2>

        <img className={styles.cleaning__icon} src={trash} alt="" />
        <span className={styles.cleaning__title}>Очистить корзину</span>
      </div>
      <div className={styles.cart__body}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className={styles.cart__options}>
        <div className={styles.cart__amount}>
          <span>
            Всего товаров: <span className={styles.amount}>10 шт.</span>
          </span>
        </div>
        <div className={styles.cart__price}>
          <span>
            Сумма заказа: <span className={styles.price}>1000 ₽</span>
          </span>
        </div>
      </div>
      <div className={styles.cart__buttons}>
        <Link to="/">
          <button className={styles.button__back}>
            {" "}
            {`${"< Вернуться назад"}`}
          </button>
        </Link>
        <button className={styles.button__pay}>Оплатить заказ</button>
      </div>
    </div>
  );
};

export default Cart;
