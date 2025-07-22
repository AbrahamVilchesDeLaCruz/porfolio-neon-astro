import type { ReactNode } from "react";
import { FaReact, FaSymfony, FaNodeJs, FaAws, FaDocker } from "react-icons/fa";
import {
  SiNestjs,
  SiMysql,
  SiTailwindcss,
  SiVite,
  SiRabbitmq,
  SiFlask,
  SiPython,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: {
    backend: string;
    frontend: string;
  };
  backendTechnologies: Tech[];
  frontendTechnologies: Tech[];
  image: string;
}
export interface Tech {
  name: string;
  icon: ReactNode;
}

export const experiences: Experience[] = [
  {
    role: "Software Developer",
    company: "Devio Tech",
    period: "Mayo 2025 - Actual",
    description: {
      backend:
        "Diseño y desarrollo de soluciones completas. Implementación de APIs escalables, garantizando robustez y flexibilidad.",
      frontend: "Diseño y desarrollo de CRM con React, mejorando la experiencia del usuario.",
    },
    backendTechnologies: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-4xl text-blue-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-500" /> },
      { name: "RabbitMQ", icon: <SiRabbitmq className="text-4xl text-orange-500" /> },
      { name: "Socket.IO", icon: <TbBrandSocketIo className="text-4xl text-teal-500" /> },
      { name: "AWS", icon: <FaAws className="text-4xl text-blue-500" /> },
      { name: "Docker", icon: <FaDocker className="text-4xl text-blue-500" /> },
    ],
    frontendTechnologies: [
      { name: "React", icon: <FaReact className="text-4xl text-mariner-400" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-4xl text-mariner-400" /> },
      { name: "Vite", icon: <SiVite className="text-4xl text-purple-400" /> },
    ],
    image:
      "https://gdm-catalog-fmapi-prod.imgix.net/ProviderLogo/b5730ad9-3d42-4993-a5c9-e65cc58d26c2.png",
  },
  {
    role: "Software Developer",
    company: "Feeder the Reaction App SL",
    period: "Junio 2024 - Abril 2025",
    description: {
      backend:
        "Diseño y desarrollo de soluciones completas siguiendo principios de arquitectura limpia (DDD) y patrones de Event-Driven Architecture. Implementación de APIs escalables y microservicios, garantizando robustez y flexibilidad.",
      frontend:
        "Diseño y desarrollo de interfaces de usuario modernas y dinámicas con React, mejorando la experiencia del usuario en diversos productos.",
    },
    backendTechnologies: [
      { name: "Symfony", icon: <FaSymfony className="text-4xl" /> },
      { name: "NestJS", icon: <SiNestjs className="text-4xl text-pink-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-4xl text-blue-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-500" /> },
      { name: "RabbitMQ", icon: <SiRabbitmq className="text-4xl text-orange-500" /> },
      { name: "Socket.IO", icon: <TbBrandSocketIo className="text-4xl text-teal-500" /> },
      { name: "AWS", icon: <FaAws className="text-4xl text-blue-500" /> },
      { name: "Docker", icon: <FaDocker className="text-4xl text-blue-500" /> },
    ],
    frontendTechnologies: [
      { name: "React", icon: <FaReact className="text-4xl text-mariner-400" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-4xl text-mariner-400" /> },
      { name: "Vite", icon: <SiVite className="text-4xl text-purple-400" /> },
    ],
    image:
      "https://cdn.prod.website-files.com/5ec807c5d85901644b2db3b2/5fb637f59666baea40468771_logo_h.png",
  },
  {
    role: "Full Stack Developer",
    company: "Sensing Tex S.L.",
    period: "Septiembre 2023 - Junio 2024",
    description: {
      backend:
        "Desarrollo de APIs RESTful y APIs Socket con Flask y Python, usado MongoDB cómo base de datos NoSQL",
      frontend:
        "Diseño y desarrollo de interfaces de usuario modernas y dinámicas con React y Tailwind mejorando la experiencia del usuario en diversos productos.",
    },
    backendTechnologies: [
      { name: "Flask", icon: <SiFlask className="text-4xl text-white" /> },
      { name: "Python", icon: <SiPython className="text-4xl text-blue-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-500" /> },
      { name: "Socket.IO", icon: <TbBrandSocketIo className="text-4xl text-teal-500" /> },
    ],
    frontendTechnologies: [
      { name: "React", icon: <FaReact className="text-4xl text-mariner-400" /> },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="text-4xl text-mariner-400" />,
      },
    ],
    image: "https://sensingtex.com/wp-content/uploads/2017/11/Logo-Sensingtex.png",
  },
];
