import { Menu, X, Coffee } from "lucide-react";
import { navItems, brandInfo } from "../../data/content";
import logo from "../../assets/logo_pakal.jpeg";

const Navbar = ({
  scrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  activeSection,
  scrollTo,
}) => {
  return (
    <nav
      className={
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 " +
        (scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-2xl py-3"
          : "bg-gradient-to-b from-black/60 to-transparent py-4")
      }
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollTo("inicio")}
            className="flex items-center space-x-3 group"
            aria-label="Ir a inicio"
          >
            <Coffee className="h-8 w-8 text-white transition-transform group-hover:scale-110" />

            <span className="text-xl font-heading font-bold text-white group-hover:text-green-400 transition-colors hidden sm:block">
              {brandInfo.name}
            </span>
          </button>

          <nav
            className="hidden md:flex space-x-8"
            aria-label="Navegación principal"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={
                  "font-heading font-medium transition-all " +
                  (activeSection === item.id
                    ? "text-green-400"
                    : "text-white hover:text-green-300")
                }
              >
                {item.label}
              </button>
            ))}
          </nav>

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

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-lg border-t border-gray-700">
          <nav className="px-4 py-4 space-y-1" aria-label="Navegación móvil">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-all font-heading"
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
