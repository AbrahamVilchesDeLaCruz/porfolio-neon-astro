export interface Training {
  id: number;
  title: string;
  institution: string;
  duration: string;
  summary: string;
  technologies: string[];
  image: string;
  href: string;
}

export const trainingData: Training[] = [
  {
    id: 1,
    title: "Ingeniero Informático",
    institution: "Universidad Autónoma de Barcelona",
    duration: "2019 - 2024",
    summary:
      "Estudio integral de los fundamentos de la informática, principios de ingeniería de software y desarrollo práctico de aplicaciones.",
    technologies: [
      "C++",
      "Bases de Datos",
      "Java",
      "Sistemas Operativos",
      "Python",
      "Estructuras de Datos",
      "Algoritmos",
      "Redes",
      "Patrones de Diseño",
      "Test y Calidad de Software",
    ],
    image:
      "https://www.uab.cat/ca/identitatcorporativa/img/logotip-uab-principal-negatiu-fons-negre/logotip-versio-1-principal-negatiu-negre-1401x787.png",
    href: "https://www.uab.cat/web/estudiar/listado-de-grados/informacion-general/ingenieria-informatica-1216708258897.html?param1=1263367146646",
  },
  {
    id: 2,
    title: "Frontend Máster Online",
    institution: "Lemoncode",
    duration: "2024",
    summary:
      "Desarrollo frontend avanzado enfocado en React, TypeScript y prácticas modernas de desarrollo web.",
    technologies: [
      "React",
      "Next.js",
      "Angular",
      "Vue.js",
      "SolidJS",
      "Astro",
      "HTML5",
      "CSS3",
      "SASS",
      "CSS Animations",
      "Figma",
      "Webpack",
      "Vite",
      "Jest",
      "Vitest",
      "React Testing Library",
      "Playwright",
      "Cypress",
      "Fetch API",
      "Axios",
      "GraphQL",
      "Socket.io",
      "JWT",
      "OAuth 2.0",
      "Docker",
      "AWS",
      "Render",
      "GitHub Actions",
      "Micro Frontends",
      "PWA",
      "React Native",
      "Web Components",
      "Accessibility",
      "SOLID Principles",
      "Functional Programming",
    ],
    image:
      "https://images.squarespace-cdn.com/content/v1/56cdb491a3360cdd18de5e16/1536156479870-MM3AOEB6MLEQW1SD2ANU/3_white_200.png",
    href: "https://lemoncode.net/",
  },
  {
    id: 3,
    title: "Cursos de Codely.tv",
    institution: "Codely.tv",
    duration: "2024 - presente",
    summary:
      "Formación especializada en arquitectura de software, código limpio y mejores prácticas de desarrollo.",
    technologies: ["Arquitectura Hexagonal", "DDD", "Clean Code", "TDD", "PHP", "Node.js"],
    image:
      "https://pathwright.imgix.net/https%3A%2F%2Fcdn.filestackcontent.com%2Fapi%2Ffile%2FmR8srLQXSBKaRuMl5KFA%3Fsignature%3D888b9ea3eb997a4d59215bfbe2983c636df3c7da0ff8c6f85811ff74c8982e34%26policy%3DeyJjYWxsIjogWyJyZWFkIiwgInN0YXQiLCAiY29udmVydCJdLCAiZXhwaXJ5IjogNDYyMDM3NzAzMX0%253D?fit=crop&ixlib=python-1.1.0&w=500&s=87426dd64cc495cb74a08a80cc63edb2",
    href: "https://codely.com/usuarios/abraham-vilches-zxOFk6",
  },
];
