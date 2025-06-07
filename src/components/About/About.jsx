import React from "react";
import style from "./About.module.scss";
import Button from "../Button/Button";
import mobile from "../../assets/image-profile-mobile.webp";
import tablet from "../../assets/image-profile-tablet.webp";
import desktop from "../../assets/image-profile-desktop.jpg";
import { motion } from "framer-motion";
import { aboutButtons } from "../../utils/constants";

const textVariant = {
  initial: {
    x: "-100%",
  },
  animate: {
    x: 0,
    transition: {
      when: "beforeChildren",
      duration: 0.65,
      ease: "anticipate",
      delay: 0.5,
    },
  },
};

const buttonVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "circOut",
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const listItemVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {},
  },
};

const pictureVariant = {
  initial: { y: -1000 },
  animate: {
    y: -30,
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
};

const About = () => {
  return (
    <div className={style.title}>
      <motion.picture
        className={style["title__img"]}
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
        className={style["title__textWrapper"]}
        initial="initial"
        animate="animate"
        variants={textVariant}
      >
        <h1 className={[style["title__text"], "headingXL"].join(" ")}>
          {`Nice to meet you!`}
          <span>{`My name is`}</span>
          <span>{`Antonis Maras`}</span>.
        </h1>
        <p className={style["title__subtitle"]}>
          {`Based in Athens, I'm a frontend developer passionate about building
        accessible websites and web apps that users love.`}
        </p>

        <motion.ul
          className={style["title__buttonWrapper"]}
          variants={buttonVariant}
        >
          {aboutButtons.map((button) => {
            const { text, id, element } = button;
            return (
              <motion.li key={id} variants={listItemVariant}>
                <Button text={text} type="button" element={element} />
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default About;
