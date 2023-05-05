import React from "react";
import styles from "./Cart.module.scss";
import cartImg from "../../assets/cart.svg";
import trash from "../../assets/trash.svg";
import CartItem from "../../components/CartItem/CartItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/slices/CartSlice";
const Cart = () => {
  const { items, totalCount, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const onClickRemove = () => {
    if (window.confirm("Вы действительно хотите очистить корзину?")) {
      dispatch(removeItem());
    }
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cart__header}>
        <img className={styles.cart__img} src={cartImg} alt="" />
        <h2 className={styles.cart__title}>Корзина</h2>

        <img
          onClick={onClickRemove}
          className={styles.cleaning__icon}
          src={trash}
          alt=""
        />
        <span onClick={onClickRemove} className={styles.cleaning__title}>
          Очистить корзину
        </span>
      </div>
      <div className={styles.cart__body}>
        {items.map((item, i) => (
          <CartItem key={i} item={item} />
        ))}
      </div>
      <div className={styles.cart__options}>
        <div className={styles.cart__amount}>
          <span>
            Всего товаров:{" "}
            <span className={styles.amount}>{totalCount} шт.</span>
          </span>
        </div>
        <div className={styles.cart__price}>
          <span>
            Сумма заказа: <span className={styles.price}>{totalPrice} ₽</span>
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
