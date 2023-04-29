import React, { useCallback, useContext, useRef, useState } from "react";
import styles from "./Search.module.scss";
import search_icon from "../../assets/search.svg";
import close_icon from "../../assets/close.svg";
import { SearchContext } from "../../App/App";
import debounce from "lodash.debounce";

const Search = () => {
  const [value, setValue] = useState("");
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();

  const onClickClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current.focus();
  };
  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 300),
    []
  );
  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__input}>
        <img className={styles.input__searchIcon} src={search_icon} alt="" />
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder={"Поиск..."}
          value={value}
          onChange={onChangeInput}
        />

        {value && (
          <img
            className={styles.input__closeIcon}
            src={close_icon}
            onClick={() => onClickClear()}
            alt=""
          />
        )}
      </div>
    </div>
  );
};
export default Search;
