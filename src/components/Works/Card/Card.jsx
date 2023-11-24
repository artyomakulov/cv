import css from "./Card.module.css";

import React from "react";

const Card = ({ work }) => {
  return (
    <div className={css.card}>
      <div className={css.card_text_block}>
        <h5 className={css.card_title}>{work.title}</h5>
        <p className={css.card_tech}>{work.stack}</p>
        <p className={css.card_role}>{work.role}</p>
        <p className={css.card_disc}>{work.discription}</p>
        <a href={work.link}>
          <button className={css.button}>Open project</button>
        </a>
      </div>
      <div className={css.image_block}>
        <img
          className={css.img}
          src={work.image}
          alt={work.title}
          width={200}
        />
      </div>
    </div>
  );
};

export default Card;
