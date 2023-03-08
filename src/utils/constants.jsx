import React from 'react';
import { FaGitAlt, FaNode } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { SiVite, SiWebpack, SiExpress, SiMongodb } from 'react-icons/si';
import audioSmall from '../assets/audio-small.webp';
import audioLarge from '../assets/audio-large.webp';
import memorySmall from '../assets/memory-small.webp';
import memoryLarge from '../assets/memory-large.webp';
import weatherSmall from '../assets/kanban-mobile.jpg';
import weatherLarge from '../assets/kanban-large.jpg';
import { ReactComponent as MongooseIcon } from '../assets/mongoose.svg';

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
  { iconUrl: <FaNode />, icon: 'NodeJs', id: 5 },
  { iconUrl: <SiExpress />, icon: 'Express', id: 6 },
  { iconUrl: <MongooseIcon />, icon: 'Mongoose', id: 7 },
  { iconUrl: <SiMongodb />, icon: 'MongoDB', id: 8 },
  { iconUrl: <DiNpm />, icon: 'Npm', id: 9 },
  { iconUrl: <DiVisualstudio />, icon: 'Visual Code', id: 10 },
  { iconUrl: <DiPhotoshop />, icon: 'Photoshop', id: 11 },
  { iconUrl: <FiFigma />, icon: 'Figma', id: 12 },
  { iconUrl: <SiVite />, icon: 'ViteJs', id: 13 },
  { iconUrl: <SiWebpack />, icon: 'Webpack', id: 14 },
  { iconUrl: <FaGitAlt />, icon: 'Git', id: 15 },
];

export const projects = [
  {
    title: 'Kanban',
    tech: ['React', 'SCSS', 'Node', 'Express', 'Mongoose', 'Mongo-DB'],
    description:
      'A full stack app that enables users to create boards with customizable columns and tasks, representing different stages of their work process.',
    urlSmall: weatherSmall,
    urlBig: weatherLarge,
    githubUrl: 'https://github.com/anmaras/kanban-task-management-app',
    liveUrl: 'https://kanban-task-management-app.onrender.com/',
    id: 0,
  },
  {
    title: 'audiophile',
    tech: [
      'React',
      'SCSS',
      'React Router',
      'React Query',
      'Axios',
      'Firebase ',
      'Framer-Motion',
      'Formik',
      'Yup',
    ],
    description:
      'An e-commerce website which allow users to view different audio related products.',
    urlSmall: audioSmall,
    urlBig: audioLarge,
    githubUrl: 'https://github.com/anmaras/audio-ecommerce-website',
    liveUrl: 'https://ecommerce-antonis-maras.netlify.app/',
    id: 1,
  },
  {
    title: 'memory',
    tech: ['React', 'CSS', 'Framer-Motion'],
    description:
      'A game platform that helps you keep your memory sharp while trying to match pairs of icons or numbers.',
    urlSmall: memorySmall,
    urlBig: memoryLarge,
    githubUrl: 'https://github.com/anmaras/memory-game',
    liveUrl: 'https://antonis-maras-memory.netlify.app/',
    id: 2,
  },
];

export const aboutButtons = [
  {
    text: 'skills',
    id: 0,
    element: () => {
      const contact = document.getElementById('skills');
      if (contact) {
        contact.scrollIntoView();
      }
    },
  },
  {
    text: 'projects',
    id: 1,
    element: () => {
      const contact = document.getElementById('projects');
      if (contact) {
        contact.scrollIntoView();
      }
    },
  },
  {
    text: 'contact',
    id: 2,
    element: () => {
      const contact = document.getElementById('contact');
      if (contact) {
        contact.scrollIntoView();
      }
    },
  },
];
