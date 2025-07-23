import type { Experience, Tech } from "./data/experience-data";
import { ExperienceCard } from "./ExperienceCards";

type ExperienceTimelineItemProps = {
  experience: Experience;
  index: number;
};

export const ExperienceTimelineItem = ({ experience, index }: ExperienceTimelineItemProps) => {
  const isEven = index % 2 === 0;
  return (
    <div className="relative w-full mb-16">
      {/* Mobile: bloque único */}
      <div className="flex flex-col md:hidden items-center ">
        <div className="bg-mariner-950 border-2 border-mariner-400 rounded-lg p-4 shadow-lg w-full max-w-xs flex flex-col items-center">
          <header className="flex items-center justify-around justify-items-cente gap-4">
            <div className="w-2/3">
              <h3 className="text-xl font-semibold text-mariner-100">{experience.role}</h3>
              <p className="text-md text-mariner-300">{experience.company}</p>
              <span className="text-sm text-mariner-400">{experience.period}</span>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <img
                src={experience.image}
                alt={`${experience.company} logo`}
                loading="lazy"
                className="max-w-full max-h-full"
              />
            </div>
          </header>
          <hr className="w-4/5 border-2 border-mariner-400 shadow-neon my-3" />
          <div className="mb-2 w-full">
            <h4 className="text-lg font-bold text-mariner-100 neon-effect mb-1 text-center">
              Backend
            </h4>
            <p className="text-mariner-300 leading-relaxed font-semibold text-center">
              {experience.description.backend}
            </p>
          </div>
          <div className="mb-4 w-full">
            <h4 className="text-lg font-bold text-mariner-100 neon-effect mb-1 text-center">
              Frontend
            </h4>
            <p className="text-mariner-300 leading-relaxed font-semibold text-center">
              {experience.description.frontend}
            </p>
          </div>
          <div className="mb-4 w-full">
            <h4 className="text-lg font-bold text-mariner-100 neon-effect mb-2 text-center">
              Stack Backend
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {experience.backendTechnologies.map((tech: Tech, idx: number) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="text-3xl">{tech.icon}</div>
                  <span className="text-xs text-mariner-200 mt-1">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <h4 className="text-lg font-bold text-mariner-100 neon-effect mb-2 text-center">
              Stack Frontend
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {experience.frontendTechnologies.map((tech: Tech, idx: number) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="text-3xl">{tech.icon}</div>
                  <span className="text-xs text-mariner-200 mt-1">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Desktop: alternancia timeline */}
      <div className="hidden md:flex flex-row items-center w-full">
        {/* Izquierda (info) */}
        <div className={`w-1/2 flex justify-center px-4 ${isEven ? "order-1" : "order-2"}`}>
          {/* <div className="bg-mariner-950 border-2 border-mariner-400 rounded-lg p-8 shadow-lg w-full max-w-md flex flex-col items-center">
            <img
              src={experience.image}
              alt={`${experience.company} logo`}
              loading="lazy"
              className="w-32 h-32 object-contain mb-6 "
            />
            <h3 className="text-2xl font-semibold text-mariner-100 mb-1 text-center">
              {experience.role}
            </h3>
            <p className="text-lg text-mariner-300 mb-1 text-center">{experience.company}</p>
            <span className="text-sm text-mariner-400 mb-4 block text-center">
              {experience.period}
            </span>
            <div className="mb-2">
              <h4 className="text-lg font-bold text-mariner-100 neon-effect mb-1 text-center">
                Backend
              </h4>
              <p className="text-mariner-300 leading-relaxed font-semibold text-center">
                {experience.description.backend}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-mariner-100 neon-effect mb-1 text-center">
                Frontend
              </h4>
              <p className="text-mariner-300 leading-relaxed font-semibold text-center">
                {experience.description.frontend}
              </p>
            </div>
          </div> */}
          <ExperienceCard experience={experience} />
        </div>
        {/* Centro: solo barra neon, sin círculos */}
        {/* La barra está en el contenedor padre */}
        {/* Derecha (stack) */}
        <div className={`w-1/2 flex justify-center px-4 ${isEven ? "order-2" : "order-1"}`}>
          <div className="bg-mariner-950 border-2 border-mariner-400 rounded-lg p-8 shadow-lg w-full max-w-md flex flex-col items-center">
            <div className="mb-4 w-full">
              <h4 className="text-lg font-bold text-mariner-100 neon-effect mb-2 text-center">
                Stack Backend
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {experience.backendTechnologies.map((tech: Tech, idx: number) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="text-3xl">{tech.icon}</div>
                    <span className="text-xs text-mariner-200 mt-1">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full">
              <h4 className="text-lg font-bold text-mariner-100 neon-effect mb-2 text-center">
                Stack Frontend
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {experience.frontendTechnologies.map((tech: Tech, idx: number) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="text-3xl">{tech.icon}</div>
                    <span className="text-xs text-mariner-200 mt-1">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
