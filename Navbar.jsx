import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Quality", path: "/quality" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-orange-50/95 backdrop-blur-md border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo + Brand */}
        <Link 
          to="/" 
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 group"
        >
          <img
            src={Logo}
            alt="Dhaneshwor Khadya Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain transition-transform duration-300 group-hover:scale-105"
          />

          <div className="leading-tight">
            <h1 className="text-lg sm:text-xl font-bold text-orange-900">
              Dhaneshwor 
            </h1>
            <p className="text-xs sm:text-sm font-medium text-orange-800 tracking-wider">
             Khadya Udhyog
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative font-medium py-2 transition-colors ${
                location.pathname === link.path
                  ? "text-orange-700 font-semibold after:w-full"
                  : "text-orange-950 hover:text-orange-700"
              } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-orange-600 after:transition-all hover:after:w-full`}
            >
              {link.name}
            </Link>
          ))}

          {/* Contact Button */}
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full bg-orange-700 text-white font-medium shadow-sm hover:bg-orange-800 hover:shadow-md transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-orange-950 rounded-lg focus:outline-none hover:bg-orange-100/50 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-orange-50/98 border-b border-orange-100 px-6 pt-2 pb-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`py-2 text-base font-medium rounded-lg px-3 transition-colors ${
                location.pathname === link.path
                  ? "bg-orange-100 text-orange-700 font-semibold"
                  : "text-orange-950 hover:bg-orange-100/60"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-5 py-3 rounded-xl bg-orange-700 text-white font-semibold shadow-sm hover:bg-orange-800 transition-colors mt-2"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;