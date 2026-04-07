import type { Experience, Tech } from "./data/experience-data";

type ExperienceTimelineItemProps = {
  experience: Experience;
  index: number;
};

export const ExperienceTimelineItem = ({ experience, index }: ExperienceTimelineItemProps) => {
  const allTechs = [...experience.backendTechnologies, ...experience.frontendTechnologies];

  return (
    <div className="relative w-full mb-10">
      {/* Card único — mobile y desktop */}
      <div className="bg-mariner-950 border-2 border-mariner-400 rounded-xl shadow-lg w-full max-w-3xl mx-auto overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between gap-4 px-6 py-4 border-b-2 border-mariner-700">
          <div>
            <h3 className="text-lg font-semibold text-mariner-100">{experience.role}</h3>
            <p className="text-sm text-mariner-300">{experience.company}</p>
            <span className="text-xs text-mariner-500">{experience.period}</span>
          </div>
          <div className="flex-shrink-0 w-24 flex items-center justify-center">
            <img
              src={experience.image}
              alt={`${experience.company} logo`}
              loading="lazy"
              className="max-w-full max-h-16 object-contain"
            />
          </div>
        </header>

        {/* Body */}
        <div className="px-6 py-4 flex flex-col gap-4">
          {/* Descripción */}
          <p className="text-mariner-300 text-sm leading-relaxed">
            {experience.description.backend}
          </p>
          {experience.description.frontend && (
            <p className="text-mariner-300 text-sm leading-relaxed">
              {experience.description.frontend}
            </p>
          )}

          {/* Stack como tags */}
          {allTechs.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2 border-t border-mariner-800">
              {allTechs.map((tech: Tech, idx: number) => (
                <span
                  key={idx}
                  className="flex items-center gap-1.5 bg-mariner-800/60 text-mariner-200 px-2.5 py-0.5 rounded-md text-xs font-medium border border-mariner-700"
                >
                  <span className="text-base leading-none">{tech.icon}</span>
                  {tech.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
