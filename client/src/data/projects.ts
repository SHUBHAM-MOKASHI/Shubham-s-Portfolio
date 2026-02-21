import { SiReact, SiNodedotjs, SiTailwindcss, SiTypescript, SiPostgresql, SiMongodb, SiPython, SiCplusplus, SiJavascript, SiFramer, SiGit } from "react-icons/si";

export type ProjectCategory = "All" | "Full-Stack" | "Frontend" | "DSA";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing products, orders, and analytics with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Tailwind", "Recharts"],
    category: "Frontend",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Task Management API",
    description: "Robust REST API for task scheduling with user authentication, role-based access control, and email notifications.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    tags: ["Node.js", "Express", "PostgreSQL"],
    category: "Full-Stack",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "Pathfinding Visualizer",
    description: "Interactive visualization of Dijkstra's, A*, and BFS algorithms to demonstrate graph traversal logic.",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
    tags: ["JavaScript", "Algorithms", "CSS"],
    category: "DSA",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Social Media Clone",
    description: "Full-featured social platform with real-time chat, post sharing, and friend connections.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    tags: ["MERN Stack", "Socket.io", "Redux"],
    category: "Full-Stack",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 5,
    title: "Portfolio v1",
    description: "My first personal portfolio website showcasing early web development projects and skills.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    tags: ["HTML", "SCSS", "JS"],
    category: "Frontend",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 6,
    title: "Algorithm Library",
    description: "A collection of optimized C++ implementations for common competitive programming algorithms.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
    tags: ["C++", "STL", "Data Structures"],
    category: "DSA",
    githubUrl: "#",
    liveUrl: "#"
  }
];

export const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
];
