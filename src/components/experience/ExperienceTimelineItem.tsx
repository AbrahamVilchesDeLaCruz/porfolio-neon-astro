import type { Experience, Tech } from "./data/experience-data";

type ExperienceTimelineItemProps = {
  experience: Experience;
  index: number;
};

export const ExperienceTimelineItem = ({ experience, index }: ExperienceTimelineItemProps) => {
  const allTechs = [...experience.backendTechnologies, ...experience.frontendTechnologies];

  return (
    <div className="w-full border border-mariner-700 hover:border-mariner-400 rounded-xl overflow-hidden transition-colors duration-300 bg-mariner-950/40">
      {/* Header: logo + rol + empresa + período */}
      <div className="flex items-center gap-5 px-6 py-4 border-b border-mariner-800">
        <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-mariner-950 rounded-lg p-2 border border-mariner-700">
          <img
            src={experience.image}
            alt={`${experience.company} logo`}
            loading="lazy"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-mariner-100 leading-tight">{experience.role}</h3>
          <p className="text-sm text-mariner-300">{experience.company}</p>
          <span className="text-xs text-mariner-500">{experience.period}</span>
        </div>
      </div>

      {/* Descripción */}
      <div className="px-6 py-4 flex flex-col gap-2">
        <p className="text-sm text-mariner-300 leading-relaxed">{experience.description.backend}</p>
        {experience.description.frontend && (
          <p className="text-sm text-mariner-300 leading-relaxed">{experience.description.frontend}</p>
        )}
      </div>

      {/* Stack como tags con ícono */}
      {allTechs.length > 0 && (
        <div className="px-6 pb-4 flex flex-wrap gap-2">
          {allTechs.map((tech: Tech, idx: number) => (
            <span
              key={idx}
              className="flex items-center gap-1.5 bg-mariner-900/60 text-mariner-200 px-2.5 py-1 rounded-md text-xs font-medium border border-mariner-700"
            >
              <span className="text-sm leading-none">{tech.icon}</span>
              {tech.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
