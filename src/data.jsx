import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink, FiGithub } from "react-icons/fi";

import FrameAndPhrase from "./assets/frameandphrase.png";
import CipherGen from "./assets/ciphergen.png";
import CashCode from "./assets/cashcode.png";
import OrganizeIt from "./assets/organizeit.png";
import SelfDevelopmentGoals from "./assets/selfdevelopmentgoals.png";
import Ecommerce from "./assets/ecommerce.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const portfolio = [
  {
    id: 1,
    img: FrameAndPhrase,
    title: "Blogging Website",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Blogging Website",
      },
      {
        icon: <FiGithub />,
        title: "Github : ",
        desc: (
          <a
            href="https://github.com/amank736836/Blogging-Website"
            target="_blank"
          >
            Blogging Website
          </a>
        ),
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "ReactJs - Appwrite",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a href="https://frameandphrase.vercel.app/" target="_blank">
            Frame and Phrase
          </a>
        ),
      },
    ],
  },

  {
    id: 2,
    img: CipherGen,
    title: "Password Generator",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Password Generator",
      },
      {
        icon: <FiGithub />,
        title: "Github : ",
        desc: (
          <a
            href="https://github.com/amank736836/password-Generator"
            target="_blank"
          >
            Password Generator
          </a>
        ),
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a href="https://ciphergen.vercel.app/" target="_blank">
            CipherGen
          </a>
        ),
      },
    ],
  },

  {
    id: 3,
    img: CashCode,
    title: "Currency Converter",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Currency Converter",
      },
      {
        icon: <FiUser />,
        title: "Github : ",
        desc: (
          <a
            href="https://github.com/amank736836/currency-Convertor"
            target="_blank"
          >
            Currency Converter
          </a>
        ),
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a href="https://cashcode.vercel.app/" target="_blank">
            CashCode
          </a>
        ),
      },
    ],
  },

  {
    id: 4,
    img: OrganizeIt,
    title: "To Do List",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "To Do List",
      },
      {
        icon: <FiGithub />,
        title: "Github : ",
        desc: (
          <a
            href="https://github.com/amank736836/todo-ContextLocal---React"
            target="_blank"
          >
            To Do List
          </a>
        ),
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS, Context API",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a href="https://organizeit.vercel.app/" target="_blank">
            OrganizeIt
          </a>
        ),
      },
    ],
  },
  {
    id: 5,
    img: SelfDevelopmentGoals,
    title: "Landing Page",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Landing Page",
      },
      {
        icon: <FiGithub />,
        title: "Github : ",
        desc: (
          <a href="https://github.com/amank736836/SDG" target="_blank">
            Landing Page
          </a>
        ),
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Html - Css - Javascript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a href="https://selfdevelopmentgoals.vercel.app/" target="_blank">
            SelfDevelopmentGoals
          </a>
        ),
      },
    ],
  },

  {
    id: 6,
    img: Ecommerce,
    title: "Ecommerce Website",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Ecommerce Website",
      },
      {
        icon: <FiGithub />,
        title: "Github : ",
        desc: (
          <a
            href="https://github.com/amank736836/Products-Server"
            target="_blank"
          >
            Ecommerce Website
          </a>
        ),
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "MongoDb - ExpressJs - NodeJs",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a href="https://products-server-u5b7.onrender.com/" target="_blank">
            Ecommerce
          </a>
        ),
      },
    ],
  },
];

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Aman",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Kumar",
  },

  {
    id: 3,
    title: "Age : ",
    description: "20 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Jaipur,Rajasthan,India",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+91 62847 36836",
  },

  {
    id: 8,
    title: "Email : ",
    description: "amankarguwal0@gmail.com",
  },

  {
    id: 9,
    title: "LinkedIn : ",
    description: "amank736836",
  },

  {
    id: 10,
    title: "Languages : ",
    description: "English, Hindi, Punjabi",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
  },

  {
    id: 2,
    title: "Javascript",
  },

  {
    id: 3,
    title: "Css",
  },
  {
    id: 10,
    title: "C",
  },
  {
    id: 4,
    title: "C++",
  },

  {
    id: 5,
    title: "Java",
  },

  {
    id: 6,
    title: "MongoDb",
  },

  {
    id: 7,
    title: "ExpressJs",
  },

  {
    id: 8,
    title: "React",
  },

  {
    id: 9,
    title: "NodeJs",
  },
];

export const resume = [
  {
    id: 1,
    category: "education",
    icon: <FaGraduationCap />,
    year: "Sep 2021 – May 2025",
    title: "Bachelor Of Engineering <span> Chitkara University </span>",
    desc: "Computer Science Engineering – GPA: 9.12 – Solan, Himachal Pradesh",
  },

  {
    id: 2,
    category: "education",
    icon: <FaGraduationCap />,
    year: "May 2020 – June 2021",
    title: "Higher Secondary  <span> DAV Centenary Public School </span>",
    desc: "Percentage: 82.5% – Jaipur, Rajasthan",
  },

  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "May 2018 – April 2019",
    title: "Secondary <span> DAV Public School </span>",
    desc: "Percentage: 74.8% – Mohali, Punjab",
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
