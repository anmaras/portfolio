import React from 'react';

import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiSass,
  DiNpm,
  DiVisualstudio,
  DiPhotoshop,
} from 'react-icons/di';

import { FaGitAlt } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { SiVite, SiWebpack } from 'react-icons/si';

export const skills = [
  { iconUrl: <DiCss3 />, icon: 'CSS', id: 0 },
  { iconUrl: <DiHtml5 />, icon: 'HTML', id: 1 },
  { iconUrl: <DiJavascript1 />, icon: 'JavaScript', id: 2 },
  { iconUrl: <DiReact />, icon: 'ReactJs', id: 3 },
  { iconUrl: <DiSass />, icon: 'Sass', id: 4 },
  { iconUrl: <FaGitAlt />, icon: 'Git', id: 5 },
  { iconUrl: <DiNpm />, icon: 'Npm', id: 6 },
  { iconUrl: <DiVisualstudio />, icon: 'Visual Code', id: 7 },
  { iconUrl: <DiPhotoshop />, icon: 'Photoshop', id: 8 },
  { iconUrl: <FiFigma />, icon: 'Figma', id: 9 },
  { iconUrl: <SiVite />, icon: 'ViteJs', id: 10 },
  { iconUrl: <SiWebpack />, icon: 'Webpack', id: 11 },
];
