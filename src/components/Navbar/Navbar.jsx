import React from 'react';
import { AiFillFile, AiFillGithub, AiFillLinkedin } from 'react-icons/Ai';
import style from './Navbar.module.scss';
import imgUrl from '../../assets/cv.pdf';

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style['navbar__wrapper']}>
        <h4 className={[style['navbar__name'], 'headingS'].join(' ')}>
          antonismaras
        </h4>
        <div className={style['navbar__iconsWrapper']}>
          <a href="https://github.com/anmaras" target="_blank" rel="noreferrer">
            <AiFillGithub className={style['navbar__icon']} size={25} />
          </a>
          <a target="_blank" rel="noreferrer">
            <AiFillLinkedin className={style['navbar__icon']} size={25} />
          </a>
          <a href={imgUrl} download>
            <AiFillFile className={style['navbar__icon']} size={25} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
