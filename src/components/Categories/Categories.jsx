import React from "react";
import styles from "./Categories.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../redux/slices/filterSlice";

const Categories = () => {
  const { categoriesName, categoriesId } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className={styles.categories}>
      {categoriesName.map((Name, i) => (
        <button
          key={i}
          onClick={() => dispatch(changeCategory(i))}
          className={categoriesId === i ? `${styles.active}` : ""}
        >
          {Name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
