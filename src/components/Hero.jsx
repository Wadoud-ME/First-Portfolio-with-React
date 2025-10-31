import { Download as DownloadLogo } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

import developerDark from "../assets/images/developer-dark.svg";
import developerLight from "../assets/images/developer.svg";

const Hero = () => {
  const { isDark } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-8 md:py-12">
      {/* Text Content */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
          Hi, I'm <span className="text-bg-secondary">Wadoud</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-secondary font-medium mb-8 md:mb-12">
          A Front-End Developer & Python Expert
        </p>
        <a
          href="/files/Chapter01.pdf"
          download="CV.pdf"
          className="w-fit cursor-pointer flex items-center justify-center gap-3 mx-auto lg:mx-0 px-6 py-3 text-base sm:text-lg font-medium text-white bg-bg-secondary hover:bg-[#4d4fcd] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <DownloadLogo className="w-5 h-5" />
          <span>Download CV</span>
        </a>
      </div>

      {/* Image */}
      <div className="flex-1 w-full max-w-md lg:max-w-lg">
        <img
          src={isDark ? developerDark : developerLight}
          alt="Developer illustration"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
