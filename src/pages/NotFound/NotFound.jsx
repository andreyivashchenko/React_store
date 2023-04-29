import React from "react";
import styles from "./NotFound.module.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={styles.container} id="Not_found">
      <h1>Sorry, nothing found. </h1>
      <p className={styles.zoom_area}>
        Looks like you're lost. The page you are looking for is not available!{" "}
      </p>
      <section className={styles.error_container}>
        <span className={styles.four}>
          <span className={styles.screen_reader_text}>4</span>
        </span>
        <span className={styles.zero}>
          <span className={styles.screen_reader_text}>0</span>
        </span>
        <span className={styles.four}>
          <span className={styles.screen_reader_text}>4</span>
        </span>
      </section>
      <div className={styles.link_container}>
        <Link to={"/"} className={styles.more_link}>
          Go to the home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
