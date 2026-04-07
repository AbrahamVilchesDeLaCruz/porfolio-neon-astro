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
      {/* Mobile: bloque único simplificado */}
      <div className="flex flex-col md:hidden items-center">
        <div className="bg-mariner-950 border-2 border-mariner-400 rounded-lg p-4 shadow-lg w-full max-w-xs sm:max-w-md flex flex-col items-center">
          <header className="flex items-center justify-around gap-4 w-full">
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

          {/* Descripción unificada */}
          <div className="mb-4 w-full">
            <h4 className="text-base font-bold text-mariner-100 mb-2 text-center">¿Qué hice?</h4>
            <p className="text-mariner-300 leading-relaxed text-sm text-center mb-2">
              {experience.description.backend}
            </p>
            <p className="text-mariner-300 leading-relaxed text-sm text-center">
              {experience.description.frontend}
            </p>
          </div>

          {/* Stack unificado */}
          <div className="w-full">
            <h4 className="text-base font-bold text-mariner-100 mb-2 text-center">Stack</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {[...experience.backendTechnologies, ...experience.frontendTechnologies].map((tech: Tech, idx: number) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="text-2xl">{tech.icon}</div>
                  <span className="text-xs text-mariner-200 mt-1">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: alternancia timeline */}
      <div className="hidden md:flex flex-row items-center w-full">
        {/* Info card */}
        <div className={`w-1/2 flex justify-center px-4 ${isEven ? "order-1" : "order-2"}`}>
          <ExperienceCard experience={experience} />
        </div>
        {/* Stack card */}
        <div className={`w-1/2 flex justify-center px-4 ${isEven ? "order-2" : "order-1"}`}>
          <div className="bg-mariner-950 border-2 border-mariner-400 rounded-lg p-8 shadow-lg w-full max-w-xl flex flex-col items-center">
            <div className="mb-4 w-full">
              <h4 className="text-lg font-bold text-mariner-100 mb-2 text-center">Stack Backend</h4>
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
              <h4 className="text-lg font-bold text-mariner-100 mb-2 text-center">Stack Frontend</h4>
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
