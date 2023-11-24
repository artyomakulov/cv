import React from "react";
import css from "./Skills.module.css";
import { ReactComponent as Html } from "../../ulits/images/skills/html.svg";
import { ReactComponent as Cssicon } from "../../ulits/images/skills/css.svg";
import { ReactComponent as Js } from "../../ulits/images/skills/js.svg";
import { ReactComponent as Git } from "../../ulits/images/skills/git.svg";
import { ReactComponent as Scss } from "../../ulits/images/skills/scss.svg";


const Skills = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>My Skills</h2>
      <div className={css.skill_block}>
        <ul className={css.list}>
          <li className={css.list_item}>
            <div className={`${css.item_container} ${css.html}`}>
              <Html />
              <p className={css.text}>HTML5</p>
            </div>
          </li>
          <li className={css.list_item}>
            <div className={`${css.item_container} ${css.css}`}>
              <Cssicon />
              <p className={css.text}>CSS3</p>
            </div>
          </li>
          <li className={css.list_item}>
            <div className={`${css.item_container} ${css.js}`}>
              <Js/>
              <p className={css.text}>JavaScript</p>
            </div>
          </li>
          <li className={css.list_item}>
            <div className={`${css.item_container} ${css.git}`}>
              <Git/>
              <p className={css.text}>Git</p>
            </div>
          </li>
          <li className={css.list_item}>
            <div className={`${css.item_container} ${css.scss}`}>
             <Scss/>
              <p className={css.text}>SCSS</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
