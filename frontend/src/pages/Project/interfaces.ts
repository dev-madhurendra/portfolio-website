export interface ProjectData {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  projectImage: string;
  githubUrl: string;
  deployedUrl: string;
  status?: string;      
  category: string;
  featured: boolean;
}
