import { experiences } from "./experience/data/experience-data";
import { ExperienceTimelineItem } from "./experience/ExperienceTimelineItem";

const Experience: React.FC = () => {
  return (
    <div
      className="w-full max-w-7xl mx-auto px-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {experiences.map((experience, index) => (
          <ExperienceTimelineItem key={index} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
