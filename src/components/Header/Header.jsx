import React from "react";
import css from "./Header.module.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={css.navigation}>
          <li className={css.navigation_item}>
            <Link to="about" smooth={true} duration={500}>
              About me
            </Link>
          </li>
          <li className={css.navigation_item}>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className={css.navigation_item}>
            <Link to="works" smooth={true} duration={500}>
              My Works
            </Link>
          </li>
          <li className={css.navigation_item}>
            <Link to="contacts" smooth={true} duration={500}>
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;