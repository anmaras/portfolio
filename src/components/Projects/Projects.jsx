import React from 'react';
import style from './Projects.module.scss';
import { projects } from '../../utils/constants';
import Button from '../Button/Button';

const Projects = () => {
  return (
    <>
      <h2 className="headingXL">Projects</h2>
      <ul className={style.projects}>
        {projects.map((project) => {
          const {
            id,
            title: name,
            tech,
            urlSmall,
            urlBig,
            githubUrl,
            liveUrl,
            description,
          } = project;
          return (
            <li key={id} className={style['projects__item']}>
              <div className={style['projects__imgWrapper']}>
                <div className={style['projects__imgButtons']}>
                  <Button text="view project" type="link" link={liveUrl} />
                  <Button text="view code" type="link" link={githubUrl} />
                </div>
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
              <ul className={style['projects__techList']}>
                {tech.map((item, index) => {
                  return (
                    <li className={style['projects__tech']} key={index}>
                      {item}
                    </li>
                  );
                })}
              </ul>
              <div className={style['projects__buttonsWrapper']}>
                <Button text="view project" type="link" link={liveUrl} />
                <Button text="view code" type="link" link={githubUrl} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Projects;
