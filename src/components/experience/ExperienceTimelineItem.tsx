import { useState } from "react";
import type { Experience, Tech } from "./data/experience-data";

type Props = {
  experience: Experience;
  index: number;
};

const PX_PER_TAG = 120;
const PX_PER_SEC = 35;

const TechMarquee = ({ techs, direction }: { techs: Tech[]; direction: "left" | "right" }) => {
  const doubled = [...techs, ...techs];
  const duration = `${(techs.length * PX_PER_TAG) / PX_PER_SEC}s`;

  return (
    <div className="overflow-hidden w-full py-2">
      <div
        style={{ "--marquee-duration": duration } as React.CSSProperties}
        className={`flex gap-3 w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
      >
        {doubled.map((tech, idx) => (
          <span
            key={idx}
            className="flex items-center gap-1.5 bg-indigo-900/60 text-indigo-300 px-3 py-1 rounded-full text-xs font-medium border border-indigo-800 whitespace-nowrap"
          >
            <span className="text-base leading-none" aria-hidden="true">{tech.icon}</span>
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export const ExperienceTimelineItem = ({ experience }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col h-full bg-indigo-950/40 border border-indigo-700 hover:border-indigo-400 rounded-xl overflow-hidden transition-colors duration-300">

      {/* Banda superior — frontend → izquierda */}
      <div className="border-b border-indigo-800 bg-indigo-950/60">
        <TechMarquee techs={experience.frontendTechnologies} direction="left" />
      </div>

      {/* Header: logo + puesto + empresa + período — siempre visible */}
      <div className="flex items-center gap-5 px-6 py-5">
        <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-indigo-950 rounded-lg p-2 border border-indigo-800">
          <img
            src={experience.image}
            alt={`Logo de ${experience.company}`}
            loading="lazy"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-white">{experience.role}</h3>
          <p className="text-sm text-indigo-300">{experience.company}</p>
          <p className="text-xs text-indigo-500 mt-0.5">{experience.period}</p>
        </div>
        {/* Chevron — solo visible en mobile para indicar acordeón */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex-shrink-0 p-1 text-indigo-400 hover:text-indigo-200 transition-colors"
          aria-expanded={open}
          aria-label={`${open ? "Ocultar" : "Ver"} descripción de ${experience.role} en ${experience.company}`}
        >
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Descripción:
          - Desktop (md+): siempre visible
          - Mobile: se muestra/oculta con el acordeón
      */}
      <div className={`px-6 pb-5 flex-col gap-2 flex-grow border-t border-indigo-800 pt-4 hidden md:flex ${open ? "!flex" : ""}`}>
        <p className="text-sm text-indigo-300 leading-relaxed">{experience.description.backend}</p>
        {experience.description.frontend && (
          <p className="text-sm text-indigo-300 leading-relaxed">{experience.description.frontend}</p>
        )}
      </div>

      {/* Banda inferior — backend → derecha */}
      <div className="border-t border-indigo-800 bg-indigo-950/60">
        <TechMarquee techs={experience.backendTechnologies} direction="right" />
      </div>
    </div>
  );
};
