import React from "react";
import css from "./About.module.css";
import logo from "../../ulits/images/Logo.svg";

const About = () => {
  return (
    <div className={css.container}>
      <img className={css.logo} src={logo} alt="logo" width={130} />
      <p className={css.text}>
        I'm a switcher from another profession. I am seeking a full-time
        position, whether remote or in-office, as a front-end developer in a
        friendly and exciting company to develop my skills as well as grow with
        a team. I am proficient in HTML, CSS, JavaScript, React, and Node.js.
        Also, I have hands-on experience in following Agile/Scrum methodology
        when working in a team from a previous job. I am a fast learner,
        responsible, and ready for challenging tasks.
      </p>
    </div>
  );
};

export default About;
