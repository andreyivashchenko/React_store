import React from "react";
import styles from "./CartItem.module.scss";
import del from "../../assets/close.svg";
import { useDispatch } from "react-redux";
import { decrement, removeItem, addItem } from "../../redux/slices/CartSlice";
const CartItem = ({ item }) => {
  const onClickIncrement = () => {
    dispatch(addItem(item));
  };
  const onClickDecrement = () => {
    if (item.count === 1) {
      if (window.confirm("Вы действительно хотите удалить товар?"))
        dispatch(decrement(item));
    } else dispatch(decrement(item));
  };
  const onClickRemove = () => {
    if (window.confirm("Вы действительно хотите удалить товар?")) {
      dispatch(removeItem(item));
    }
  };

  const dispatch = useDispatch();
  return (
    <div className={styles.item}>
      <img
        className={styles.item__photo}
        src={require(`../../assets/products/img/low_quality/${item.img}.webp`)}
        alt={item.title}
      />
      <div className={styles.item__title}>
        <h3 className={styles.item__name}>{item.title}</h3>
        <span className={styles.item__specifications}>
          color: {item.color}, storage : {item.storage}
        </span>
      </div>
      <div className={styles.item__count}>
        <div onClick={onClickDecrement} className={styles.button__count}>
          -
        </div>
        <span>{item.count}</span>
        <div onClick={onClickIncrement} className={styles.button__count}>
          +
        </div>
      </div>
      <span className={styles.item__price}>{item.price} ₽</span>
      <div onClick={onClickRemove} className={styles.item__del}>
        <img className={styles.del} src={del} alt="" />
      </div>
    </div>
  );
};

export default CartItem;
