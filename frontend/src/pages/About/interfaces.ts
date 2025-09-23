export interface AboutData {
  id: number;
  image: string;
  name: string;
  title: string;
  shortDescription: string;
  longDescription: string[];
  stats: { number: string; label: string }[];
  traits: { icon: string; title: string; description: string }[];
  chips: { icon: string; text: string; color: string }[];
  resumeLink: string;
}
