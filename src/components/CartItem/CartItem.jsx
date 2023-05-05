import React from "react";
import styles from "./CartItem.module.scss";
import photo from "../../assets/products/img/low_quality/s22Black.webp";

import del from "../../assets/close.svg";
const CartItem = () => {
  return (
    <div className={styles.item}>
      <img className={styles.item__photo} src={photo} alt="" />
      <div className={styles.item__title}>
        <h3 className={styles.item__name}>Galaxy</h3>
        <span className={styles.item__specifications}>color: red</span>
      </div>
      <div className={styles.item__count}>
        <div className={styles.button__count}>-</div>
        <span>2</span>
        <div className={styles.button__count}>+</div>
      </div>
      <span className={styles.item__price}>100 ₽</span>
      <div className={styles.item__del}>
        <img className={styles.del} src={del} alt="" />
      </div>
    </div>
  );
};

export default CartItem;
