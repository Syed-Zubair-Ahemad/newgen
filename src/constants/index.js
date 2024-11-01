import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  // docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  // jobit,
  // tripguide,
  // carrent,
  threejs,
  // nikePro,
  // nikeJS,
  worldHotel,
  // Pizzashop,
  // natours,
  // trillo,
  // forkify,
  pizzaJs,
  recipeJS,
  travelJS,
  hotelJS,
  lcs,
  aora,
} from "../assets";

export const navLinks = [
  // {
  //   id: "about",
  //   title: "CV",
  // },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI ",
    icon: web,
  },
  {
    title: "ML",
    icon: mobile,
  },
  {
    title: "LLM",
    icon: backend,
  },
  {
    title: "Data & Business Analyst",
    icon: creator,
  },
  {
    title: "Web Developement",
    icon: creator,
  },
];

const technologies = [
  {
    id: 1,
    name: "HTML 5",
    icon: html,
  },
  {
    id: 2,
    name: "CSS 3",
    icon: css,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: javascript,
  },
  {
    id: 4,
    name: "TypeScript",
    icon: typescript,
  },
  {
    id: 5,
    name: "React JS",
    icon: reactjs,
  },
  {
    id: 6,
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    id: 8,
    name: "Node JS",
    icon: nodejs,
  },
  {
    id: 9,
    name: "MongoDB",
    icon: mongodb,
  },
  {
    id: 10,
    name: "Three JS",
    icon: threejs,
  },
  {
    id: 11,
    name: "git",
    icon: git,
  },
  {
    id: 12,
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Low Code System Pvt Ltd",
    icon: lcs, 
    iconBg: "#383E56",
    date: "Feb 2024 - present",
    points: [
      "Developing and maintaining web applications using React.js & React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "WildOasis",
    description:
      "An internal hotel management system allows employees to manage everything about hotel bookings, cabins, and guests",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "charts",
        color: "pink-text-gradient",
      },
      {
        name: "React Query",
        color: "green-text-gradient",
      },
      {
        name: "React Hook Form",
        color: "pink-text-gradient",
      },
      // (React Query, Styled Components, React Hook Form, Supabase, advanced compound component pattern, authentication, charts, dark mode, professional application planning and development)
    ],
    image: worldHotel,
    source_code_link: "https://github.com/mohammedsanaved/wildOasis",
    demo_link: "https://wild-oasis-vert.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
// In the '../assets/index.js' file
// export { mobile, backend, creator, web };
