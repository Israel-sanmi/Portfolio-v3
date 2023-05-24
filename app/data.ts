import lorem from "../public/lorem.png";
import massage from "../public/massage.jpg";
import xyz from "../public/xyz.png";
import nike from "../public/nike.jpg";
import portfolio from "../public/portfolio.jpg";
import jungle from "../public/jungle.jpg";
import chronoss from "../public/chronoss.jpg";
import fintech from "../public/fintech.jpg";
import nerdy from "../public/nerdy.jpg";
import event from "../public/event.jpg";
import netflix from "../public/netflix.jpg";
import bgcolor from "../public/bgcolor.jpg";
import login from "../public/login.jpg";

export const projectData = [
  {
    id: 1,
    projectImage: lorem,
    projectName: "Lorem woods",
    projectDesc: `An responsive ecommerce website created for wood based occupations. 
    It was built using reactjs as the Frontend and sanity.io 
    to run CMS operations(BE), i also implemented stripe as a payment method.`,
    github: "https://github.com/Israel-sanmi/Lorem-Woods",
    link: "https://wood-fe-be.web.app/",
    tools: ["ReactJs", "Tailwindcss", "Sanity.io", "Zustand", "Stripe"],
  },
  {
    id: 2,
    projectImage: massage,
    projectName: "Praxis Masssage",
    projectDesc: `A responsive massage booking website created using Reactjs. Massages can be booked depending on the date, duration and time.`,
    github: "",
    link: "https://chronogram-web.web.app/",
    tools: ["ReactJs", "Tailwindcss"],
  },
  {
    id: 3,
    projectImage: xyz,
    projectName: "XYZ e-commerce",
    projectDesc: `An ecommerce responsive website created with Reactjs for the frontend and firebase to run auth and CMS operations. I also added a code that converts google drive link into a link that works perfect on firebase database.`,
    github: "https://github.com/Israel-sanmi/Ecommerce-project",
    link: "https://xyz-commerce.netlify.app/",
    tools: ["ReactJs", "Tailwindcss", "Paystack", "Firebase", "React carousel"],
  },
  {
    id: 4,
    projectImage: nike,
    projectName: "nike e-commerce",
    projectDesc: `A nike ecommerce responsive website built with ReactJs and Redux. It also contains some nice animations created using tailwindcss.`,
    github: "https://nike-ecommerce-israel.netlify.app/",
    link: "https://nike-ecommerce-israel.netlify.app/",
    tools: ["ReactJs", "Tailwindcss", "Redux"],
  },
  {
    id: 5,
    projectImage: portfolio,
    projectName: "portfolio v2",
    projectDesc: `A respponsive portfolio website created using ReactJs and Tailwindcss.`,
    github: "https://github.com/Israel-sanmi/new-portfolio",
    link: "https://israel-sanmi.netlify.app/",
    tools: ["ReactJs", "Tailwindcss"],
  },
  {
    id: 6,
    projectImage: jungle,
    projectName: "Jungle blue hotel",
    projectDesc: `An hotel landing page, create with reactjs and tailwindcss to create responsive designs.`,
    github: "https://github.com/Israel-sanmi/Hotel-landing-page",
    link: "https://naughty-neumann-5d299c.netlify.app/",
    tools: ["ReactJs", "Tailwindcss"],
  },
  {
    id: 7,
    projectImage: chronoss,
    projectName: "Chronogram Landing",
    projectDesc: `A responsive landing page created with basic frontend tools (HTML, CSS and JS).`,
    github: "",
    link: "https://chronos-test.netlify.app/",
    tools: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    id: 8,
    projectImage: fintech,
    projectName: "Fintech Landing",
    projectDesc: `A responsive fintech landing page created with ReactJs and Tailwindcss.`,
    github: "https://github.com/Israel-sanmi/Fintech-Landing",
    link: "https://fintech-landing.netlify.app",
    tools: ["ReactJs", "Tailwindcss"],
  },
  {
    id: 9,
    projectImage: event,
    projectName: "Eventnoire Landing",
    projectDesc: `A responsive landing page created with basic frontend tools (HTML and CSS).`,
    github: "",
    link: "https://noirexperience.netlify.app/",
    tools: ["HTML", "CSS"],
  },
  {
    id: 10,
    projectImage: nerdy,
    projectName: "Nerd eye Landing",
    projectDesc: `A responsive landing page created with basic frontend tools (HTML and CSS).`,
    github: "https://github.com/Israel-sanmi/Nerdeye-est",
    link: "https://nerrdeye.netlify.app/",
    tools: ["HTML", "CSS"],
  },
  {
    id: 11,
    projectImage: netflix,
    projectName: "Netflix Landing",
    projectDesc: `A responsive landing page created with basic frontend tools (HTML and CSS).`,
    github: "https://github.com/Israel-sanmi/netflix-clone",
    link: "https://clever-wozniak-2d4753.netlify.app/",
    tools: ["HTML", "CSS"],
  },
  {
    id: 12,
    projectImage: bgcolor,
    projectName: "Gradient color",
    projectDesc: `A graident background color web app created using vanilla Javascript`,
    github: "https://github.com/Israel-sanmi/Background-color-changer",
    link: "https://laughing-fermat-513034.netlify.app/",
    tools: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    id: 13,
    projectImage: login,
    projectName: "Login Page",
    projectDesc: `A responsive login page created with basic frontend tools (HTML and CSS).`,
    github: "",
    link: "https://log-in-page-toba.netlify.app/",
    tools: ["HTML", "CSS"],
  },
];
