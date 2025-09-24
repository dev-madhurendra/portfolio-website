import {
  faCodepen,
  faDiscord,
  faGithubSquare,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faInfo,
  faUserGraduate,
  faCode,
  faLaptopCode,
  faBriefcase,
  faEnvelope,
  faLightbulb,
  faHeart,
  faRocket,
  faUsers,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  Code,
  Rocket,
  Palette,
  Users,
  Target,
  Coffee,
  Award,
  Heart,
  Cpu,
  GitBranch,
  Globe,
  Layers,
  Zap,
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaJs,
  FaGitAlt,
  FaAws,
  FaDatabase,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaLinux,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGraphql,
  SiRedis,
  SiKubernetes,
  SiPostgresql,
  SiAngular,
  SiCplusplus,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiGo,
  SiJavascript,
  SiJenkins,
  SiJest,
  SiRedux,
  SiSpringboot,
  SiVuedotjs,
} from "react-icons/si";

export const socialLinks = [
  {
    label: "github",
    icon: faGithubSquare,
    url: "https://github.com/dev4beginners-gh",
  },
  {
    label: "twitter",
    icon: faXTwitter,
    url: "https://www.x.com/dev4beginners_x",
  },
  {
    label: "linkedin",
    icon: faLinkedinIn,
    url: "https://www.linkedin.com/in/dev-madhurendra",
  },
  {
    label: "discord",
    icon: faDiscord,
    url: "https://discord.gg/dev-madhurendra",
  },
  {
    label: "codepen",
    icon: faCodepen,
    url: "https://codepen.io/dev4beginners_cp",
  },
];

export const floatingCards = [
  { icon: "💻", label: "Clean Code" },
  { icon: "⚡", label: "Fast Performance" },
  { icon: "🛠️", label: "Full Stack Dev" },
  { icon: "☁️", label: "Cloud Integration" },
  { icon: "🔒", label: "Secure Apps" },
  { icon: "📱", label: "Responsive Design" },
];

export const typeAttributes = (typedRoles: string[]) => {
  return {
    strings: typedRoles,
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 2000,
    loop: true,
    showCursor: false,
  };
};

export const greetingAttributes = (greetings: string[]) => {
  return {
    strings: greetings,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 3000,
    loop: true,
  };
};

export const personalTraits = [
  {
    icon: faLightbulb,
    title: "Problem Solver",
    description:
      "I thrive on tackling complex challenges and finding elegant solutions.",
  },
  {
    icon: faUsers,
    title: "Team Player",
    description:
      "Collaborative mindset with excellent communication and leadership skills.",
  },
  {
    icon: faRocket,
    title: "Innovation Focused",
    description: "Always exploring new technologies and pushing boundaries.",
  },
  {
    icon: faHeart,
    title: "Passionate Coder",
    description:
      "Genuine love for clean code, best practices, and continuous learning.",
  },
];

export const techIconsAbout = [
  { icon: FaReact, title: "React", className: "react" },
  { icon: FaNodeJs, title: "Node.js", className: "nodejs" },
  { icon: SiMongodb, title: "MongoDB", className: "mongodb" },
  { icon: FaDocker, title: "Docker", className: "docker" },
  { icon: FaPython, title: "Python", className: "python" },
  { icon: FaJs, title: "JavaScript", className: "javascript" },
  { icon: SiTypescript, title: "TypeScript", className: "typescript" },
  { icon: SiNextdotjs, title: "Next.js", className: "nextjs" },
  { icon: SiTailwindcss, title: "Tailwind CSS", className: "tailwind" },
  { icon: FaGitAlt, title: "Git", className: "git" },
  { icon: FaAws, title: "AWS", className: "aws" },
  { icon: SiGraphql, title: "GraphQL", className: "graphql" },
  { icon: SiRedis, title: "Redis", className: "redis" },
  { icon: SiKubernetes, title: "Kubernetes", className: "kubernetes" },
  { icon: SiPostgresql, title: "PostgreSQL", className: "postgresql" },
  { icon: FaDatabase, title: "Database", className: "database" },
];

export const chipData = [
  { icon: Code, text: "Frontend Development" },
  { icon: Rocket, text: "React & Next.js" },
  { icon: Palette, text: "UI/UX Design" },
  { icon: Users, text: "Team Collaboration" },
  { icon: Target, text: "Problem Solving" },
  { icon: Coffee, text: "Node.js Backend" },
  { icon: Award, text: "Clean Code" },
  { icon: Heart, text: "Passionate Coding" },
  { icon: Rocket, text: "Performance Optimization" },
  { icon: Code, text: "JavaScript Expert" },
  { icon: Palette, text: "Responsive Design" },
  { icon: Users, text: "Client Communication" },
  { icon: Target, text: "Goal Oriented" },
  { icon: Coffee, text: "Database Management" },
  { icon: Award, text: "Best Practices" },

  { icon: Rocket, text: "Cloud Deployment" },
  { icon: Code, text: "TypeScript Mastery" },
  { icon: Palette, text: "Design Systems" },
  { icon: Users, text: "Agile & Scrum" },
  { icon: Coffee, text: "API Development" },
];

export const expertiseLevels = [
  {
    title: "Expert Level",
    icon: Zap,
    level: "95%",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Git"],
  },
  {
    title: "Advanced Level",
    icon: Cpu,
    level: "85%",
    technologies: ["TypeScript", "Python", "AWS", "Docker", "GraphQL"],
  },
  {
    title: "Proficient Level",
    icon: Layers,
    level: "75%",
    technologies: ["React Native", "Flutter", "DevOps", "UI/UX", "Testing"],
  },
];

export const stats = [
  { number: "25+", label: "Technologies Mastered", icon: Globe },
  { number: "100+", label: "Projects Completed", icon: Code },
  { number: "1000+", label: "Hours of Coding", icon: Zap },
  { number: "5+", label: "Years Experience", icon: GitBranch },
];

export const skillsData = [
  { label: "🌐 Frontend Development" },
  { label: "🛠️ Backend Development" },
  { label: "📡 API Development" },
  { label: "📊 Databases" },
  { label: "📚 Cyber Security" },
  { label: "📚 Continuous Learning" },
];
export const myname = "MADHURENDRA";
export const techIcons = [
  // Frontend
  { Icon: FaReact, color: "#61dafb" },
  { Icon: SiNextdotjs, color: "#000000" },
  { Icon: SiRedux, color: "#764ABC" },
  { Icon: SiAngular, color: "#dd1b16" },
  { Icon: SiVuedotjs, color: "#42b883" },
  { Icon: SiTailwindcss, color: "#38BDF8" },
  { Icon: FaHtml5, color: "#e34f26" },
  { Icon: FaCss3Alt, color: "#1572b6" },
  { Icon: SiJavascript, color: "#f7df1e" },
  { Icon: SiTypescript, color: "#3178c6" },

  // Backend
  { Icon: FaNodeJs, color: "#68a063" },
  { Icon: SiSpringboot, color: "#6DB33F" },
  { Icon: FaPython, color: "#3776AB" },
  { Icon: FaJava, color: "#007396" },
  { Icon: SiGo, color: "#00ADD8" },
  { Icon: SiGraphql, color: "#e535ab" },

  // Databases
  { Icon: FaDatabase, color: "#336791" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiPostgresql, color: "#4169e1" },
  { Icon: SiFirebase, color: "#ffca28" },

  // DevOps & Cloud
  { Icon: SiDocker, color: "#0db7ed" },
  { Icon: SiKubernetes, color: "#326CE5" },
  { Icon: FaAws, color: "#FF9900" },
  { Icon: SiJenkins, color: "#d33833" },
  { Icon: FaLinux, color: "#FCC624" },
  { Icon: FaGitAlt, color: "#F1502F" },

  // Tools & Testing
  { Icon: SiFigma, color: "#F24E1E" },
  { Icon: SiJest, color: "#99425b" },
  { Icon: SiCplusplus, color: "#00599C" },
];

export const getTypedTextOptions = (text: string = "") => ({
  strings: [text],
  typeSpeed: 40,
  backSpeed: 20,
  backDelay: 10,
  showCursor: false,
});

export const quickLinks = [
  "Home",
  "About",
  "Education",
  "Skill",
  "Project",
  "Experience",
  "Contact",
];

export const experienceData = [
  {
    id: 1,
    company: "Zemosolabs Pvt. Ltd.",
    totalDuration: "3+ Years",
    location: "Remote",
    companySize: "500+ employees",
    totalRoles: 3,
    promotions: 2,
    roles: [
      {
        id: 11,
        title: "Software Engineer 2",
        period: "Jul 2025 - Present",
        duration: "3 Month",
        isPromotion: true,
        description:
          "Leading frontend architecture decisions and mentoring junior developers. Spearheading the migration to modern React patterns and implementing performance optimizations across multiple product lines.",
        technologies: [
          "React 18",
          "TypeScript",
          "Next.js",
          "GraphQL",
          "AWS",
          "Docker",
          "Jest",
        ],
        achievements: [
          "Architected micro-frontend system serving 10K+ daily users",
          "Reduced bundle size by 60% through code splitting and optimization",
          "Led team of 8 developers across 3 different product verticals",
          "Implemented design system adopted by 12 development teams",
          "Improved Core Web Vitals scores by 40% across all applications",
        ],
      },
      {
        id: 12,
        title: "Software Engineer 1",
        period: "Jan 2025 - Jun 2025",
        duration: "6 months",
        isPromotion: true,
        description:
          "Developed scalable React applications and collaborated with cross-functional teams to deliver high-quality user experiences for enterprise clients.",
        technologies: [
          "React",
          "TypeScript",
          "Redux",
          "Styled Components",
          "Webpack",
        ],
        achievements: [
          "Built responsive dashboard increasing user engagement by 40%",
          "Implemented real-time features using WebSocket connections",
          "Collaborated with UX team to improve conversion rates by 25%",
          "Reduced technical debt by refactoring legacy codebase",
        ],
      },
      {
        id: 13,
        title: "Associate Software Engineer",
        period: "Feb 2023 - Jan 2025",
        duration: "6 months",
        isPromotion: true,
        description:
          "Developed scalable React applications and collaborated with cross-functional teams to deliver high-quality user experiences for enterprise clients.",
        technologies: [
          "React",
          "TypeScript",
          "Redux",
          "Styled Components",
          "Webpack",
        ],
        achievements: [
          "Built responsive dashboard increasing user engagement by 40%",
          "Implemented real-time features using WebSocket connections",
          "Collaborated with UX team to improve conversion rates by 25%",
          "Reduced technical debt by refactoring legacy codebase",
        ],
      },
    ],
  },
];

export const aboutData = {
  id: 1,
  image: "https://yourcdn.com/profile.jpg",
  name: "Madhurendra Nath Tiwari",
  title: "Full Stack Developer",
  shortDescription:
    "Passionate developer crafting digital experiences with precision and creativity.",
  longDescription: [
    "I'm a passionate full-stack developer with over 3 years of experience creating digital solutions that make a difference. My journey in tech started with a curiosity about how things work, and has evolved into a deep love for building scalable, user-centric applications.",
    "I specialize in modern web technologies including React, Node.js, and cloud platforms. What sets me apart is my attention to detail, commitment to clean code, and ability to translate complex requirements into intuitive user experiences.",
  ],
  stats: [
    { number: "3+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "100%", label: "Satisfaction Rate" },
  ],
  resumeLink: "https://yourcdn.com/resume.pdf",
};

export const educationData = [
  {
    id: 1,
    degree: "Bachelor Of Technology",
    field: "Information Technology",
    institution: "United College Of Engineering & Research",
    location: "Prayagraj, UP, India",
    duration: "2019 - 2023",
    grade: "CGPA: 7.5/10",
    type: "Bachelors",
    achievements: [
      "Specialized in Full-Stack Development",
      "Research in Machine Learning & AI",
      "Cracked HWI held by Infosys",
      "Developed Resume Builder Application for Students",
    ],
    courses: [
      "Advanced Algorithms",
      "System Design",
      "Database Management",
      "Web Technologies",
    ],
    icon: "🎓",
  },
  {
    id: 2,
    degree: "Senior Secondary Education",
    field: "Science (PCM + Computer)",
    institution: "Narpat Singh Inter College",
    location: "Ujrautikala, Sant Kabir Nagar, UP, India",
    duration: "2016 - 2018",
    grade: "Percentage: 88.8%",
    type: "Intermediate",
    achievements: [
      "Achieved District Rank 3 in academics",
      "President - Computer Science Society",
      "Successfully cleared IIT-JEE and multiple competitive examinations",
      "Selected for and participated in the SSB (Services Selection Board) Interview",
    ],
    courses: ["Programming Languages", "Physics", "Chemistry", "Mathematics"],
    icon: "🏆",
  },
  {
    id: 3,
    degree: "Higher Secondary Education",
    field: "Science",
    institution: "Kuri Lal Rungta Saraswati Vidya Mandir",
    location: "Khalilabad, Sant Kabir Nagar, UP, India",
    duration: "2014 - 2016",
    grade: "Percentage: 87.5%",
    type: "Highschool",
    achievements: [
      "School Topper in Mathematics",
      "National Level Olympiad Qualifier",
      "Head Boy - Student Council",
      "Best Student Award 2016",
    ],
    courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    icon: "📚",
  },
];

export const homeData = {
  name: "Madhurendra",
  introText:
    "I craft beautiful digital experiences that connect brands with their audiences. Specialized in creating intuitive interfaces and compelling user journeys that drive engagement and conversion.",
  typedRoles: ["Software", "Frotnend", "UI/UX", "Backend"],
  greeting: ["Hello, I'm", "Welcome", "Hola", "Bonjour"],
  imageUrl: "/gif/HeroSectionAnimationLight.gif",
  resumeUrl: "/resume.pdf",
  hireMeLink: "#contact",
};

export const projects = [
  {
    id: 1,
    title: "Barber PRO",
    description:
      "Allows customers to book digital tokens to avoid long wait times and barbers to manage queues efficiently.",
    technologies: ["Java", "Spring Boot", "Postgres", "React"],
    projectImage: "/png/barberpro-project.webp",
    githubUrl: "https://github.com/dev-madhurendra/BarberPRO.git",
    deployedUrl: "",
    status: "In Progress",
    category: "Full Stack",
    featured: true,
  },
  {
    id: 2,
    title: "School Website",
    description: "A school website for student management system",
    technologies: ["NextJs", "NestJS", "MongoDB"],
    projectImage: "/png/mbdpublicschool-project.webp",
    githubUrl: "https://github.com/dev-madhurendra/mbdpublicschool.git",
    deployedUrl: "https://www.mbdpublicschool.com/",
    category: "Full Stack",
    status: "",
    featured: true,
  },
  {
    id: 3,
    title: "Dynamic Portfolio",
    description:
      "Utilizes Node.js, Express, and React to create an interactive and engaging portfolio experience.",
    technologies: [
      "React",
      "Springboot",
      "NodeJS",
      "FastAPI",
      "MySQL",
      "Sonar Cloud",
      "CSS",
      "Material UI",
    ],
    projectImage: "/png/dynamic-portfolio-project.webp",
    githubUrl: "https://github.com/dev-madhurendra/portfolio-website.git",
    deployedUrl: "https://dev-madhurendra.in/",
    category: "Full Stack",
    status: "",
    featured: true,
  },
  {
    id: 4,
    title: "Todo App",
    description:
      "FastAPI and React-based application for efficient task management and organization",
    technologies: ["FastAPI", "React", "MySQL"],
    projectImage:
      "https://i.pinimg.com/736x/0a/88/ee/0a88ee2c7b4b6db2b2b445b5a4177349.jpg",
    githubUrl: "https://github.com/dev-madhurendra/fastapi.git",
    deployedUrl: "",
    category: "Full Stack",
    featured: false,
  },
  {
    id: 5,
    title: "Contact Management System",
    description: "C++ power this system for streamlined contact management.",
    technologies: ["React", "NodeJS"],
    projectImage:
      "https://i.pinimg.com/1200x/54/50/9e/54509e2a32823d2d8b4d773f3ea5c849.jpg",
    githubUrl:
      "https://github.com/dev-madhurendra/Contact-Management-System.git",
    deployedUrl: "",
    category: "Desktop",
    status: "",
    featured: false,
  },
  {
    id: 9,
    title: "AI Interviewer",
    description:
      "AI-powered platform for automated first-round candidate screening using LLMs, RAG, and VectorDB.",
    technologies: ["LLM", "React", "Python", "VectorDB", "RAG"],
    projectImage:
      "https://i.pinimg.com/1200x/b4/b5/a8/b4b5a8f4b0264feee53e18a50731911e.jpg",
    githubUrl: "",
    deployedUrl: "",
    category: "Full Stack GenAI",
    status: "",
    featured: false,
  },
  {
    id: 6,
    title: "Monkey Type Clone",
    description:
      "JavaScript, HTML, and CSS combine to replicate a dynamic typing practice platform.",
    technologies: ["HTML", "CSS", "JavaScript"],
    projectImage:
      "https://i.pinimg.com/564x/71/ac/d9/71acd95a12d19f77ef3ed20b20885c89.jpg",
    githubUrl: "https://github.com/dev-madhurendra/Typing-Speed-Test",
    deployedUrl: "https://dev-madhurendra.github.io/Typing-Speed-Test/",
    category: "Frontend",
    status: "",
    featured: false,
  },
  {
    id: 7,
    title: "School Website",
    description:
      "Created using HTML, CSS, and JS, offering a seamless experience for school-related information",
    technologies: ["HTML", "CSS", "JavaScript"],
    projectImage:
      "https://i.pinimg.com/736x/a2/0c/13/a20c13c50c237d9c95e0424eb195164b.jpg",
    githubUrl: "https://github.com/dev-madhurendra/KLRSVM",
    deployedUrl: "https://dev-madhurendra.github.io/KLRSVM/",
    category: "Frontend",
    status: "",
    featured: false,
  },
  {
    id: 8,
    title: "Sorting Visualizer",
    description:
      "HTML,CSS & JS bring this visualizer to life, aiding in understanding sorting algorithms.",
    technologies: ["HTML", "CSS", "JavaScript"],
    projectImage:
      "https://i.pinimg.com/564x/be/3e/3d/be3e3d999c85782ab1db1053b7f4847c.jpg",
    githubUrl: "https://github.com/dev-madhurendra/Sorting-Visualizer",
    deployedUrl: "",
    category: "Frontend",
    status: "",
    featured: false,
  },
  {
    id: 10,
    title: "Amplifier",
    description:
      "Developed with Microservices with FastAPI, MySQL, and React, for checking employees's security health checkup.",
    technologies: ["FastAPI", "React", "MySQL", "MUI"],
    projectImage:
      "https://i.pinimg.com/1200x/37/40/7d/37407d07cd2c4a34d4d3fea2dd6ce21b.jpg",
    githubUrl: "",
    deployedUrl: "",
    category: "Full Stack",
    status: "",
    featured: false,
  },
];

export const skillData = [
  {
    name: "Frontend Development",
    icon: "🎨",
    color: "#3b82f6, #06b6d4",
    skills: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 90, icon: "▲" },
      { name: "TypeScript", level: 88, icon: "📘" },
      { name: "Vue.js", level: 85, icon: "💚" },
      { name: "Angular", level: 80, icon: "🅰️" },
      { name: "Svelte", level: 75, icon: "🧡" },
      { name: "HTML5", level: 95, icon: "🌐" },
      { name: "CSS3", level: 92, icon: "🎨" },
      { name: "Sass", level: 88, icon: "💎" },
      { name: "Tailwind", level: 90, icon: "🌊" }
    ]
  },
  {
    name: "Backend Development",
    icon: "⚙️",
    color: "#10b981, #059669",
    skills: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Python", level: 85, icon: "🐍" },
      { name: "Java", level: 80, icon: "☕" },
      { name: "Go", level: 75, icon: "🐹" },
      { name: "PHP", level: 70, icon: "🐘" },
      { name: "Express.js", level: 88, icon: "🚀" },
      { name: "Django", level: 82, icon: "🎯" },
      { name: "Spring Boot", level: 78, icon: "🍃" },
      { name: "FastAPI", level: 80, icon: "⚡" },
      { name: "GraphQL", level: 85, icon: "📊" }
    ]
  },
  {
    name: "Database & Cloud",
    icon: "☁️",
    color: "#8b5cf6, #ec4899",
    skills: [
      { name: "PostgreSQL", level: 88, icon: "🐘" },
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "Redis", level: 80, icon: "🔴" },
      { name: "MySQL", level: 82, icon: "🐬" },
      { name: "AWS", level: 85, icon: "☁️" },
      { name: "Docker", level: 88, icon: "🐳" },
      { name: "Kubernetes", level: 75, icon: "⚓" },
      { name: "Firebase", level: 80, icon: "🔥" },
      { name: "Supabase", level: 85, icon: "⚡" },
      { name: "Vercel", level: 90, icon: "▲" }
    ]
  },
  {
    name: "Tools & Others",
    icon: "🛠️",
    color: "#f97316, #ef4444",
    skills: [
      { name: "Git", level: 95, icon: "📝" },
      { name: "GitHub", level: 92, icon: "🐙" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Figma", level: 85, icon: "🎨" },
      { name: "Postman", level: 88, icon: "📮" },
      { name: "Jest", level: 80, icon: "🃏" },
      { name: "Cypress", level: 75, icon: "🌲" },
      { name: "Webpack", level: 78, icon: "📦" },
      { name: "Vite", level: 85, icon: "⚡" },
      { name: "ESLint", level: 90, icon: "🔍" }
    ]
  },
  {
    name: "Automation",
    icon: "🤖",
    color: "#14b8a6, #0ea5e9",
    skills: [
      { name: "Selenium", level: 85, icon: "🧪" },
      { name: "Cucumber", level: 80, icon: "🥒" },
      { name: "Playwright", level: 82, icon: "🎭" },
      { name: "Ansible", level: 78, icon: "📜" },
      { name: "Puppeteer", level: 80, icon: "🎮" },
      { name: "Robot Framework", level: 75, icon: "🤖" }
    ]
  },
  {
    name: "DevOps",
    icon: "🚀",
    color: "#6366f1, #3b82f6",
    skills: [
      { name: "CI/CD", level: 90, icon: "🔄" },
      { name: "Jenkins", level: 85, icon: "🧩" },
      { name: "GitLab CI", level: 82, icon: "🦊" },
      { name: "Terraform", level: 80, icon: "🏗️" },
      { name: "ArgoCD", level: 75, icon: "🎯" },
      { name: "Helm", level: 78, icon: "⛵" }
    ]
  },
  {
    name: "Security",
    icon: "🛡️",
    color: "#f59e0b, #b91c1c",
    skills: [
      { name: "OWASP", level: 85, icon: "📚" },
      { name: "JWT", level: 88, icon: "🔑" },
      { name: "OAuth2", level: 90, icon: "🔒" },
      { name: "Penetration Testing", level: 75, icon: "🕵️" },
      { name: "Burp Suite", level: 78, icon: "🧰" },
      { name: "SSL/TLS", level: 88, icon: "🔐" }
    ]
  }
];

export const navLinks = [
  { to: "home", label: "Home", icon: faHouse },
  { to: "about", label: "About", icon: faInfo },
  { to: "education", label: "Education", icon: faUserGraduate },
  { to: "skill", label: "Skills", icon: faCode },
  { to: "project", label: "Projects", icon: faLaptopCode },
  { to: "experience", label: "Experience", icon: faBriefcase },
  { to: "contact", label: "Contact", icon: faEnvelope },
  { to: "testimonial", label: "Testimonial", icon: faQuoteLeft },
];
