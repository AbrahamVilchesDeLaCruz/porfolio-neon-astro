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
    role: "Software Engineer",
    company: "Devio Tech",
    period: "Mayo 2025 - Actual",
    description: {
      backend:
        "Lideré la migración progresiva de un entorno legacy a DDD en producción, definiendo bounded contexts y APIs que redujeron el tiempo de incorporación de nuevas features y el riesgo técnico en cada deploy.",
      frontend:
        "Reescribí el CRM hacia arquitectura hexagonal en frontend, logrando aislamiento por contexto que mejoró la reutilización de componentes y aceleró el ciclo de desarrollo del equipo.",
    },
    backendTechnologies: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-4xl text-blue-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-500" /> },
      { name: "AWS", icon: <FaAws className="text-4xl text-blue-500" /> },
      { name: "Docker", icon: <FaDocker className="text-4xl text-blue-500" /> },
    ],
    frontendTechnologies: [
      { name: "React", icon: <FaReact className="text-4xl text-indigo-400" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-4xl text-indigo-400" /> },
      { name: "Vite", icon: <SiVite className="text-4xl text-purple-400" /> },
    ],
    image: "/logos/devio-tech.png",
  },
  {
    role: "Software Developer",
    company: "Feeder the Reaction App SL",
    period: "Junio 2024 - Abril 2025",
    description: {
      backend:
        "Diseñé e implementé microservicios con DDD y event-driven architecture usando RabbitMQ y NestJS, desacoplando dominios críticos y mejorando la resiliencia ante fallos en producción.",
      frontend:
        "Desarrollé interfaces React alineadas con los flows del producto, reduciendo fricción UX e iterando rápidamente con el equipo de producto sobre distintos casos de uso.",
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
      { name: "React", icon: <FaReact className="text-4xl text-indigo-400" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-4xl text-indigo-400" /> },
      { name: "Vite", icon: <SiVite className="text-4xl text-purple-400" /> },
    ],
    image: "/logos/feeder.png",
  },
  {
    role: "Full Stack Developer",
    company: "Sensing Tex S.L.",
    period: "Septiembre 2023 - Junio 2024",
    description: {
      backend:
        "Construí APIs REST y canales en tiempo real con Flask, Python y Socket.IO para soportar productos IoT conectados con alta exigencia operativa en entornos de monitorización continua.",
      frontend:
        "Implementé interfaces React + Tailwind adaptadas a distintos perfiles de usuario, priorizando claridad operativa y mantenibilidad del código en un dominio técnicamente complejo.",
    },
    backendTechnologies: [
      { name: "Flask", icon: <SiFlask className="text-4xl text-white" /> },
      { name: "Python", icon: <SiPython className="text-4xl text-blue-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-500" /> },
      { name: "Socket.IO", icon: <TbBrandSocketIo className="text-4xl text-teal-500" /> },
    ],
    frontendTechnologies: [
      { name: "React", icon: <FaReact className="text-4xl text-indigo-400" /> },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="text-4xl text-indigo-400" />,
      },
    ],
    image: "/logos/sensing-tex.png",
  },
];
