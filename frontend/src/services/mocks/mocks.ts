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

export const educationData = [
  {
    id: 1,
    degree: "Master of Computer Applications",
    field: "Computer Science & Engineering",
    institution: "Indian Institute of Technology",
    location: "Delhi, India",
    duration: "2020 - 2022",
    grade: "CGPA: 8.7/10",
    type: "Masters",
    achievements: [
      "Specialized in Full-Stack Development",
      "Research in Machine Learning & AI",
      "Lead Developer - University Tech Club",
      "Published 2 research papers",
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
    degree: "Bachelor of Computer Applications",
    field: "Computer Applications",
    institution: "Delhi University",
    location: "New Delhi, India",
    duration: "2017 - 2020",
    grade: "Percentage: 85.4%",
    type: "Bachelors",
    achievements: [
      "Dean's List for 3 consecutive semesters",
      "President - Computer Science Society",
      "Winner - Inter-college Hackathon 2019",
      "Merit Scholarship Recipient",
    ],
    courses: [
      "Data Structures",
      "Programming Languages",
      "Software Engineering",
      "Mathematics",
    ],
    icon: "🏆",
  },
  {
    id: 3,
    degree: "Higher Secondary Education",
    field: "Science (PCM + Computer)",
    institution: "Delhi Public School",
    location: "Delhi, India",
    duration: "2015 - 2017",
    grade: "Percentage: 92.8%",
    type: "School",
    achievements: [
      "School Topper in Computer Science",
      "National Level Olympiad Qualifier",
      "Head Boy - Student Council",
      "Best Student Award 2017",
    ],
    courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    icon: "📚",
  },
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
export const educationImage = [
  EDUIMG_1,
  EDUIMG_2,
  EDUIMG_3,
  EDUIMG_4,
  EDUIMG_5,
  EDUIMG_6,
];
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
