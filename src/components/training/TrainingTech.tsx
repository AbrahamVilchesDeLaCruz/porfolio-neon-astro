import { useState } from "react";

interface TrainingTechProps {
  title: string;
  id: number;
  technologies: string[];
}

const TrainingTech: React.FC<TrainingTechProps> = ({ title, id, technologies }) => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="mt-6">
      <h4 className="text-sm font-semibold text-mariner-300 mb-2 tracking-wide">
        Tecnologías aprendidas
      </h4>
      <ul className="flex flex-wrap justify-center items-center gap-2">
        {(expandedItems.has(id) ? technologies : technologies.slice(0, 15)).map((tech, index) => (
          <li
            key={index}
            className="text-sm bg-mariner-800 text-white px-3 py-1 rounded-full shadow-sm shadow-mariner-500 hover:scale-105 transition-transform duration-200"
          >
            {tech}
          </li>
        ))}
      </ul>
      {technologies.length > 15 && (
        <button
          className="flex justify-center items-center w-full mt-4 text-sm text-blue-500 hover:underline text-center"
          onClick={() => toggleItem(id)}
          aria-label={`Toggle additional technologies for ${title}`}
        >
          {expandedItems.has(id) ? "Mostrar menos" : "Mostrar más"}
        </button>
      )}
    </div>
  );
};

export default TrainingTech;
