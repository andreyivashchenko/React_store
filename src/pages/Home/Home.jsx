import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
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
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const dispatch = useDispatch();
  const { categoriesId, sortTypes, selectedType, searchFlag } = useSelector(
    (state) => state.filter
  );

  const { searchValue } = useContext(SearchContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        selectedType,
        categoriesId,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoriesId, selectedType]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setFilters({ ...params, searchFlag: true }));
      isSearch.current = true;
    }
  }, [dispatch]);

  useEffect(() => {
    window.scroll(0, 0);
    if (!isSearch.current) {
      fetchProducts();
    }
    isSearch.current = false;
  }, [categoriesId, sortTypes, selectedType, searchFlag]);

  const fetchProducts = () => {
    setIsLoading(true);
    const sortBy = sortTypes[selectedType].sortProperty.replace("-", "");
    const order = sortTypes[selectedType].sortProperty.includes("-")
      ? "asc"
      : "desc";
    const category = categoriesId > 0 ? `category=${categoriesId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    axios
      .get(
        `https://6426ca17d24d7e0de4784be9.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  };

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
