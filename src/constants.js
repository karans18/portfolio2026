// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";

import reduxLogo from "./assets/tech_logo/redux.png";
import shadcn from "./assets/tech_logo/shadcn.png";

import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";

import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";

import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";

import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// Experience Section Logo's
import jio from "./assets/company_logo/jio.png";

// Education Section Logo's
import rcoem from "./assets/education_logo/rcoem.png";

// Project Section Logo's

import interviewai from "./assets/work_logo/interviewai.png";
import reelbites from "./assets/work_logo/reelbites.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "shadcn Ui", logo: shadcn },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: jio,
    role: "Frontend Developer",
    company: "Reliance Jio Infocomm Ltd.",
    date: "April August 2021 - sept 2023",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"],
  },
];

export const education = [
  {
    id: 0,
    img: rcoem,
    school: "Shri Ramdeobaba College of Engineering and Management",
    date: "june 2018 -March 2021",
    grade: "6.5 CGPA",
    desc: "I have completed my Bachelor's degree in Electronics and Communication Engineering. During my academic journey, I developed a strong foundation in electronics, communication systems, and core engineering principles. I also built skills in programming, problem-solving, and software development, with exposure to subjects like Data Structures, Digital Electronics, Signals & Systems, and Embedded Systems. My coursework and projects helped me bridge the gap between hardware and software, shaping my technical and analytical abilities.",
    degree: "B.E. / B.Tech in Electronics and Communication Engineering",
  },
];

export const projects = [
  {
    id: 0,
    title: "Interview.io",
    description:
      "Built a MERN stack AI platform using Google Gemini API to generate role-specific interview questions, perform skill gap analysis, and create day-wise preparation roadmaps with Zod-validated structured outputs. Developed an AI resume builder that parses PDFs, matches resumes with job descriptions using Gemini, and generates ATS-optimized PDFs via headless Puppeteer. Secured the application using JWT authentication, HttpOnly cookies, bcrypt hashing, and MongoDB token blacklisting, with a modern React 19 frontend leveraging Context API, custom hooks, and Axios.",
    image: interviewai,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "Gemini AI",
    ],
    github:
      "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    webapp: "https://interviewprep-genai.vercel.app/",
  },
  {
    id: 1,
    title: "Reelbites",
    description:
      "APIFoodView is a TikTok-style food discovery platform built around vertical video reels. It uses the Intersection Observer API to enable scroll-based autoplay, playing videos only when they are at least 60% visible and pausing them when out of view. Food partners upload dish videos using Multer and ImageKit with UUID-based filenames for secure storage. Each reel displays real-time engagement metrics, including likes, saves, and comments, directly on the video overlay.",
    image: reelbites,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
      "socket.io",
      "imageKit CDN",
    ],
    github: "https://github.com/karans18/Reelbites",
    webapp: "https://reelbites-wheat.vercel.app",
  },
];
