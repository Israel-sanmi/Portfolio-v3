import { StaticImageData } from "next/image";
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
import dootling from "../public/dootling.jpg";
import selfana from "../public/selfana.jpg";

export interface ProjectItem {
  id: number;
  projectImage: StaticImageData;
  projectName: string;
  projectDesc: string;
  github: string;
  link: string;
  secondaryLink?: string;
  secondaryLinkLabel?: string;
  tools: string[];
  category: "featured" | "project";
  accentColor?: string;
}

export const projectData: ProjectItem[] = [
  // ─── Featured Projects ───
  {
    id: 100,
    projectImage: dootling,
    projectName: "Dootling",
    projectDesc:
      "A powerful e-commerce infrastructure platform that empowers entrepreneurs to launch, manage, and scale their online stores effortlessly. From product catalogs and inventory management to secure checkout flows and real-time order tracking — Dootling delivers a complete storefront solution built for speed, reliability, and the modern market.",
    github: "",
    link: "https://dootling.com",
    secondaryLink: "https://app.dootling.com",
    secondaryLinkLabel: "Open Dashboard",
    tools: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Framer motion",
    ],
    category: "featured",
    accentColor: "#f97316",
  },
  {
    id: 101,
    projectImage: selfana,
    projectName: "Selfana",
    projectDesc:
      "A vibrant online marketplace connecting buyers and sellers across every category — electronics, fashion, vehicles, real estate, and more. Featuring intelligent search, verified seller profiles, in-app messaging, and location-based discovery, Selfana makes it effortless to find great deals or reach thousands of potential customers.",
    github: "",
    link: "https://selfana.com",
    secondaryLink: "https://app.selfana.com",
    secondaryLinkLabel: "Open Marketplace",
    tools: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Framer motion",
    ],
    category: "featured",
    accentColor: "#14b8a6",
  },

  // ─── Other Projects ───
  {
    id: 1,
    projectImage: lorem,
    projectName: "Lorem Woods",
    projectDesc:
      "A fully responsive e-commerce storefront for artisan wood products, powered by React on the frontend and Sanity.io as a headless CMS. Includes Stripe payment integration and state management with Zustand for a seamless shopping experience.",
    github: "https://github.com/Israel-sanmi/Lorem-Woods",
    link: "https://wood-fe-be.web.app/",
    tools: ["React", "Tailwind CSS", "Sanity.io", "Zustand", "Stripe"],
    category: "project",
  },
  {
    id: 2,
    projectImage: massage,
    projectName: "Praxis Massage",
    projectDesc:
      "A responsive booking platform for a massage studio, allowing clients to schedule appointments by selecting date, duration, and preferred time slot — built with React and styled with Tailwind CSS.",
    github: "",
    link: "https://chronogram-web.web.app/",
    tools: ["React", "Tailwind CSS"],
    category: "project",
  },
  {
    id: 3,
    projectImage: xyz,
    projectName: "XYZ E-Commerce",
    projectDesc:
      "A full-featured responsive e-commerce store built with React and Firebase for authentication and CMS. Includes Paystack payment integration and a custom Google Drive-to-Firebase image pipeline.",
    github: "https://github.com/Israel-sanmi/Ecommerce-project",
    link: "https://xyz-commerce.netlify.app/",
    tools: ["React", "Tailwind CSS", "Paystack", "Firebase"],
    category: "project",
  },
  {
    id: 4,
    projectImage: nike,
    projectName: "Nike Store",
    projectDesc:
      "A sleek, responsive Nike-inspired e-commerce experience built with React and Redux for state management. Features smooth Tailwind-powered animations and a modern product browsing interface.",
    github: "https://nike-ecommerce-israel.netlify.app/",
    link: "https://nike-ecommerce-israel.netlify.app/",
    tools: ["React", "Tailwind CSS", "Redux"],
    category: "project",
  },
  {
    id: 5,
    projectImage: portfolio,
    projectName: "Portfolio V2",
    projectDesc:
      "The previous iteration of my portfolio — a clean, responsive personal site built with React and Tailwind CSS to showcase my work and skills.",
    github: "https://github.com/Israel-sanmi/new-portfolio",
    link: "https://israel-sanmi.netlify.app/",
    tools: ["React", "Tailwind CSS"],
    category: "project",
  },
  {
    id: 6,
    projectImage: jungle,
    projectName: "Jungle Blue Hotel",
    projectDesc:
      "A visually rich hotel landing page featuring responsive layouts, elegant typography, and smooth transitions — crafted with React and Tailwind CSS.",
    github: "https://github.com/Israel-sanmi/Hotel-landing-page",
    link: "https://naughty-neumann-5d299c.netlify.app/",
    tools: ["React", "Tailwind CSS"],
    category: "project",
  },
  {
    id: 7,
    projectImage: chronoss,
    projectName: "Chronogram Landing",
    projectDesc:
      "A polished, responsive landing page built from scratch with vanilla HTML, CSS, and JavaScript — focused on clean design and fast performance.",
    github: "",
    link: "https://chronos-test.netlify.app/",
    tools: ["HTML", "CSS", "JavaScript"],
    category: "project",
  },
  {
    id: 8,
    projectImage: fintech,
    projectName: "Fintech Landing",
    projectDesc:
      "A modern fintech startup landing page with bold gradients, responsive layouts, and conversion-focused design — built with React and Tailwind CSS.",
    github: "https://github.com/Israel-sanmi/Fintech-Landing",
    link: "https://fintech-landing.netlify.app",
    tools: ["React", "Tailwind CSS"],
    category: "project",
  },
  {
    id: 9,
    projectImage: event,
    projectName: "Eventnoire Landing",
    projectDesc:
      "A vibrant, responsive landing page for an events platform — built with semantic HTML and custom CSS for a pixel-perfect, accessible design.",
    github: "",
    link: "https://noirexperience.netlify.app/",
    tools: ["HTML", "CSS"],
    category: "project",
  },
  {
    id: 10,
    projectImage: nerdy,
    projectName: "Nerd Eye Landing",
    projectDesc:
      "A creative, responsive landing page with bold visual design — handcrafted with HTML and CSS to deliver an engaging first impression.",
    github: "https://github.com/Israel-sanmi/Nerdeye-est",
    link: "https://nerrdeye.netlify.app/",
    tools: ["HTML", "CSS"],
    category: "project",
  },
  {
    id: 11,
    projectImage: netflix,
    projectName: "Netflix Clone",
    projectDesc:
      "A faithful Netflix homepage recreation with responsive grid layouts, hover effects, and attention to detail — built with HTML and CSS.",
    github: "https://github.com/Israel-sanmi/netflix-clone",
    link: "https://clever-wozniak-2d4753.netlify.app/",
    tools: ["HTML", "CSS"],
    category: "project",
  },
  {
    id: 12,
    projectImage: bgcolor,
    projectName: "Gradient Generator",
    projectDesc:
      "An interactive gradient background generator built with vanilla JavaScript — pick colors and watch live gradient previews update in real time.",
    github: "https://github.com/Israel-sanmi/Background-color-changer",
    link: "https://laughing-fermat-513034.netlify.app/",
    tools: ["HTML", "CSS", "JavaScript"],
    category: "project",
  },
  {
    id: 13,
    projectImage: login,
    projectName: "Login Interface",
    projectDesc:
      "A sleek, responsive login page design with modern form styling and validation-ready layout — built with HTML and CSS.",
    github: "",
    link: "https://log-in-page-toba.netlify.app/",
    tools: ["HTML", "CSS"],
    category: "project",
  },
];
