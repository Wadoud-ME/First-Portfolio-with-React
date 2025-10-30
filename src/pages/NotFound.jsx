import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1 className="text-9xl sm:text-[12rem] font-bold text-primary opacity-20 select-none">
            404
          </h1>
          <div className="-mt-20 sm:-mt-24">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Page Not Found
            </h2>
            <p className="text-lg sm:text-xl text-secondary max-w-md mx-auto mb-8">
              Oops! The page you're looking for seems to have wandered off into the digital void.
            </p>
          </div>
        </div>

        {/* Illustration or Icon */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 sm:w-40 sm:h-40 bg-bg-buttons rounded-full flex items-center justify-center animate-bounce">
              <span className="text-6xl sm:text-7xl">🤔</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-bg-secondary text-white rounded-lg hover:bg-[#4d4fcd] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Home size={20} />
            <span>Go Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-bg-buttons text-primary rounded-lg hover:bg-opacity-80 transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-primary/10">
          <p className="text-secondary mb-4">Maybe you were looking for:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/"
              className="text-primary hover:text-bg-secondary transition-colors underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-primary hover:text-bg-secondary transition-colors underline underline-offset-4"
            >
              About
            </Link>
            <Link
              to="/#contact"
              className="text-primary hover:text-bg-secondary transition-colors underline underline-offset-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;