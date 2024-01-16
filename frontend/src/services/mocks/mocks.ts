import { faCodepen, faDiscord, faGithub, faGithubSquare, faInstagram, faLinkedinIn, faQuora, faSnapchat, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { EDUIMG_1, EDUIMG_2, EDUIMG_3, EDUIMG_4, EDUIMG_5, EDUIMG_6 } from '../../utils/constants';


export const greets = [
  'Software Engineer',
  'Code Enthusiast',
  'Problem Solver',
  'Innovative Developer',
  'Tech Explorer',
  'Coding Maestro',
  'Software Craftsman',
  'Algorithm Wizard',
  'Full Stack Developer',
  'Code Architect'
]
export const nameType = [
  `console.log('👋 Madhurendra');`,
  `print('Madhurendra 👋')`,
  `puts 'Madhur👋endra'`,
];

export const typeAttributes = {
    strings: greets,
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 10,
    showCursor: true,
    shuffle: true,
    smartBackspace:true
}
export const typeNameAttributes = {
    strings: nameType,
    typeSpeed: 100,
    showCursor: false,
    loop:true
}
export const socialMediaData = [
  { platform: 'github', icon: faGithubSquare, color: '#333', link: 'https://github.com/dev-madhurendra' },
  { platform: 'instagram', icon: faInstagram, color: '#e4405f', link: 'https://www.instagram.com/dev.madhurendra/' },
  { platform: 'twitter', icon: faXTwitter, color: '#000', link: 'https://twitter.com/devMadhurendra' },
  { platform: 'linkedin', icon: faLinkedinIn, color: '#0077b5', link: 'https://www.linkedin.com/in/dev-madhurendra' },
  { platform: 'quora', icon: faQuora, color: '#a82400', link: 'https://www.quora.com/profile/dev.madhurendra' },
  { platform: 'youtube', icon: faYoutube, color: '#ff0000', link: 'https://www.youtube.com/@dev.madhurendra' },
  { platform: 'discord', icon: faDiscord, color: '#7289da', link: 'https://discord.gg/dev-madhurendra' },
  { platform: 'codepen', icon: faCodepen, color: '#000000', link: 'https://codepen.io/devMadhurendra' },
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