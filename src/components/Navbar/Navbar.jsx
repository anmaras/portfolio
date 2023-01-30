import React from 'react';
import { AiFillFile, AiFillGithub, AiFillLinkedin } from 'react-icons/Ai';
import style from './Navbar.module.scss';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Navbar = ({ position }) => {
  return (
    <nav className={position ? style.navbar : style['navbar--bottom']}>
      <div className={style['navbar__wrapper']}>
        <h4 className={[style['navbar__name'], 'headingS'].join(' ')}>
          antonismaras
        </h4>
        <div
          className={
            position
              ? style['navbar__iconsWrapper']
              : style['navbar__iconsWrapper--bottom']
          }
        >
          <motion.a
            href="https://github.com/anmaras"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 800, damping: 10 }}
          >
            <AiFillGithub className={style['navbar__icon']} size={25} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/antonis-maras-20672220a/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 800, damping: 10 }}
          >
            <AiFillLinkedin className={style['navbar__icon']} size={25} />
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/1fYLLkYhRYBeM3wp7acC0h9yIYNbkur4z/view?usp=share_link"
            title="CV"
            rel="noreferrer"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 800, damping: 10 }}
          >
            <AiFillFile className={style['navbar__icon']} size={25} />
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  position: PropTypes.bool.isRequired,
};

export default Navbar;
