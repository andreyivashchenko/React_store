import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import styles from "./App.module.scss";
export const SearchContext = createContext("");
function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={styles.app}>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}
export default App;
