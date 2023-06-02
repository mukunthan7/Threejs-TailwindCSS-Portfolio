import {
  backend,
  cyber,
  frontend,
  uiux,
  html,
  css,
  js,
  react,
  node,
  express,
  mongo,
  firebase,
  docker,
  mysql,
  threejs,
  tailwind,
} from "../assets";

import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const navlinks = [
  {
    title: "Home",
    path: "home",
  },
  {
    title: "About",
    path: "about",
  },
  {
    title: "Skills",
    path: "skills",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

const service = [
  {
    title: "Front End Developer",
    icon: frontend,
  },
  {
    title: "Back End Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: uiux,
  },
  {
    title: "Cyber Security",
    icon: cyber,
  },
];

const tech = [
  {
    title: "HTML",
    icon: html,
  },
  {
    title: "CSS",
    icon: css,
  },
  {
    title: "JavaScript",
    icon: js,
  },
  {
    title: "MongoDB",
    icon: mongo,
  },
  {
    title: "Express",
    icon: express,
  },
  {
    title: "React",
    icon: react,
  },
  {
    title: "Node",
    icon: node,
  },
  {
    title: "MySQL",
    icon: mysql,
  },
  {
    title: "Firebase",
    icon: firebase,
  },
  {
    title: "Docker",
    icon: docker,
  },
  {
    title: "Three.js",
    icon: threejs,
  },
  {
    title: "Tailwind CSS",
    icon: tailwind,
  },
];

export { navlinks, service, tech };
