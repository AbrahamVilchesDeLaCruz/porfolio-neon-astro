import { useRef, useState, useEffect } from "react";
import { experiences } from "./experience/data/experience-data";
import { ExperienceTimelineItem } from "./experience/ExperienceTimelineItem";

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

/*   useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollTop = window.scrollY || window.pageYOffset;
      const rect = containerRef.current.getBoundingClientRect();
      const offsetTop = rect.top + scrollTop; // posición absoluta real en documento

      const height = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollPassed = scrollTop + windowHeight - offsetTop;
      const totalScrollable = height + windowHeight;

      let percent = scrollPassed / totalScrollable;
      percent = Math.min(Math.max(percent, 0), 1);

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
