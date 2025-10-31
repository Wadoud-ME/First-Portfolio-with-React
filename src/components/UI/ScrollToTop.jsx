import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-18 right-14 text-primary hover:text-bg-secondary bg-bg-buttons rounded-full p-2 cursor-pointer shadow-lg hover:scale-110 transition-all duration-300"
          onClick={scrollToTop}
        >
          <ChevronUp size={34} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
