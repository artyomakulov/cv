import React from "react";
import css from "./Works.module.css";
import Card from "./Card/Card";
import { works } from "../../data/works";

const Works = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Works</h2>
      <div className={css.works_block}>
        {works.map((work) => (

          <div key={work.id}>
            <Card work={work} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
