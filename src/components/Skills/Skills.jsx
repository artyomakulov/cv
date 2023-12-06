import React, { useEffect } from "react";
import css from "./Skills.module.css";
import { ReactComponent as Html } from "../../ulits/images/skills/html.svg";
import { ReactComponent as Cssicon } from "../../ulits/images/skills/css.svg";
import { ReactComponent as Js } from "../../ulits/images/skills/js.svg";
import { ReactComponent as Git } from "../../ulits/images/skills/git.svg";
import { ReactComponent as Scss } from "../../ulits/images/skills/scss.svg";
import { ReactComponent as Bootstrap } from "../../ulits/images/skills/bootstrap.svg";
import { ReactComponent as Exporess } from "../../ulits/images/skills/express.svg";
import { ReactComponent as Mongoose } from "../../ulits/images/skills/mongoose.svg";
import { ReactComponent as Mui } from "../../ulits/images/skills/mui.svg";
import { ReactComponent as Nodejs } from "../../ulits/images/skills/node-js.svg";
import { ReactComponent as Redux } from "../../ulits/images/skills/redux.svg";
import { ReactComponent as Reacticon } from "../../ulits/images/skills/react.svg";
import { ReactComponent as Restapi } from "../../ulits/images/skills/rest-api.svg";
import { ReactComponent as Socket } from "../../ulits/images/skills/socketio.svg";
import { ReactComponent as Webpack } from "../../ulits/images/skills/webpack.svg";
import { ReactComponent as Typescript } from "../../ulits/images/skills/typescript.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className={css.container} id="skills">
      <h2 className={css.title} data-aos="zoom-out">
        My Skills
      </h2>
      <div className={css.gallery_container}>
        <div>
          <ul className={css.gallery_grid}>
            <li
              className={`${css.list_item} ${css.gallery_grid_item_1}`}
              data-aos="fade-right"
            >
              <div
                className={`${css.item_container} ${css.gallery_grid_item} ${css.webpack}`}
              >
                <Webpack />
                <p className={css.text}>Webpack</p>
              </div>
            </li>
            <li className={`${css.list_item} ${css.gallery_grid_item_2}`}>
              <div
                className={`${css.item_container} ${css.gallery_grid_item} ${css.socket}`}
              >
                <Socket />
                <p className={css.text}>Socket.io</p>
              </div>
            </li>
            <li
              className={`${css.list_item} ${css.gallery_grid_item_3}`}
              data-aos="fade-up-right"
            >
              <div
                className={`${css.item_container} ${css.gallery_grid_item} ${css.mongoose}`}
              >
                <Mongoose />
                <p className={css.text}>Mongoose</p>
              </div>
            </li>
            <li
              className={`${css.list_item} ${css.gallery_grid_item_4}`}
              data-aos="fade-up-left"
            >
              <div
                className={`${css.item_container} ${css.gallery_grid_item} ${css.mui}`}
              >
                <Mui />
                <p className={css.text}>Material UI</p>
              </div>
            </li>
            <li
              className={`${css.list_item} ${css.gallery_grid_item_5}`}
              data-aos="fade-down-left"
            >
              <div
                className={`${css.item_container_big} ${css.gallery_grid_item} ${css.node}`}
              >
                <Nodejs />
                <p className={css.text}>Node.js</p>
              </div>
            </li>
            <li className={`${css.list_item} ${css.gallery_grid_item_6}`}>
              <div
                className={`${css.item_container_big} ${css.gallery_grid_item} ${css.react}`}
              >
                <Reacticon />
                <p className={css.text}>React</p>
              </div>
            </li>
            <li
              className={`${css.list_item} ${css.gallery_grid_item_7}`}
              data-aos="fade-down-left"
            >
              <div
                className={`${css.item_container} ${css.gallery_grid_item} ${css.redux}`}
              >
                <Redux />
                <p className={css.text}>Redux</p>
              </div>
            </li>
            <li
              className={`${css.list_item} ${css.gallery_grid_item_8}`}
              data-aos="fade-up"
            >
              <div
                className={`${css.item_container} ${css.gallery_grid_item} ${css.restapi}`}
              >
                <Restapi />
                <p className={css.text}>Rest API</p>
              </div>
            </li>
            <li
              className={`${css.list_item} ${css.gallery_grid_item_9}`}
              data-aos="fade-down"
            >
              <div
                className={`${css.item_container} ${css.gallery_grid_item} ${css.html}`}
              >
                <Html />
                <p className={css.text}>HTML5</p>
              </div>
            </li>
            <li
              className={`${css.list_item} ${css.gallery_grid_item_10}`}
              data-aos="fade-up-right"
            >
              <div
                className={`${css.item_container_big} ${css.gallery_grid_item} ${css.css}`}
              >
                <Cssicon />
                <p className={css.text}>CSS3</p>
              </div>
            </li>
            <li
              className={`${css.list_item} ${css.gallery_grid_item_11}`}
              data-aos="fade-down-right"
            >
              <div
                className={`${css.item_container_big} ${css.gallery_grid_item} ${css.js}`}
              >
                <Js />
                <p className={css.text}>JavaScript</p>
              </div>
            </li>
            <li
              className={`${css.list_item} ${css.gallery_grid_item_12}`}
              data-aos="fade-left"
            >
              <div
                className={`${css.item_container} ${css.gallery_grid_item} ${css.git}`}
              >
                <Git />
                <p className={css.text}>Git</p>
              </div>
            </li>
            <li
              className={`${css.list_item} ${css.gallery_grid_item_13}`}
              data-aos="fade-down-right"
            >
              <div
                className={`${css.item_container} ${css.gallery_grid_item} ${css.scss}`}
              >
                <Scss />
                <p className={css.text}>SCSS</p>
              </div>
            </li>
            <li className={`${css.list_item} ${css.gallery_grid_item_14}`}>
              <div
                className={`${css.item_container} ${css.gallery_grid_item} ${css.ts}`}
              >
                <Typescript />
                <p className={css.text}>TypeScript</p>
              </div>
            </li>
            <li className={`${css.list_item} ${css.gallery_grid_item_15}`}>
              <div
                className={`${css.item_container} ${css.gallery_grid_item} ${css.express}`}
              >
                <Exporess />
                <p className={css.text}>Express.js</p>
              </div>
            </li>
            <li
              className={`${css.list_item} ${css.gallery_grid_item_16}`}
              data-aos="fade-up-left"
            >
              <div
                className={`${css.item_container} ${css.gallery_grid_item} ${css.bootstrap}`}
              >
                <Bootstrap />
                <p className={css.text}>Bootstrap</p>
              </div>
            </li>
          </ul>
        </div>
        <div className={css.text_part} data-aos="fade-left">
          <div>
            <ul className={css.soft_skills}>
              <li>High Analytics</li>
              <li>Stress tolerance</li>
              <li>Non-confrontational</li>
              <li>Quick adaptability to a new team</li>
              <li>Attention to details</li>
            </ul>
          </div>
          <div className={css.languages_block}>
            <h4 className={css.languages_title}>Languages</h4>
            <ul className={css.languages}>
              <li>English - Intermediate</li>
              <li>Ukrainian - Native</li>
              <li>Russian - Fluent</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;