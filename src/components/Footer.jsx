import { socialLinks } from "../data/socialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mx-auto sm:max-w-[610px] md:max-w-[740px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1300px] mt-20 md:mt-24 pb-8">
      {/* Divider */}
      <hr className="border-primary/15 mb-12 md:mb-16" />

      {/* Social Section */}
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-primary text-3xl sm:text-4xl font-light mb-8">
          Let's Connect
        </h2>

        <ul className="flex items-center justify-center gap-4 sm:gap-6">
          {socialLinks.map(({ name, link, icon: Icon }) => (
            <li key={name}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer" // Prevents the new tab from accessing the original page via whitch will Blocks the new page from controlling your page via window.opener
                aria-label={`Visit my ${name} profile`}
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-bg-buttons rounded-xl text-secondary hover:text-bg-secondary hover:bg-opacity-80 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Icon size={24} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright */}
      <div className="text-center text-secondary text-sm sm:text-base">
        <p>
          &copy; {currentYear} Built with React & Tailwind CSS by.{" "}
          <a
            href="https://github.com/Wadoud-Me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-bg-secondary font-medium transition-colors duration-200 underline decoration-transparent hover:decoration-bg-secondary underline-offset-4"
          >
            Wadoud
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
