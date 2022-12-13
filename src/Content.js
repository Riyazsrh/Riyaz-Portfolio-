// import images
import Hero_person from "./assets/images/Hero/person.png";

import HTML5 from "./assets/images/Skills/HTML5.png";
import CSS from "./assets/images/Skills/CSS3.png";
import reactjs from "./assets/images/Skills/react.png";
import TS from "./assets/images/Skills/TS.png";
import figma from "./assets/images/Skills/figma.png";
import MUI from "./assets/images/Skills/MUI.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "FrontEnd Developer",
    firstName: "RIYAZ",
    LastName: "HUSSAIN",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1.6+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "4+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        para: "HyperText Markup Language",
        logo: HTML5,
        p1: "HTML is the standard markup language for Web pages.",
        p2: "HTML you can create your own Website.",
        p3: "HTML is easy to learn You will enjoy it!"
      },
      {
        name: "CSS",
        para: "Cascading Style Sheets",
        logo: CSS,
        p1: "CSS is the language we use to style an HTML document.",
        p2: "CSS describes how HTML elements should be displayed.",
        p3: "CSS is a cornerstone technology of the World Wide Web."
      },
      {
        name: "React js",
        para: "React is free open-source JavaScript library.",
        logo: reactjs,
        p1: "easy to create user interfaces based on UI components.",
        p2: "React is used to build single-page applications.",
        p3: "React is the ultimate library for front-end developers today."
      },
      {
        name: "TypeScript",
        para: "TypeScript superset of JavaScript language.",
        logo: TS,
        p1: "TypeScript is a strongly typed programming language that builds on JavaScript.",
        p2: "It is designed for the development of large applications.",
        p3: "It enables developers to add type safety to their projects."
      },
      {
        name: "Figma",
        para: "collaborative web application for interface design",
        logo: figma,
        p1: "Figma connects everyone in the design process so teams can deliver better products, faster.",
        p2: "with additional offline features enabled by desktop applications for macOS and Windows.",
        p3: "Figma is a powerful design tool that can be difficult to learn."
      },
      {
        name: "Material UI",
        para: "UI tools to help you ship new features faster.",
        logo: MUI,
        p1: "MUI provides a simple, customizable,and accessible library of React components.",
        p2: "The open-source project follows Google's guidelines for creating components.",
        p3: "giving you a customizable library of foundational and advanced UI elements."
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "create/developing and maintain a website with the help of using HTML,CSS,JAVASCRIPT.They are also responsible for the site's technical aspects, such as its performance and capacity.",
        logo: services_logo1,
      },
      {
        title: "Single WebPage Application",
        para: "React.js is great for single page applications because it allows to create applications that are mobile first and responsive. I can build your applicaton fast and easy to update, which is great for mobile applications.",
        logo: services_logo2,
      },

    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "food-delivery Website",
        image: project1,
        url: "https://food-delivery-srh.web.app/"
      },
      {
        title: "Water Can web",
        image: project2,
        url: "https://watercanreact.web.app/"
      },
      {
        title: "Saloon parlour web",
        image: project3,
        url: "https://saloon-parlour-app.netlify.app/"
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“He was really expert, honest in the estimation, and very very collaborative",
        img: avatar1,
        name: "Unistart",
      },
      {
        review:
          "Riyaz completes yet another development task perfectly once again!! Love working with him!!",
        img: avatar2,
        name: "Rushabh",
      },
      {
        review:
          "“Riyaz completely re built my website for me during the covid-19 lockdown. He took my brief and injected his own creative ideas and showed an excellent understanding of the style I was trying to create. He worked quickly and was there when needed. Excellent!”",
        img: avatar3,
        name: "Builder io",
      },
      {
        review:
          "“Expertise and systematic approach to fulfilling client needs.”",
        img: avatar4,
        name: "Umar",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "A Front-End Developer is responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "riyazsrh1999@gmail.com",
        icon: GrMail,
        link: "mailto:riyazsrh1999@gmail.com",
      },
      {
        text: "+91 9156108140",
        icon: MdCall,
        link: "https://wa.me/9156108140",
      },
      {
        text: "Riyaz Hussain",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/riyaz-hussain-479a06211/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
