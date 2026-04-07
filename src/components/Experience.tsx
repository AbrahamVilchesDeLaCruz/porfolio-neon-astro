import { experiences } from "./experience/data/experience-data";
import { ExperienceTimelineItem } from "./experience/ExperienceTimelineItem";

const Experience: React.FC = () => {
  return (
    <div
      className="w-full max-w-3xl mx-auto"
    >
      <div className="flex flex-col gap-4 w-full">
        {experiences.map((experience, index) => (
          <ExperienceTimelineItem key={index} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
