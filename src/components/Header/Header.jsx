import React, { useState } from "react";
import css from "./Header.module.css";
import { Link } from "react-scroll";
import { ReactComponent as Burger } from "../../ulits/images/burger.svg";
import { ReactComponent as Close } from "../../ulits/images/close.svg";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className={css.xz}>
      <div>
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
        <Burger className={css.burger} onClick={openModal} />
        {isModalOpen && (
          <div className={css.overlay_container}>
            <div className={css.overlay} onClick={closeModal}>
              <div className={css.modalContentContainer}>
                <div className={css.modalContent}>
                  <div className={css.cont}>
                    <button onClick={closeModal} className={css.btnClose}>
                      <Close />
                    </button>
                    <ul className={css.list}>
                      <li className={css.list_item}>
                        <Link
                          to="about"
                          smooth={true}
                          duration={700}
                          onClick={closeModal}
                        >
                          About me
                        </Link>
                      </li>
                      <li className={css.list_item}>
                        <Link
                          to="skills"
                          smooth={true}
                          duration={700}
                          onClick={closeModal}
                        >
                          Skills
                        </Link>
                      </li>
                      <li className={css.list_item}>
                        <Link
                          to="works"
                          smooth={true}
                          duration={700}
                          onClick={closeModal}
                        >
                          My Works
                        </Link>
                      </li>
                      <li className={css.list_item}>
                        <Link
                          to="contacts"
                          smooth={true}
                          duration={700}
                          onClick={closeModal}
                        >
                          Contacts
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
