import React, { useState } from "react";
import { Link } from "react-scroll";
import { ReactComponent as Burger } from "../../ulits/images/burger.svg";
import { ReactComponent as Close } from "../../ulits/images/close.svg";
import css from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
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
  );
};

export default BurgerMenu;
