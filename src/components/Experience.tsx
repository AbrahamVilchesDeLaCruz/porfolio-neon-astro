import { useRef, useState, useEffect } from "react";
import { experiences } from "./experience/data/experience-data";
import { ExperienceTimelineItem } from "./experience/ExperienceTimelineItem";

const Experience: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

/*   useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !barRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      let percent = 0;
      if (rect.top < windowHeight && rect.bottom > 0) {
        percent = Math.max(
          0,
          Math.min(1, (windowHeight - rect.top) / (totalHeight + windowHeight))
        );
      }
      setProgress(percent);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); */

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center w-full max-w-7xl mx-auto"
    >
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-mariner-900 z-0">
        <div
          ref={barRef}
          style={{ height: `${progress * 100}%` }}
          className="absolute left-0 top-0 w-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col w-full z-10">
        {experiences.map((experience, index) => (
          <ExperienceTimelineItem key={index} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
