import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setLocation] = useLocation();

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when navigation occurs
  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    setLocation(path);
  };

  // Handle scroll state for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Accueil", path: "/", hash: "#accueil" },
    { name: "À Propos", path: "/about", hash: "#apropos" },
    { name: "Compétences", path: "/skills", hash: "#competences" },
    { name: "Parcours", path: "/experience", hash: "#parcours" },
    { name: "Projets", path: "/projects", hash: "#projets" },
    { name: "Contact", path: "/contact", hash: "#contact" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white bg-opacity-90 shadow backdrop-blur-sm" : "bg-transparent"
      }`}
      style={{ backgroundColor: "#1a202c", color: "#fff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-primary font-inter font-bold text-xl">SAAD TECH</a>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.hash}
                className="font-medium hover:text-primary transition-colors"
                onClick={() => handleNavigation(link.path)}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.hash}
              className="block px-3 py-2 rounded-md font-medium hover:bg-primary hover:text-white transition-colors"
              onClick={() => handleNavigation(link.path)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
