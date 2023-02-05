import React from 'react';
import { skills } from '../../utils/constants';
import style from './Skills.module.scss';
import { IconContext } from 'react-icons/lib';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const constraintsRef = useRef(null);
  return (
    <>
      <h2 className="headingXL">Skills</h2>
      <ul ref={constraintsRef} className={style.list}>
        {skills.map((skill, index) => {
          const { iconUrl, id, icon } = skill;
          return (
            <motion.li
              key={id}
              drag
              dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              className={style['list__item']}
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 800, damping: 10 }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.1 * index },
              }}
            >
              <IconContext.Provider
                value={{ className: `${style['list__img']}`, size: 70 }}
              >
                {iconUrl}
              </IconContext.Provider>
              <p className={[style['list__text']].join(' ')}>{icon}</p>
            </motion.li>
          );
        })}
      </ul>
    </>
  );
};

export default Skills;
