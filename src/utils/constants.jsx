import React from 'react';
import { FaGitAlt } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { SiVite, SiWebpack } from 'react-icons/si';
import audioSmall from '../assets/audio-small.webp';
import audioLarge from '../assets/audio-large.webp';
import memorySmall from '../assets/memory-small.webp';
import memoryLarge from '../assets/memory-large.webp';
import weatherSmall from '../assets/weather-small.webp';
import weatherLarge from '../assets/weather-large.webp';

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

export const skills = [
  { iconUrl: <DiCss3 />, icon: 'CSS', id: 0 },
  { iconUrl: <DiHtml5 />, icon: 'HTML', id: 1 },
  { iconUrl: <DiJavascript1 />, icon: 'JavaScript', id: 2 },
  { iconUrl: <DiReact />, icon: 'React', id: 3 },
  { iconUrl: <DiSass />, icon: 'Sass', id: 4 },
  { iconUrl: <FaGitAlt />, icon: 'Git', id: 5 },
  { iconUrl: <DiNpm />, icon: 'Npm', id: 6 },
  { iconUrl: <DiVisualstudio />, icon: 'Visual Code', id: 7 },
  { iconUrl: <DiPhotoshop />, icon: 'Photoshop', id: 8 },
  { iconUrl: <FiFigma />, icon: 'Figma', id: 9 },
  { iconUrl: <SiVite />, icon: 'ViteJs', id: 10 },
  { iconUrl: <SiWebpack />, icon: 'Webpack', id: 11 },
];

export const projects = [
  {
    title: 'e-commerce website',
    tech: [
      'React',
      'Sass',
      'Axios',
      'Formik',
      'Yup',
      'Firebase',
      'React Query',
      'React Router',
      'Framer Motion',
      'Vite js',
    ],
    description:
      'An e-commerce website which allow users to view different audio related products.',
    urlSmall: audioSmall,
    urlBig: audioLarge,
    githubUrl: 'https://github.com/anmaras/audio-ecommerce-website',
    liveUrl: 'https://ecommerce-antonis-maras.netlify.app/',
    id: 0,
  },
  {
    title: 'memory game',
    tech: ['React', 'CSS', 'Framer Motion', 'Webpack'],
    description:
      'A game platform that helps you keep your memory sharp while trying to match pairs of icons or numbers.',
    urlSmall: memorySmall,
    urlBig: memoryLarge,
    githubUrl: 'https://github.com/anmaras/memory-game',
    liveUrl: 'https://antonis-maras-memory.netlify.app/',
    id: 1,
  },
  {
    title: 'weather app',
    tech: ['html', 'CSS', 'javascript'],
    description:
      'A weather application that provides current, hourly and daily forecast weather data.',
    urlSmall: weatherSmall,
    urlBig: weatherLarge,
    githubUrl: 'https://github.com/anmaras/weather-app',
    liveUrl: 'https://antonis-maras-weather-app.netlify.app/',
    id: 3,
  },
];
