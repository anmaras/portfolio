import React from 'react';
import style from './About.module.scss';
import Button from '../Button/Button';
import mobile from '../../assets/image-profile-mobile.webp';
import tablet from '../../assets/image-profile-tablet.webp';
import desktop from '../../assets/image-profile-desktop.jpg';
import { motion } from 'framer-motion';

const textVariant = {
  initial: {
    x: '-100%',
  },
  animate: {
    x: 0,
    transition: {
      when: 'beforeChildren',
      duration: 0.65,
      ease: 'anticipate',
      delay: 0.5,
    },
  },
};

const buttonVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'circOut',
      duration: 0.5,
    },
  },
};

const pictureVariant = {
  initial: { y: -1000 },
  animate: {
    y: -30,
    transition: {
      type: 'spring',
      duration: 1.5,
    },
  },
};

const About = () => {
  const element = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView();
    }
  };

  return (
    <div className={style.title}>
      <motion.picture
        className={style['title__img']}
        initial="initial"
        animate="animate"
        variants={pictureVariant}
      >
        <source media="(min-width:1220px)" srcSet={desktop} />
        <source media="(min-width:768px)" srcSet={tablet} />
        <source media="(min-width:375px)" srcSet={mobile} />
        <img src={mobile} alt="my picture" />
      </motion.picture>
      <motion.div
        className={style['title__textWrapper']}
        initial="initial"
        animate="animate"
        variants={textVariant}
      >
        <h1 className={[style['title__text'], 'headingXL'].join(' ')}>
          {`Nice to meet you! I'm`} <span>{`Antonis Maras`}</span>.
        </h1>
        <p className={style['title__subtitle']}>
          {`Based in Athens, I'm a frontend developer passionate about building
        accessible websites and web apps that users love.`}
        </p>

        <motion.div
          className={style['title__buttonWrapper']}
          variants={buttonVariant}
        >
          <Button text="contact me" type="button" element={element} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
