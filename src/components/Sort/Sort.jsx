import React from "react";
import arrow from "../../assets/SortArrow.svg";
import styles from "./Sort.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeSortType, isOpenSort } from "../../redux/slices/filterSlice";
const Sort = () => {
  const { sortTypes, selectedType, isOpen } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();

  const sort_choice = (i) => {
    dispatch(changeSortType(i));
    dispatch(isOpenSort());
  };

  return (
    <div className={styles.sort}>
      <img
        src={arrow}
        alt="arrow"
        className={`${styles.sort__arrow} ${isOpen ? `${styles.open}` : ""}`}
      />
      <span className={styles.sort__title}>
        Сортировка по:{" "}
        <span
          className={styles.sort__selected}
          onClick={() => dispatch(isOpenSort())}
        >
          {sortTypes[selectedType].name}
        </span>
      </span>

      <ul className={`${styles.sort__list} ${isOpen ? `${styles.open}` : ""}`}>
        {sortTypes.map((obj, i) => (
          <li
            key={i}
            className={`${styles.list} ${
              sortTypes[selectedType].sortProperty === obj.sortProperty
                ? `${styles.active}`
                : ""
            } ${isOpen ? `${styles.open}` : ""}`}
            onClick={() => sort_choice(i)}
          >
            {obj.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sort;
