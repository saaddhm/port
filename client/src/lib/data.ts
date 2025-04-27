import errika from '../assets/images/errika.png';
import bq from '../assets/images/bq.png';
import anime from '../assets/images/anime.png';

// Skills Data
export const frontendSkills = [
  "React.js",
  "Angular",
  "JavaScript / TypeScript",
  "HTML5 / CSS3",
  "SASS / SCSS",
  "Tailwind CSS"
];

export const backendSkills = [
  "Node.js",
  "Express.js",
  "Java",
  "Python",
  "RESTful API",
  "GraphQL"
];

export const mobileSkills = [
  "React Native",
  "Flutter",
  "iOS Development",
  "Android Development",
  "Responsive Design"
];

export const databaseSkills = [
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "Redis"
];

export const otherSkills = [
  "Méthodes Agiles",
  "Git",
  "CI/CD",
  "Docker",
  "AWS",
  "Heroku",
  "Testing (Jest, Mocha)",
  "UX/UI Design",
  "Webpack",
  "Next.js",
  "SEO"
];

// Experience Data
export const experiences = [
  {
    
    title: "Développeur Full Stack",
    company: "Sofrecom",
    period: "Janvier 2018 - 2019",
    description: "Développement d'applications web avec React.js, Node.js et MongoDB. Mise en place de solutions responsives et optimisation des performances. Travail en méthodologie Agile au sein d'une équipe internationale."
  },
  {
    
    title: "Développeur Full Stack",
    company: "AMESIP",
    period: "Juin 2019 - Décembre 2019",
    description: "Création de sites web dynamiques avec JavaScript et PHP. Intégration de systèmes de gestion de contenu. Collaboration avec l'équipe design pour implémenter des interfaces utilisateur."
  },
  {
    title: "Développeur Full Stack",
    company: "Festival d'olive au Coeur",
    period: "Février 2023 - Présent",
    description: "developpement d'une application web pour la gestion des événements du festival. Utilisation de React.js et Node.js pour créer une interface utilisateur interactive et responsive. Collaboration avec l'équipe de design pour assurer une expérience utilisateur optimale"
  }
];

// Education Data
export const education = [
  {
    degree: "Licence en Développement Informatique",
    institution: "Université Ibn tofail",
    period: "2020 - 2021",
    description: "Spécialisation en développement d'applications web et mobiles. Projet de fin d'études: Plateforme e-learning avec React.js et Node.js."
  },
  {
    degree: "Diplôme en Développement Informatique",
    institution: "INSTITUT SPECIALISE DE TECHNOLOGIE APPLIQUEE AIN ATIQ.",
    period: "2016 - 2018",
    description: "Formation complète en programmation et design web. Compétences acquises en bases de données, langages de programmation et méthodologies de projet."
  },
  {
    degree: "Baccalauréat Sciences de la Vie et de la Terre",
    institution: "Lycée Chefchaouni",
    period: "2015 - 2016",
    description: ""
  }
];

// Projects Data
export const projects = [
  {img: errika,
    title: "Eureka Solutions & Development.",
    description: "Ce projet vise à modéliser un processus de gestion de missions techniques impliquant plusieurs rôles métiers : gestionnaire, agent de terrain, chiffreur, administrateur et gérant. Il permet de suivre l’évolution d’une mission depuis sa création jusqu’à la validation finale des devis, factures et rapports. Dev par SAAD DAHMANE.",
    technologies: [
      { name: "React", bgColor: "bg-blue-100", textColor: "text-blue-800" },
      { name: "Node.js", bgColor: "bg-green-100", textColor: "text-green-800" },
      { name: "MongoDB", bgColor: "bg-yellow-100", textColor: "text-yellow-800" }
    ],
    demoLink: "#",
    githubLink: "https://github.com/"
  },
  {
   img: bq, 
    title: "Gestion des cheques",
    description: "Application web full-stack développée avec React.js en frontend, Node.js et Express.js en backend, utilisant MySQL pour gérer une base de données relationnelle. Elle permet la gestion dynamique de données avec API REST.",
    technologies: [
      { name: "Angular", bgColor: "bg-purple-100", textColor: "text-purple-800" },
      { name: "Express", bgColor: "bg-blue-100", textColor: "text-blue-800" },
      { name: "PostgreSQL", bgColor: "bg-pink-100", textColor: "text-pink-800" }
    ],
    demoLink: "#",
    githubLink: "https://github.com/saaddhm/Gestion-des-ch-ques"
  },
  {
   img: anime, 
    title: "Anime-Explorer App",
    description: "Anime Explorer is a mobile app built with Flutter, offering an extensive anime catalog using API A. Discover, search, and save your favorite anime with ease. Enjoy detailed anime info, personalized lists, and a sleek, cross-platform design for Android and iOS, delivering a seamless anime exploration experience.",
    technologies: [
      { name: "Flutter", bgColor: "bg-blue-100", textColor: "text-blue-800" },
      { name: "Firebase", bgColor: "bg-green-100", textColor: "text-green-800" },
      { name: "Dart", bgColor: "bg-red-100", textColor: "text-red-800" }
    ],
    demoLink: "#",
    githubLink: "https://github.com/saaddhm/Anime_Explorer_v2"
  }
];
