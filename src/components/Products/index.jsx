import React, { useState } from "react";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import styles from "./CardProduct.module.scss";
const CardProduct = ({ title, price, img, storage, color }) => {
  const [count, setCount] = useState(0);
  const [activeStorage, setActiveStorage] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  return (
    <div className={styles.cards}>
      <div className={styles.cards__item}>
        <img
          className={styles.cards__img}
          src={require(`../../assets/products/img/low_quality/${img}.webp`)}
          alt="Galaxy"
        />
        <h4 className={styles.cards__title}>{title}</h4>
        <div className={styles.cards__selector}>
          <ul>
            {storage.map((storage, i) => (
              <li
                key={i}
                className={activeStorage === i ? `${styles.active}` : ""}
                onClick={() => setActiveStorage(i)}
              >
                {storage} Гб
              </li>
            ))}
          </ul>
          <ul>
            {color.map((color, i) => (
              <li
                key={i}
                className={activeColor === i ? `${styles.active}` : ""}
                onClick={() => setActiveColor(i)}
              >
                {color}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.block}>
          <p className={styles.block__price}> от {price} ₽</p>
          <div
            className={`${styles.block__btn} ${styles.btn}`}
            onClick={() => setCount((prevState) => prevState + 1)}
          >
            {" "}
            <img className={styles.btn__plus} src={plus} alt="plus" />
            {count > 0 ? <span>{count}</span> : "Добавить"}
            <span
              onClick={(e) => {
                e.stopPropagation();
                setCount((prevState) => prevState - 1);
              }}
              className={`${count > 0 ? `${styles.added}` : ""}`}
            >
              <img className={styles.btn__minus} src={minus} alt="minus" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
