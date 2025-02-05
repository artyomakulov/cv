import css from "./Card.module.css";
import { ReactComponent as Git } from "../../../ulits/images/contacts/github.svg";
import React from "react";
import "aos/dist/aos.css";

const Card = (props) => {
  console.log(props.git);
  return (
    <div className={css.card} data-aos="zoom-out">
      <div className={css.card_text_block}>
        <h5 className={css.card_title}>{props.title}</h5>
        <p className={css.card_tech}>{props.stack}</p>
        <p className={css.card_role}>{props.type}</p>
        <p className={css.card_disc}>{props.description}</p>
        <div className={css.card_links}>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button className={css.button}>Open project</button>
          </a>
          <a href={props.git} target="_blank" rel="noopener noreferrer">
            <Git width={36} className={css.git} />
          </a>
        </div>
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
