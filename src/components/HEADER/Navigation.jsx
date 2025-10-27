import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  { id: "projects", label: "Projects", path: 'projects' },
  { id: "about", label: "About", path: 'about' },
  { id: "contact", label: "Contact", path: 'contact' },
];

const Navigation = ({ className, ...props }) => {
  return (
    <>
      {NAV_LINKS.map((link) => (
        <li key={link.id} className={className}>
          <NavLink to={link.path} {...props}>
            {link.label}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default Navigation;
