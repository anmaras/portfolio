import React from 'react';
import style from './About.module.scss';
import Button from '../Button/Button';
import mobile from '../../assets/image-profile-mobile.webp';
import tablet from '../../assets/image-profile-tablet.webp';
import desktop from '../../assets/image-profile-desktop.webp';

const About = () => {
  return (
    <div className={style.title}>
      <picture className={style['title__img']}>
        <source media="(min-width:1220px)" srcSet={desktop} />
        <source media="(min-width:768px)" srcSet={tablet} />
        <source media="(min-width:375px)" srcSet={mobile} />
        <img src={mobile} alt="my picture" />
      </picture>
      <div className={style['title__textWrapper']}>
        <h1 className={[style['title__text'], 'headingXL'].join(' ')}>
          {`Nice to meet you! I'm`} <span>{`Antonis Maras`}</span>.
        </h1>
        <p className={style['title__subtitle']}>
          {`Based in the UK, I'm a front-end developer passionate about building
        accessible web apps that users love.`}
        </p>
        <Button text="contact me" type="button" />
      </div>
    </div>
  );
};

export default About;
