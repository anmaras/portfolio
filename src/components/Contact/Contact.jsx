import React from 'react';
import Button from '../Button/Button';
import style from './Contact.module.scss';
import { RiErrorWarningLine } from 'react-icons/ri';
import Navbar from '../Navbar/Navbar';

const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style['contact__titleWrapper']}>
        <h2 className="headingXL">Contact</h2>
        <p className={style['contact__subtext']}>
          {`If you like to contact me please fill in the form and i'll get back to
        you as soon as possible.`}
        </p>
      </div>
      <form action="" className={style['contact__form']}>
        <div className={style['contact__controller']}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            className={style['contact__input']}
            required
          />
          <RiErrorWarningLine className={style['contact__icon']} size={30} />
        </div>
        <p className={style['contact__warning']}>Name cant be empty</p>
        <div className={style['contact__controller']}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            className={style['contact__input']}
            required
          />
          <RiErrorWarningLine className={style['contact__icon']} size={30} />
        </div>
        <p className={style['contact__warning']}>Sorry, invalid format here</p>
        <div className={style['contact__controller']}>
          <textarea
            name="message"
            id="message"
            // cols="30"
            rows="3"
            className={style['contact__input']}
            placeholder="message"
            required
          />
        </div>
        <p className={style['contact__warning']}>Please type your message</p>
        <Button type="submit" text="send message" link="" />
      </form>
      <div className={style['contact__navbarWrapper']}>
        <Navbar position={false} />
      </div>
    </div>
  );
};

export default Contact;
