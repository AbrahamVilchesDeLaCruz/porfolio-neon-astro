import { useState } from "react";
import type { Experience, Tech } from "./data/experience-data";

type Props = {
  experience: Experience;
  index: number;
};

export const ExperienceTimelineItem = ({ experience, index }: Props) => {
  const [open, setOpen] = useState(false);
  const allTechs = [...experience.backendTechnologies, ...experience.frontendTechnologies];

  return (
    <>
      {/* ── DESKTOP: card horizontal ── */}
      <div className="hidden md:grid grid-cols-[180px_1fr_180px] gap-6 items-start bg-mariner-950/40 border border-mariner-700 hover:border-mariner-400 rounded-xl px-6 py-5 transition-colors duration-300">

        {/* Columna izquierda: logo + empresa + período */}
        <div className="flex flex-col items-center gap-3 pt-1">
          <div className="w-16 h-16 flex items-center justify-center bg-mariner-950 rounded-lg p-2 border border-mariner-800">
            <img
              src={experience.image}
              alt={`${experience.company} logo`}
              loading="lazy"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-mariner-200 leading-tight">{experience.company}</p>
            <p className="text-xs text-mariner-500 mt-0.5">{experience.period}</p>
          </div>
        </div>

        {/* Columna central: rol + descripción */}
        <div className="flex flex-col gap-2 border-x border-mariner-800 px-6">
          <h3 className="text-base font-semibold text-white">{experience.role}</h3>
          <p className="text-sm text-mariner-300 leading-relaxed">{experience.description.backend}</p>
          {experience.description.frontend && (
            <p className="text-sm text-mariner-300 leading-relaxed">{experience.description.frontend}</p>
          )}
        </div>

        {/* Columna derecha: stack */}
        <div className="flex flex-wrap gap-1.5 content-start pt-1">
          {allTechs.map((tech: Tech, idx: number) => (
            <span
              key={idx}
              className="flex items-center gap-1 bg-mariner-900/60 text-mariner-300 px-2 py-0.5 rounded-md text-xs border border-mariner-800"
            >
              <span className="text-sm leading-none">{tech.icon}</span>
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      {/* ── MOBILE: acordeón ── */}
      <div className="md:hidden border border-mariner-700 rounded-xl overflow-hidden bg-mariner-950/40">
        {/* Header clickeable */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center gap-4 px-4 py-4 text-left"
          aria-expanded={open}
        >
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-mariner-950 rounded-lg p-1.5 border border-mariner-800">
            <img
              src={experience.image}
              alt={`${experience.company} logo`}
              loading="lazy"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-mariner-200 truncate">{experience.company}</p>
            <p className="text-xs text-mariner-400 truncate">{experience.role}</p>
            <p className="text-xs text-mariner-500">{experience.period}</p>
          </div>
          {/* Chevron */}
          <svg
            className={`flex-shrink-0 w-4 h-4 text-mariner-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Contenido expandible */}
        {open && (
          <div className="px-4 pb-4 flex flex-col gap-3 border-t border-mariner-800">
            <p className="text-sm text-mariner-300 leading-relaxed pt-3">{experience.description.backend}</p>
            {experience.description.frontend && (
              <p className="text-sm text-mariner-300 leading-relaxed">{experience.description.frontend}</p>
            )}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {allTechs.map((tech: Tech, idx: number) => (
                <span
                  key={idx}
                  className="flex items-center gap-1 bg-mariner-900/60 text-mariner-300 px-2 py-0.5 rounded-md text-xs border border-mariner-800"
                >
                  <span className="text-sm leading-none">{tech.icon}</span>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
