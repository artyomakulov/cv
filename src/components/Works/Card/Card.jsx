import css from "./Card.module.css";

import React from "react";

const Card = (props) => {
  return (
    <div className={css.card}>
      <div className={css.card_text_block}>
        <h5 className={css.card_title}>{props.title}</h5>
        <p className={css.card_tech}>{props.stack}</p>
        <p className={css.card_role}>{props.role}</p>
        <p className={css.card_disc}>{props.discription}</p>
        <a href={props.link}>
          <button className={css.button}>Open project</button>
        </a>
      </div>
      <div className={css.image_block}>
        <img
          className={css.img}
          src={props.image}
          alt={props.title}
          width={200}
        />
      </div>
    </div>
  );
};

export default Card;
