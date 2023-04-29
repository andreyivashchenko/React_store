import React, { Fragment, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Home.module.scss";
import Categories from "../../components/Categories/Categories";
import CardProduct from "../../components/Products";
import Sort from "../../components/Sort/Sort";
import Skeleton from "../../components/Products/Skeleton";
import { SearchContext } from "../../App/App";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { setFilters } from "../../redux/slices/filterSlice";

const Home = () => {
  const dispatch = useDispatch;
  const navigate = useNavigate();
  const { categoriesId, sortTypes, selectedType } = useSelector(
    (state) => state.filter
  );
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { searchValue } = useContext(SearchContext);
  const sortBy = sortTypes[selectedType].sortProperty.replace("-", "");
  const order = sortTypes[selectedType].sortProperty.includes("-")
    ? "asc"
    : "desc";
  const category = categoriesId > 0 ? `category=${categoriesId}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";

  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1));
  //     dispatch(setFilters());
  //   }
  // }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://6426ca17d24d7e0de4784be9.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [category, sortBy, order, search]);

  useEffect(() => {
    const queryString = qs.stringify({
      sortProperty: selectedType,
      order,
      categoriesId,
    });

    navigate(`?${queryString}`);
  }, [categoriesId, sortBy, order]);

  const products = items.map((obj) => <CardProduct key={obj.id} {...obj} />);
  return (
    <Fragment>
      <div className={styles.categoriesSort}>
        <Categories />
        <Sort />
      </div>

      <h2 className={styles.selectedCategory}>Все товары</h2>

      <div className={styles.products}>
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : products}
      </div>
    </Fragment>
  );
};

export default Home;
