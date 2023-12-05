import css from "./Card.module.css";
import { ReactComponent as Git } from "../../../ulits/images/contacts/github.svg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 


const Card = (props) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);
  return (
    <div className={css.card} data-aos="zoom-out">
      <div className={css.card_text_block}>
        <h5 className={css.card_title}>{props.title}</h5>
        <p className={css.card_tech}>{props.stack}</p>
        <p className={css.card_role}>{props.role}</p>
        <p className={css.card_disc}>{props.discription}</p>
        <div className={css.card_links}>
          <a href={props.link}>
            <button className={css.button}>Open project</button>
          </a>
          <a href={props.git} >
            <Git width={36} className={css.git}/>
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
