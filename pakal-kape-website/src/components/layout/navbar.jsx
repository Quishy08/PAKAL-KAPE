import { Coffee, Menu, X } from "lucide-react";
import { navItems } from "../../data/content";

const Navbar = ({
  scrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  activeSection,
  scrollTo,
}) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-stone-900/95 backdrop-blur-md shadow-2xl py-3"
          : "bg-gradient-to-b from-black/60 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollTo("inicio")}
            className="flex items-center space-x-3 group"
            aria-label="Ir a inicio"
          >
            <Coffee
              className={`w-8 h-8 transition-all ${
                scrolled ? "text-amber-500" : "text-white"
              } group-hover:rotate-12`}
            />
            <span className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
              PAKAL KAPE
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex space-x-8"
            aria-label="Navegación principal"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-white hover:text-amber-400 transition-all font-medium ${
                  activeSection === item.id ? "text-amber-400" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-900/98 backdrop-blur-lg border-t border-stone-700">
          <nav className="px-4 py-4 space-y-1" aria-label="Navegación móvil">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
