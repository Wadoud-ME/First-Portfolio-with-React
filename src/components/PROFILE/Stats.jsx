import { useState, useEffect } from "react";

import { STATISTICS } from "../../data/stats";

const Stats = () => {
  const [counts, setCounts] = useState(STATISTICS.map(() => 0));

  useEffect(() => {
    const duration = 3000; // 2 seconds
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1); // Ensure it doesn't exceed 1

      setCounts(STATISTICS.map((stat) => Math.round(progress * stat.value)));

      if (frame >= totalFrames) {
        clearInterval(counter);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, []);

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-12 sm:py-16 md:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {STATISTICS.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 text-center group"
          >
            <span className="text-primary text-3xl sm:text-4xl font-bold group-hover:scale-110 transition-transform duration-300">
              {counts[index]}
              {stat.suffix}
            </span>
            <p className="text-secondary text-base sm:text-lg font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
