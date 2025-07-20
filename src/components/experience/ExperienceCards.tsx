import React, { useState } from "react";
import type { Experience } from "./data/experience-data";

interface IExperienceCardProps {
  experience: Experience;
}
export const ExperienceCardv1: React.FC<IExperienceCardProps> = ({ experience }) => {
  const [showStack, setShowStack] = useState(false);

  return (
    <div className="text-start border-2 border-mariner-400 rounded-lg  flex flex-col gap-2">
      <header className="bg-mariner-950 flex items-center justify-around justify-items-cente p-6 border-b-4 border-t-2 border-x-2 border-mariner-400 shadow-neon">
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

      {/* Tecnologías */}
      <div className="flex flex-col gap-4 p-6">
        {showStack ? (
          <>
            {/* Backend Technologies */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-mariner-100 neon-effect mb-4 text-left">
                Backend
              </h4>
              <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
                {experience.backendTechnologies.map(
                  (tech: { name: string; icon: React.ReactNode }, idx: number) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="text-4xl">{tech.icon}</div>
                      <p className="mt-2 text-white text-lg font-semibold hover:text-mariner-200 transition-all">
                        {tech.name}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Frontend Technologies */}
            <div>
              <h4 className="text-xl font-bold text-mariner-100 neon-effect mb-4 text-left">
                Frontend
              </h4>
              <div className="flex flex-wrap justify-center items-center gap-6 mt-4">
                {experience.frontendTechnologies.map(
                  (tech: { name: string; icon: React.ReactNode }, idx: number) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="text-4xl">{tech.icon}</div>
                      <p className="mt-2 text-white text-lg font-semibold hover:text-mariner-200 transition-all">
                        {tech.name}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Descripción Backend */}
            <div>
              <h4 className="text-xl font-bold text-mariner-100 neon-effect mb-4 text-left">
                Backend
              </h4>
              <p className="text-mariner-300 leading-relaxed font-semibold">
                {experience.description.backend}
              </p>
            </div>

            {/* Descripción Frontend */}
            <div>
              <h4 className="text-xl font-bold text-mariner-100 neon-effect mb-4 text-left">
                Frontend
              </h4>
              <p className="text-mariner-300 leading-relaxed font-semibold">
                {experience.description.frontend}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Botón para cambiar entre stack o descripción */}
      <div className="text-center mb-4">
        <button
          onClick={() => setShowStack(!showStack)}
          className="px-6 py-2 bg-mariner-700 text-mariner-100 font-semibold rounded-full"
        >
          {showStack ? "Ver Descripción" : "Ver Stack"}
        </button>
      </div>
    </div>
  );
};

export const ExperienceCard: React.FC<IExperienceCardProps> = ({ experience }) => {
  return (
    <div className="bg-mariner-950 border-2 border-mariner-400 rounded-lg p-8 shadow-lg w-full max-w-md flex flex-col items-center">
      <header className="flex items-center justify-around justify-items-cente p-6">
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

      <hr className="w-4/5 border-2 border-mariner-400 shadow-neon" />

      {/* Tecnologías */}
      <div className="flex flex-col gap-4 p-6">
        <>
          {/* Descripción Backend */}
          <div>
            <h4 className="text-xl font-bold text-mariner-100 neon-effect mb-4 text-left">
              Backend
            </h4>
            <p className="text-mariner-300 leading-relaxed font-semibold text-center">
              {experience.description.backend}
            </p>
          </div>

          {/* Descripción Frontend */}
          <div>
            <h4 className="text-xl font-bold text-mariner-100 neon-effect mb-4 text-left">
              Frontend
            </h4>
            <p className="text-mariner-300 leading-relaxed font-semibold text-center">
              {experience.description.frontend}
            </p>
          </div>
        </>
      </div>
    </div>
  );
};
