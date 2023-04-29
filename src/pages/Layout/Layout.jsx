import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import Header from "../../components/Header/Header";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
