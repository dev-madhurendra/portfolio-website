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

export 
  const experienceData = [
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
        }
      ],
    },
  ];

export const navLinks = [
  { to: "home", label: "Home", icon: faHouse },
  { to: "about", label: "About", icon: faInfo },
  { to: "education", label: "Education", icon: faUserGraduate },
  { to: "skill", label: "Skills", icon: faCode },
  { to: "project", label: "Projects", icon: faLaptopCode },
  { to: "experience", label: "Experience", icon: faBriefcase },
  { to: "contact", label: "Contact", icon: faEnvelope },
  { to: "testimonial", label: "Testimonial", icon: faQuoteLeft }

];

