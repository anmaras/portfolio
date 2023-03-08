import React from 'react';
import style from './Projects.module.scss';
import { projects } from '../../utils/constants';
import Button from '../Button/Button';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [currId, setCurrId] = useState('');

  const mouseOver = (id) => setCurrId(id);
  const mouseOut = () => setCurrId('');

  return (
    <>
      <h2 className="headingXL">Projects</h2>
      <ul className={style.projects}>
        {projects.map((project, index) => {
          const {
            id,
            title: name,
            urlSmall,
            urlBig,
            githubUrl,
            liveUrl,
            description,
          } = project;
          return (
            <motion.li
              key={id}
              className={style['projects__item']}
              onMouseEnter={() => mouseOver(id)}
              onMouseLeave={mouseOut}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.2 * index },
              }}
              viewport={{ once: true }}
            >
              <div className={style['projects__imgWrapper']}>
                {currId === id ? (
                  <>
                    <motion.div
                      className={style['projects__backdrop']}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.1 } }}
                    ></motion.div>
                    <div className={style['projects__imgButtons']}>
                      <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }}>
                        <Button
                          text="view project"
                          type="link"
                          link={liveUrl}
                        />
                      </motion.div>
                      <motion.div initial={{ x: '100%' }} animate={{ x: 0 }}>
                        <Button text="view code" type="link" link={githubUrl} />
                      </motion.div>
                    </div>
                  </>
                ) : null}
                <picture className={style['projects__img']}>
                  <source media="(min-width:768px)" srcSet={urlBig} />
                  <source media="(min-width:375px)" srcSet={urlSmall} />
                  <img
                    src={urlSmall}
                    alt={`${name} screenshot`}
                    loading="lazy"
                  />
                </picture>
              </div>
              <h3 className={[style['projects__name'], 'headingM'].join(' ')}>
                {name}
              </h3>
              <p className={style['projects__description']}>{description}</p>
              {/* <ul className={style['projects__techList']}>
                {tech.map((item, index) => {
                  return (
                    <li className={style['projects__tech']} key={index}>
                      {item}
                    </li>
                  );
                })}
              </ul> */}
              <div className={style['projects__buttonsWrapper']}>
                <Button text="view project" type="link" link={liveUrl} />
                <Button text="view code" type="link" link={githubUrl} />
              </div>
            </motion.li>
          );
        })}
      </ul>
    </>
  );
};

export default Projects;
