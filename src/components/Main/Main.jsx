import React from "react";
import css from "./Main.module.css";
import photo from "../../ulits/images/photo.jpg";
import spot1 from "../../ulits/images/spot1.svg";
import spot2 from "../../ulits/images/spot2.svg";

const Main = () => {
  return (
    <div className={css.container}>
      <div className={css.text_block}>
        <h1 className={css.title_name}>Artem Akulov</h1>
        <h2 className={css.title_pos}>FrontEnd Developer</h2>
        <p className={css.title_text}>
          Frontend Developer on a quest for creative challenges and meaningful
          projects, both for personal growth and collaborative innovation. Eager
          to bring my unique skills and perspective to the world of web
          development. Let's embark on a journey of coding excellence together!
        </p>
      </div>
      <div>
        <div className={css.background}>
          <div className={css.photocontainer}>
            <img className={css.spot2} src={spot2} alt="stop2" />
            <img className={css.spot1} src={spot1} alt="spot1" />
            <img className={css.photo} src={photo} alt="artem" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
