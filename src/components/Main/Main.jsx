import React, { useEffect } from "react";
import css from "./Main.module.css";
import photo from "../../ulits/images/photo.jpg";
import spot1 from "../../ulits/images/spot1.svg";
import spot2 from "../../ulits/images/spot2.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className={css.container} id="about">
      <h2 style={{ display: "none" }}>About me</h2>
      <div className={css.text_block}>
        <h1 className={css.title_name} data-aos="fade-down">
          Artem Akulov
        </h1>
        <h2 className={css.title_pos} data-aos="fade-right">
          FrontEnd Developer
        </h2>
        <p className={css.title_text} data-aos="fade-right">
          Frontend Developer on a quest for creative challenges and meaningful
          projects, both for personal growth and collaborative innovation. Eager
          to bring my unique skills and perspective to the world of web
          development. Let's embark on a journey of coding excellence together!
        </p>
      </div>
      <div>
        <div className={css.background}>
          <div className={css.photocontainer}>
            <img
              className={css.spot2}
              src={spot2}
              alt="stop2"
              data-aos="fade-down-right"
            />
            <img
              className={css.spot1}
              src={spot1}
              alt="spot1"
              data-aos="fade-up"
            />
            <img
              className={css.photo}
              src={photo}
              alt="artem"
              data-aos="fade-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
