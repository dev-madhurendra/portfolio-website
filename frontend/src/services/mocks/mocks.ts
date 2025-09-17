import {
  faCodepen,
  faDiscord,
  faGithubSquare,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  EDUIMG_1,
  EDUIMG_2,
  EDUIMG_3,
  EDUIMG_4,
  EDUIMG_5,
  EDUIMG_6,
} from "../../utils/constants";
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
} from "@fortawesome/free-solid-svg-icons";
import { IFormField, SocialMediaUserData } from "../../interfaces/types";
import {
  Code,
  Rocket,
  Palette,
  Users,
  Target,
  Coffee,
  Award,
  Heart,
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
} from "react-icons/si";

export const greetingsHello = ["Hola ", "Bonjour", "Hello "];
export const greets = [
  "Software Engineer",
  "Code Enthusiast",
  "Problem Solver",
  "Innovative Developer",
  "Tech Explorer",
  "Bulding Dev4Beginners",
  "Coding Maestro",
  "Software Craftsman",
  "Algorithm Wizard",
  "Full Stack Developer",
  "Code Architect",
];
export const nameType = [
  `console.log('👋 Madhurendra');`,
  `print('Madhurendra 👋');`,
  `puts 'Madhur👋endra';`,
  `cout &lt;&lt; 'Madhurendra 👋';`,
  `echo "👋 Madhurendra";`,
  `System.out.println('👋 Madhurendra');`,
  `printf("👋 Madhurendra\\n");`,
  `fmt.Println("👋 Madhurendra")`,
  `Console.WriteLine("👋 Madhurendra");`,
  `echo '👋 Madhurendra'`,
  `IO.puts "👋 Madhurendra"`,
  `say "👋 Madhurendra"`,
  `echo '👋 Madhurendra!'`,
];

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

export const techIcons = [
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

export const skillsData = [
  { label: "🌐 Frontend Development" },
  { label: "🛠️ Backend Development" },
  { label: "📡 API Development" },
  { label: "📊 Databases" },
  { label: "📚 Cyber Security" },
  { label: "📚 Continuous Learning" },
];
export const myname = "MADHURENDRA";
export const educationImage = [
  EDUIMG_1,
  EDUIMG_2,
  EDUIMG_3,
  EDUIMG_4,
  EDUIMG_5,
  EDUIMG_6,
];
export const particlesColorValues = [
  "#2EB67D",
  "#ECB22E",
  "#E01E5B",
  "#36C5F0",
  "#EF5B0C",
  "#3330E4",
  "#FF9F29",
  "#570A57",
  "#40DFEF",
  "#E9D5DA",
  "#A6D1E6",
  "#BFFFF0",
  "#FF5733",
  "#3F51B5",
  "#4CAF50",
  "#FFC107",
  "#9C27B0",
  "#009688",
  "#FFEB3B",
  "#795548",
];
export const itemsPerPage = {
  mobile: 2,
  tablet: 2,
  laptop: 5,
};
export const projectPerPage = {
  mobile: 1,
  tablet: 1,
  laptop: 3,
};
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

export const formFields: IFormField[] = [
  { name: "Name", type: "text", field: "name" },
  { name: "Phone Number", type: "text", field: "phone" },
  { name: "Email", type: "email", field: "email" },
  { name: "Subject", type: "text", field: "subject" },
  { name: "Message", type: "textarea", field: "message" },
];

export const navLinks = [
  { to: "home", label: "Home", icon: faHouse },
  { to: "about", label: "About", icon: faInfo },
  { to: "education", label: "Education", icon: faUserGraduate },
  { to: "skill", label: "Skills", icon: faCode },
  { to: "project", label: "Projects", icon: faLaptopCode },
  { to: "experience", label: "Experience", icon: faBriefcase },
  { to: "contact", label: "Contact", icon: faEnvelope },
];

export const initialContactFormData = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

export const placeholders = [
  { width: "10rem", height: "3rem" },
  { width: "20rem" },
  { width: "20rem" },
  { width: "20rem" },
  { width: "20rem" },
  { width: "20rem" },
  { width: "10rem", height: "3rem" },
];

export const userData: Record<string, SocialMediaUserData> = {
  github: {
    personal: "dev-madhurendra",
    organization: "dev4beginners-gh",
    personalLink: "https://github.com/dev-madhurendra",
    orgLink: "https://github.com/dev4beginners-gh",
    icon: faGithubSquare,
  },
  instagram: {
    personal: "dev.madhurendra",
    organization: "dev4beginners_ig",
    personalLink: "https://www.instagram.com/dev.madhurendra",
    orgLink: "https://www.instagram.com/dev4beginners_ig",
    icon: faInstagram,
  },
  twitter: {
    personal: "dev_madhurendra",
    organization: "dev4beginners_x",
    personalLink: "https://x.com/dev_madhurendra",
    orgLink: "https://x.com/dev4beginners_x",
    icon: faXTwitter,
  },
};

export const tiltedImageStyle = (x: number, y: number) => ({
  transform: `rotateX(${y}deg) rotateY(${x}deg)`,
  transition: "transform 0.1s ease",
});
