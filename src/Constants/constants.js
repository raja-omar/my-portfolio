/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBagShopping,
  faBars,
  faDiceD6,
  faEnvelope,
  faWindowRestore,
  faX,
} from "@fortawesome/free-solid-svg-icons";

import {
  avatar,
  awsIcon,
  calculator,
  cssIcon,
  eslintIcon,
  figmaIcon,
  gitIcon,
  githubIcon,
  htmlIcon,
  javaIcon,
  jsIcon,
  memoryGame,
  neoIcon,
  nodeIcon,
  pawsitivePrototype,
  psqlIcon,
  pyIcon,
  raspIcon,
  reactIcon,
  viteIcon,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hey there!",

    "I'm Omar, a 21-year-old Computer Science major at the University of Calgary. I thrive on crafting seamless web experiences, with a particular knack for backend development. Beyond coding, I'm a table tennis enthusiast. This portfolio is a glimpse into my journey of creating meaningful digital solutions.",
  ],
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const projects = [
  {
    name: "For Your Research",
    description:
      "A web app for researchers for iterating faster during their research process. I'm building the backend using Django, PostgreSQL and BeautifulSoup",
    image: memoryGame,
    demo_link: "https://arasarmemory.netlify.app/",
  },
  {
    name: "Where's Waldo",
    description:
      "A web based game challenging users to find hidden characters as quickly as possible. Built using React and Firebase",
    image: pawsitivePrototype,
    source_code_link: "https://github.com/raja-omar/Wheres-Waldo",
    demo_link:
      "https://www.figma.com/proto/zhK8DMa7uPyQIcHxkemIcx/Pawsitive?type=design&node-id=40-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A2",
  },
  {
    name: "The Local Marketplace",
    description:
      "Simulation of a self checkout station built using Java, Java Swing and JUnit in a team of 23 people. I worked on the automated testing suite and presenting the project to a class of over 50 people.",
    image: calculator,
    source_code_link: "https://github.com/raja-omar/The-Local-Marketplace",
    demo_link: "https://bl33hscalculator.netlify.app/",
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
      "I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description:
      "I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
  },
  {
    id: "react",
    title: "React",
    icon: reactIcon,
    description:
      "I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
  },
  {
    id: "java",
    title: "Java",
    icon: javaIcon,
    description:
      "I have extensive experience utilizing Java for object-oriented programming (OOP) and have built two projects using it (The Local Marketplace and Health Tracker).",
  },

  {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description:
      "I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description:
      "I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories.",
  },
  {
    id: "psql",
    title: "PostgreSQL",
    icon: psqlIcon,
    description:
      "I have been using PostgreSQL in one of my most recent projects (FYR). I'm using it in the backend alongside Django.",
  },
  {
    id: "vite",
    title: "Vite",
    icon: viteIcon,
    description:
      "I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites.",
  },
  {
    id: "py",
    title: "Python",
    icon: pyIcon,
    description:
      "With 3 years of Python experience, I am adept at coding applications using it.",
  },
  {
    id: "node",
    title: "Node",
    icon: nodeIcon,
    description:
      "When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.",
  },

  {
    id: "eslint",
    title: "Eslint",
    icon: eslintIcon,
    description:
      "I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.",
  },
  {
    id: "django",
    title: "Django",
    icon: neoIcon,
    description:
      "Alongside Express, I am also learning Django and implementing it in a project (FYR) to build the backend API.",
  },

  {
    id: "express",
    title: "Express",
    icon: raspIcon,
    description:
      "I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.",
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { icons, introduction, markerSvg, media, memoji, projects, skills };
