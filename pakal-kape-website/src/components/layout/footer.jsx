import { Star } from "lucide-react";
import { navItems, brandInfo } from "../../data/content";
import logo from "../../assets/logo_pakal.jpeg";

const Footer = ({ scrollTo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          <button
            onClick={() => scrollTo("inicio")}
            className="flex items-center justify-center space-x-3 group mx-auto"
            aria-label="Ir a inicio"
          >
            <img
              src={logo}
              alt="Pakal Kape Logo"
              className="h-16 w-auto group-hover:scale-110 transition-transform"
            />
            <div className="text-left">
              <span className="text-3xl font-bold block group-hover:text-green-400 transition-colors font-heading">
                {brandInfo.name}
              </span>
              <span className="text-sm text-green-400 font-heading">
                {brandInfo.tagline}
              </span>
            </div>
          </button>

          <div
            className="flex justify-center space-x-2"
            role="img"
            aria-label="5 estrellas"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-green-500 fill-green-500" />
            ))}
          </div>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-body">
            {brandInfo.description}
          </p>

          <nav
            className="flex justify-center space-x-8 text-gray-400 font-heading"
            aria-label="Enlaces de navegación"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="hover:text-green-400 transition-colors text-lg"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="h-px w-full max-w-lg mx-auto bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

          <p className="text-gray-500 font-body">
            © {currentYear} Pakal Kape. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
