import React from 'react';
import { skills } from '../../utils/constants';
import style from './Skills.module.scss';
import { IconContext } from 'react-icons/lib';

const Skills = () => {
  return (
    <ul className={style.list}>
      {skills.map((skill) => {
        const { iconUrl, id, icon } = skill;
        return (
          <li key={id} className={style['list__item']}>
            <IconContext.Provider
              value={{ className: `${style['list__img']}`, size: 100 }}
            >
              {iconUrl}
            </IconContext.Provider>
            <h2 className={[style['list__text'], 'headingL'].join(' ')}>
              {icon}
            </h2>
          </li>
        );
      })}
    </ul>
  );
};

export default Skills;
