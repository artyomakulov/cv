import React from "react";
import css from "./Contacts.module.css";
import { ReactComponent as Email } from "../../ulits/images/contacts/email.svg";
import { ReactComponent as Phone } from "../../ulits/images/contacts/phone.svg";
import { ReactComponent as Telegram } from "../../ulits/images/contacts/telegram.svg";
import { ReactComponent as Git } from "../../ulits/images/contacts/github.svg";
import { ReactComponent as Linkedin } from "../../ulits/images/contacts/linkedin.svg";

const Contacts = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Contacts</h2>
      <div className={css.contacts_block}>
        <div className={css.contacts_item}>
          <a href="mailto:artyomakulov@gmail.com" className={css.contacts_text}>
            <Email className={css.image} width={48} />
            <p>artyomakulov@gmail.com</p>
          </a>
        </div>
        <div className={css.contacts_item}>
          <a href="tel:+380668749735" className={css.contacts_text}>
            <Phone width={48} className={css.image} />
            <p>+380668749735</p>
          </a>
        </div>
        <div className={css.contacts_item}>
          <a
            href="https://github.com/artyomakulov"
            className={css.contacts_text}
          >
            <Git className={css.image} width={48} />
            <p>artyomakulov</p>
          </a>
        </div>
        <div className={css.contacts_item}>
          <a
            href="https://telegram.me/artyomakulov"
            className={css.contacts_text}
          >
            <Telegram className={css.image} width={48} />
            <p>@artyomakulov</p>
          </a>
        </div>
        <div className={css.contacts_item}>
          <a
            href="https://www.linkedin.com/in/artyomakulov/"
            className={css.contacts_text}
          >
            <Linkedin className={css.image} width={48} />
            <p>artyomakulov</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
