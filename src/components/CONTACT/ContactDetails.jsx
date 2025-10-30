import { contactDetails } from "../../data/contactDetails";

const ContactDetails = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-12">
        Get in Touch
      </h3>

      <ul className="space-y-4">
        {contactDetails.map(({ label, value, icon: Icon, href }, index) => (
          <li key={index}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : "_self"}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-4 bg-bg-buttons rounded-xl hover:bg-opacity-80 transition-all duration-300 hover:scale-105 group"
            >
              <div className="shrink-0 w-12 h-12 bg-bg-secondary rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <Icon size={24} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm text-secondary font-medium mb-1">
                  {label}
                </p>
                <p className="text-base sm:text-lg text-primary font-semibold truncate">
                  {value}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactDetails;
