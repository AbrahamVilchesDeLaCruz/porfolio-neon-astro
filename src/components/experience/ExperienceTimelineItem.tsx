import { useState } from "react";
import type { Experience, Tech } from "./data/experience-data";

type Props = {
  experience: Experience;
  index: number;
};

const PX_PER_TAG = 120;  // ancho estimado por tag en px
const PX_PER_SEC = 80;   // velocidad en px/s — igual para todas las bandas

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
            className="flex items-center gap-1.5 bg-mariner-900/60 text-mariner-300 px-3 py-1 rounded-full text-xs font-medium border border-mariner-800 whitespace-nowrap"
          >
            <span className="text-base leading-none">{tech.icon}</span>
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
    <>
      {/* ── DESKTOP ── */}
      <div className="hidden md:flex flex-col h-full bg-mariner-950/40 border border-mariner-700 hover:border-mariner-400 rounded-xl overflow-hidden transition-colors duration-300">

        {/* Banda superior — frontend → izquierda */}
        <div className="border-b border-mariner-800 bg-mariner-950/60">
          <TechMarquee techs={experience.frontendTechnologies} direction="left" />
        </div>

        {/* Header: logo + puesto + empresa + período */}
        <div className="flex items-center gap-5 px-6 py-5">
          <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-mariner-950 rounded-lg p-2 border border-mariner-800">
            <img
              src={experience.image}
              alt={`${experience.company} logo`}
              loading="lazy"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-white">{experience.role}</h3>
            <p className="text-sm text-mariner-300">{experience.company}</p>
            <p className="text-xs text-mariner-500 mt-0.5">{experience.period}</p>
          </div>
        </div>

        {/* Descripción */}
        <div className="px-6 pb-5 flex flex-col gap-2">
          <p className="text-sm text-mariner-300 leading-relaxed">{experience.description.backend}</p>
          {experience.description.frontend && (
            <p className="text-sm text-mariner-300 leading-relaxed">{experience.description.frontend}</p>
          )}
        </div>

        {/* Banda inferior — backend → derecha */}
        <div className="border-t border-mariner-800 bg-mariner-950/60">
          <TechMarquee techs={experience.backendTechnologies} direction="right" />
        </div>
      </div>

      {/* ── MOBILE: acordeón ── */}
      <div className="md:hidden border border-mariner-700 rounded-xl overflow-hidden bg-mariner-950/40">

        {/* Banda superior */}
        <div className="border-b border-mariner-800 bg-mariner-950/60">
          <TechMarquee techs={experience.frontendTechnologies} direction="left" />
        </div>

        {/* Header clickeable */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center gap-4 px-4 py-4 text-left"
          aria-expanded={open}
        >
          <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center bg-mariner-950 rounded-lg p-1.5 border border-mariner-800">
            <img
              src={experience.image}
              alt={`${experience.company} logo`}
              loading="lazy"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">{experience.role}</p>
            <p className="text-xs text-mariner-300 truncate">{experience.company}</p>
            <p className="text-xs text-mariner-500">{experience.period}</p>
          </div>
          <svg
            className={`flex-shrink-0 w-4 h-4 text-mariner-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Contenido expandible */}
        {open && (
          <div className="px-4 pb-4 flex flex-col gap-2 border-t border-mariner-800 pt-3">
            <p className="text-sm text-mariner-300 leading-relaxed">{experience.description.backend}</p>
            {experience.description.frontend && (
              <p className="text-sm text-mariner-300 leading-relaxed">{experience.description.frontend}</p>
            )}
          </div>
        )}

        {/* Banda inferior */}
        <div className="border-t border-mariner-800 bg-mariner-950/60">
          <TechMarquee techs={experience.backendTechnologies} direction="right" />
        </div>
      </div>
    </>
  );
};
