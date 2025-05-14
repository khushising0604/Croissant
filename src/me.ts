import { DiScrum } from "react-icons/di";
import {
  FaAws,
  FaDocker,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaNewspaper,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { HiChip } from "react-icons/hi";
import {
  SiC,
  SiCss3,
  SiGnubash,
  SiGo,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript
} from "react-icons/si";

import { IMe, ITheme } from "./me.interface";

// Warning: Don't use "black" or "white" values
export const themeColor: ITheme = "orange";

// Multiple theme options
export const multiThemeOptions: ITheme[] = [
  "orange",
  "purple",
  "blue",
  "red",
  "pink",
  "green",
];

// To disable support for multiple themes, set this value to `false`;
export const enableMultiTheme: boolean = true;

export const me = {
  name: "Khushi Singh",
  // Facts are optional
  facts: [
    "You can use this website as your portfolio too. If you need help, just ask!",
    "Did you know? You can hire me!",
    "This website is fully navigable with a keyboard.",
     "I have a Pet name Bella.",
    "You can change your color scnpmheme by clicking the top right icon.",
    "Kubernetes and croissants are my two favorite things—both require finesse.",
     "I want to go Banaras this year!",
    "I like to be upset sometimes for no reeason!",
    "Try clicking on random things; you might find some fun animations.",
    "I spent about 6 hours on the theme button alone.",
    "Try opening the console and see if you can find any easter eggs.",
    "I like to read books in my free time",
    "I've spent too long on the animations and theme system of this website.",
    "I'm a huge fan of the show Friends",
    "Sometimes, I redesign parts of this website just for fun. Call it a 'perpetual beta.'",
    "This website has a dark mode because, let’s be real, we're programmers.",
  ],
  subtitle: "Front-end Developer",
  tagline:
    "I love to build fun, high-quality experiences and continuously learn new things.",
  bigHeading: {
    black: "I make things",
    blue: "for the web",
  },
  about:
    "Aspiring Front-end student who strives for high-quality hardware and software experiences. I love making fun projects and building stuff I like to use myself. Oh, and here is a croissant for you 🥐!",
  location: "Mumbai, India",
  image: "/assets/Her.JPG",
  education: [
    {
      degree: "Bachelor of Computer Applications",
      major: "Computer science" ,
      school: "Mumbai University",
      graduation: "June 2025",
      awards: ["Coursework: Programming Languages (C, C++, Java, Python, PHP), Web Technologies (HTML, CSS, JavaScript, React),Database Management (MySQL, SQL, Oracle), Data Structures and Algorithms, Operating Systems (Windows, Linux, UNIX), Computer Networks, Software Engineering,Object-Oriented Programming (OOP), Discrete Mathematics, Numerical Methods, Statistics, Logical Reasoning, Computer Fundamentals, Digital Electronics, Computer Architecture,Object-Oriented Programming (OOP), Discrete Mathematics, Numerical Methods, Statistics, Logical Reasoning, Computer Fundamentals, Digital Electronics, Computer Architecture,Personality Development, Business Management Basics, Project Management, Practical Labs, Mini Projects, Final Year Capstone Project"],
    },
  ],
  experience: [
    {
      company: "Mercadeo",
      location: "Borivali, Mumbai",
      position: "Senior Social Media Executive",
      duration: "Sept 2024 - Mar 2025",
      bullets: [
        "Managed social media accounts by planning content calendars and executing platform-specific campaigns.",
        " Created graphics, shot reels, and edited videos to align with brand goals and trends.",
        "Monitored engagement metrics and collaborated with design and strategy teams to boost online visibility.",
      ],
    },
    {
      company: "Prayas Developers",
      location: "Mira road, Mumbai",
      position: "junior frontend developer",
      duration: "jan 2024 - April 2024",
      bullets: [
        "Worked as a Junior Frontend Developer on an e-commerce website for a 2-month project.",
        "Collaborated closely with the CEO and development team to discuss design changes and overall user experience.",
        "Improved frontend elements by learning responsive design, button styling, and layout adjustments.",
       
      ],
    },
  
  ],
  projects: [
   
    {
      name: "Responsive Coffee Website",
      description:
        "Coffee Cart is an e-commerce coffee website where users can buy their favorite coffee products through a clean and responsive interface. The site features a visually appealing layout, product listings, and smooth interactions, creating a real shopping experience for users.",
      contribution:
        "I built the entire website in 2 hours, I have designed it in Dark brown theme.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          name: "Write Up",
          uri: "https://khushising0604.github.io/coffee/",
        },
      ],
      image: "/assets/croissant.svg",
    },
    {
      name: "Birthday Website",
      description:
        "A personalized and interactive web experience designed as a digital birthday surprise. The project blends creativity and front-end development to deliver an engaging and emotionally resonant interaction.",
      contribution:
        "Created this project as a heartfelt gesture to surprise a special friend on their birthday. I wanted to craft something meaningful, interactive, and lasting — a digital keepsake that would bring a smile and stay forever.",
      technologies: ["HTML5", "CSS3", "Javascript" , "Netlify"],
      links: [
        {
          name: "Website",
          uri: "https://stirring-sawine-689cd1.netlify.app/",
        },
      ],
      image: "/assets/croissant.svg",
    },
    {
      name: "Game Price Section",
      description:
        " A dynamic game price section where users can view game prices, with hover effects and clickable buttons that change color.",
      contribution:
        "I wrote the code when i was first time learning the Hover effects!",
      technologies: ["HTML", "JavaScript", "CSS"],
      links: [
        {
          name: "Devpost",
          uri: "https://scintillating-crisp-575673.netlify.app/",
        },
      ],
      image: "/assets/croissant.svg",
    },
    {
      name: "Croissant.one (This Website)",
      description: "A website to showcase my projects and resume.",
      contribution:
        "I built the entire website from scratch using React.js, TypeScript, and Chakra UI and deployed it on Vercel.",
      technologies: ["React", "Typescript", "Chakra-UI", "Vercel"],
      links: [
       
        {
          name: "Magic",
          uri: "doyoulikeit",
        },
      ],
      image: "/assets/croissant.svg",
    },

    {
      name: "Visionare",
      description: "A 3D Try-on Glasses Website.",
      contribution:
        "VISIONARE is a virtual eyewear try-on web app with real-time photo upload, product browsing, and e-commerce functionality.(it is still undergoing process)",
      technologies: [" React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Node.js", "Express.js", "Canvas API", "Netlify"],
      links: [
        {
          name: "Website",
          uri: "https://playful-tiramisu-d298b0.netlify.app/",
        },
        
      ],
      image: "/assets/croissant.svg",
    },

    {
      name: "Calculator",
      description: "A simple black and white calculator.",
      contribution:
        "It was my first project when i started my frontend journey.",
      technologies: ["HTML", "CSS", "Javascript"],
      links: [
       
        {
          name: "See",
          uri: "https://curious-kringle-b97c57.netlify.app/",
        },
      ],
      image: "/assets/croissant.svg",
    },
  ],
  skills: [
    {
      name: "TypeScript",
      icon: SiTypescript,
    },
    {
      name: "HTML",
      icon: SiHtml5,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
    {
      name: "CSS",
      icon: SiCss3,
    },
    {
      name: "React",
      icon: SiReact,
    },
   
    {
      name: "Git",
      icon: FaGit,
    },
  
  ],
  social: [
    {
      name: "Resume",
      icon: FaNewspaper,
      uri: "https://drive.google.com/file/d/1Eww9XYG5XPDWx4kgMCjlLM14topEL1Y4/view?usp=drivesdk",
      hover: {
        bg: ["brand.500", "brand.700"],
        color: "white",
      },
    },
    {
      name: "Github",
      icon: FaGithub,
      uri: "https://github.com/khushising0604",
      hover: {
        bg: ["gray.900", "gray.800"],
        color: "white",
      },
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      uri: "https://www.linkedin.com/in/khushi-singh-61b7a42a0/",
      hover: {
        bg: ["linkedin.500", "linkedin.700"],
        color: "white",
      },
    },
  ],

  contact: {
    email: "khushising0604@gmail.com",
  },
} as IMe;
