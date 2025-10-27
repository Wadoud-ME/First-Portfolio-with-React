import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";

import { NavLink } from "react-router-dom";

import Navigation from "./Navigation";

import lightLogo from "../../assets/images/logo-light.svg";
import darkLogo from "../../assets/images/logo-dark.svg";
import sunSvg from "../../assets/sunny-outline.svg";
import moonSvg from "../../assets/moon-outline.svg";
import Button from "../UI/Button";
import whiteMenu from "../../assets/white-menu.svg";
import blackMenu from "../../assets/black-menu.svg";
import whiteClose from "../../assets/white-close.svg";
import blackClose from "../../assets/black-close.svg";

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuHandler = () => setIsOpen((prev) => !prev);

  const closeMenu = () => setIsOpen(false);

  const menuIcon = isOpen
    ? isDark
      ? whiteClose
      : blackClose
    : isDark
    ? whiteMenu
    : blackMenu;

  return (
    <header className={`mb-4 px-4 py-6 sm:py-8 md:py-10 ${isOpen ? 'shadow-[0_4px_8px_rgba(0,0,0,.1)]' : ''}`}>
      <div className="flex items-center justify-between w-full mx-auto sm:max-w-[610px] md:max-w-[740px] lg:max-w-[900px] xl:max-w-[1120px] 2xl:max-w-[1300px]">
        {/* Logo */}
        <NavLink to='/' className="shrink-0" aria-label="Home">
          <img
            src={isDark ? lightLogo : darkLogo}
            alt="Portfolio logo"
            className="w-32 sm:w-36 transition-opacity hover:opacity-80 cursor-pointer"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="flex-1 hidden sm:block">
          <ul className="flex items-center justify-center gap-6 lg:gap-12 xl:gap-18">
            <Navigation className="text-primary text-lg font-normal hover:text-secondary transition-colors duration-200" />
          </ul>
        </nav>

        <div className="flex items-center gap-8">
          <Button className="hidden md:block bg-bg-secondary text-white text-lg px-4 py-2 rounded-md cursor-pointer hover:bg-[#4d4fcd] transition-colors duration-500">
            Hire Me
          </Button>

          {/* Theme Toggle */}
          <button
            className="flex items-center justify-center p-3 bg-bg-buttons rounded-xl cursor-pointer"
            onClick={toggleTheme}
          >
            <img
              src={isDark ? sunSvg : moonSvg}
              alt="toggle"
              className="w-5 h-5"
            />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="sm:hidden cursor-pointer p-2 mr-2"
            onClick={toggleMenuHandler}
          >
            <img src={menuIcon} alt="" width={40} height={40} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="mt-6 sm:hidden animate-fadeIn">
          <ul className="flex flex-col gap-2 text-secondary text-lg mb-6">
            <Navigation
              className="py-2 border-b border-primary/15"
              onClick={closeMenu}
            />
          </ul>
          <Button className="bg-bg-secondary text-white text-[1.125rem] px-4 py-2 rounded-md cursor-pointer hover:bg-[#4d4fcd] transition-colors duration-500">
            Hire Me
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
