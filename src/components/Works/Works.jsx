import React from "react";
import css from "./Works.module.css";

const Works = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Works</h2>
      <div className={css.works_block}>
        <div className={css.item_container}></div>
        <div className={css.item_container}></div>
        <div className={css.item_container}></div>
        <div className={css.item_container}></div>
      </div>
    </div>
  );
};

export default Works;
