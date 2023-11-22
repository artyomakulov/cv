import React from "react";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className={css.navigation}>
          <li className={css.navigation_item}>About me</li>
          <li className={css.navigation_item}>Skills</li>
          <li className={css.navigation_item}>Pet-Projects</li>
          <li className={css.navigation_item}>Contacts</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
