import React from "react";
import { FiFigma } from "react-icons/fi";
import audioSmall from "../assets/audio-small.webp";
import audioLarge from "../assets/audio-large.webp";
import memorySmall from "../assets/memory-small.webp";
import memoryLarge from "../assets/memory-large.webp";
import weatherSmall from "../assets/kanban-mobile.jpg";
import weatherLarge from "../assets/kanban-large.jpg";
import { SiTypescript, SiNx } from "react-icons/si";

import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiSass,
  DiIonic,
  DiAngularSimple,
} from "react-icons/di";

export const skills = [
  { iconUrl: <DiCss3 />, icon: "CSS", id: 0 },
  { iconUrl: <DiHtml5 />, icon: "HTML", id: 1 },
  { iconUrl: <DiJavascript1 />, icon: "JavaScript", id: 2 },
  { iconUrl: <DiSass />, icon: "Sass", id: 3 },
  { iconUrl: <DiAngularSimple />, icon: "Angular", id: 4 },
  { iconUrl: <DiIonic />, icon: "Ionic", id: 5 },
  { iconUrl: <FiFigma />, icon: "Figma", id: 6 },
  { iconUrl: <SiTypescript />, icon: "TypeScript", id: 7 },
  { iconUrl: <SiNx />, icon: "Nx", id: 8 },
];

export const projects = [
  {
    title: "Kanban",
    tech: ["React", "SCSS", "Node", "Express", "Mongoose", "Mongo-DB"],
    description:
      "A full stack app that enables users to create boards with customizable columns and tasks, representing different stages of their work process.",
    urlSmall: weatherSmall,
    urlBig: weatherLarge,
    githubUrl: "https://github.com/anmaras/kanban-task-management-app",
    liveUrl: "https://kanban-task-management-app.onrender.com/",
    id: 0,
  },
  {
    title: "audiophile",
    tech: [
      "React",
      "SCSS",
      "React Router",
      "React Query",
      "Axios",
      "Firebase ",
      "Framer-Motion",
      "Formik",
      "Yup",
    ],
    description:
      "An e-commerce website which allow users to view different audio related products.",
    urlSmall: audioSmall,
    urlBig: audioLarge,
    githubUrl: "https://github.com/anmaras/audio-ecommerce-website",
    liveUrl: "https://ecommerce-antonis-maras.netlify.app/",
    id: 1,
  },
  {
    title: "memory",
    tech: ["React", "CSS", "Framer-Motion"],
    description:
      "A game platform that helps you keep your memory sharp while trying to match pairs of icons or numbers.",
    urlSmall: memorySmall,
    urlBig: memoryLarge,
    githubUrl: "https://github.com/anmaras/memory-game",
    liveUrl: "https://antonis-maras-memory.netlify.app/",
    id: 2,
  },
];

export const aboutButtons = [
  {
    text: "skills",
    id: 0,
    element: () => {
      const contact = document.getElementById("skills");
      if (contact) {
        contact.scrollIntoView();
      }
    },
  },
  {
    text: "projects",
    id: 1,
    element: () => {
      const contact = document.getElementById("projects");
      if (contact) {
        contact.scrollIntoView();
      }
    },
  },
  {
    text: "contact",
    id: 2,
    element: () => {
      const contact = document.getElementById("contact");
      if (contact) {
        contact.scrollIntoView();
      }
    },
  },
];
