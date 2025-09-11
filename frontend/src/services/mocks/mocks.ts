import { faCodepen, faDiscord, faGithub, faGithubSquare, faInstagram, faLinkedinIn, faQuora, faSnapchat, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { EDUIMG_1, EDUIMG_2, EDUIMG_3, EDUIMG_4, EDUIMG_5, EDUIMG_6 } from '../../utils/constants';
import { faHouse, faInfo, faUserGraduate, faCode, faLaptopCode, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IFormField, SocialMediaUserData } from '../../interfaces/types';

export const greetingsHello = [
  "Hola ", 
  "Bonjour",
  "Hello ",
];
export const greets = [
  'Software Engineer',
  'Code Enthusiast',
  'Problem Solver',
  'Innovative Developer',
  'Tech Explorer',
  'Bulding Dev4Beginners',
  'Coding Maestro',
  'Software Craftsman',
  'Algorithm Wizard',
  'Full Stack Developer',
  'Code Architect'
]
export const nameType = [
  `console.log('👋 Madhurendra');`,  // JavaScript
  `print('Madhurendra 👋');`,        // Python
  `puts 'Madhur👋endra';`,           // Ruby
  `cout &lt;&lt; 'Madhurendra 👋';`, // C++
  `echo "👋 Madhurendra";`,          // PHP
  `System.out.println('👋 Madhurendra');`,  // Java
  `printf("👋 Madhurendra\\n");`,     // C
  `fmt.Println("👋 Madhurendra")`,    // Go
  `Console.WriteLine("👋 Madhurendra");`, // C#
  `echo '👋 Madhurendra'`,            // Bash
  `IO.puts "👋 Madhurendra"`,         // Elixir
  `say "👋 Madhurendra"`,             // Swift
  `echo '👋 Madhurendra!'`,           // Shell script
];


export const typeAttributes = (stringsArray: string[]) => ({
  strings: stringsArray,
  typeSpeed: 80,
  backSpeed: 40,
  backDelay: 10,
  showCursor: true,
  shuffle: true,
  smartBackspace: true,
});

export const socialMediaData = [
  { platform: 'github', icon: faGithubSquare, color: '#333', link: 'https://github.com/dev4beginners-gh' },
  { platform: 'instagram', icon: faInstagram, color: '#e4405f', link: 'https://www.instagram.com/@dev4beginners_ig' },
  { platform: 'twitter', icon: faXTwitter, color: '#000', link: 'https://www.x.com/dev4beginners_x' },
  { platform: 'linkedin', icon: faLinkedinIn, color: '#0077b5', link: 'https://www.linkedin.com/in/dev-madhurendra' },
  { platform: 'quora', icon: faQuora, color: '#a82400', link: 'https://www.quora.com/profile/dev.madhurendra' },
  { platform: 'youtube', icon: faYoutube, color: '#ff0000', link: 'https://www.youtube.com/@dev4beginners_yt' },
  { platform: 'discord', icon: faDiscord, color: '#7289da', link: 'https://discord.gg/dev-madhurendra' },
  { platform: 'codepen', icon: faCodepen, color: '#000000', link: 'https://codepen.io/dev4beginners_cp' },
  { platform: 'snapchat', icon: faSnapchat, color: '#fffc00', link: 'https://www.snapchat.com/add/dev-madhurendra' },
];
export const skillsData = [
    { label: '🌐 Frontend Development'},
    { label: '🛠️ Backend Development'},
    { label: '📡 API Development'},
    { label: '📊 Databases'},
    { label: '📚 Cyber Security'},
    { label: '📚 Continuous Learning'},
];
export const myname = "MADHURENDRA"
export const educationImage = [
  EDUIMG_1,
  EDUIMG_2,
  EDUIMG_3,
  EDUIMG_4,
  EDUIMG_5,
  EDUIMG_6
]
export const particlesColorValues = [
  "#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0", "#EF5B0C",
  "#3330E4", "#FF9F29", "#570A57", "#40DFEF", "#E9D5DA",
  "#A6D1E6", "#BFFFF0", "#FF5733", "#3F51B5", "#4CAF50",
  "#FFC107", "#9C27B0", "#009688", "#FFEB3B", "#795548"
]
export const itemsPerPage = {
  mobile: 2,
  tablet: 2,
  laptop: 5,
};
export const projectPerPage = {
  mobile: 1,
  tablet: 1,
  laptop: 3,
}
export const getTypedTextOptions = (text: string = "") => ({
  strings: [text],
  typeSpeed: 40,
  backSpeed: 20,
  backDelay: 10,
  showCursor: false,
})

export const socialLinks = [
  { icon: faLinkedinIn, link: "https://www.linkedin.com/in/dev-madhurendra/" },
  { icon: faGithub, link: "https://www.github.com/dev-madhurendra" },
  { icon: faInstagram, link: "https://www.instagram.com/dev.madhurendra/" },
  { icon: faXTwitter, link: "https://www.x.com/devMadhurendra/" },
];

export const quickLinks = ["Home", "About", "Education", "Skill", "Project", "Experience", "Contact"];

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
}

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
      personal: 'dev-madhurendra',
      organization: 'dev4beginners-gh',
      personalLink: 'https://github.com/dev-madhurendra',
      orgLink: 'https://github.com/dev4beginners-gh',
      icon: faGithubSquare
    },
    instagram: {
      personal: 'dev.madhurendra',
      organization: 'dev4beginners_ig',
      personalLink: 'https://www.instagram.com/dev.madhurendra',
      orgLink: 'https://www.instagram.com/dev4beginners_ig',
      icon: faInstagram
    },
    twitter: {
      personal: 'dev_madhurendra',
      organization: 'dev4beginners_x',
      personalLink: 'https://x.com/dev_madhurendra',
      orgLink: 'https://x.com/dev4beginners_x',
      icon: faXTwitter
    },
  };


export const tiltedImageStyle = (x: number, y: number) => ({
  transform: `rotateX(${y}deg) rotateY(${x}deg)`,
  transition: 'transform 0.1s ease',
})
