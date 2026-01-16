import { Coffee, Star } from "lucide-react";
import { navItems } from "../../data/content";

const Footer = ({ scrollTo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          {/* Logo */}
          <button
            onClick={() => scrollTo("inicio")}
            className="flex items-center justify-center space-x-3 group mx-auto"
            aria-label="Ir a inicio"
          >
            <Coffee className="w-10 h-10 text-amber-500 group-hover:rotate-12 transition-transform" />
            <div>
              <span className="text-3xl font-bold block group-hover:text-amber-400 transition-colors">
                PAKAL KAPE
              </span>
              <span className="text-sm text-amber-400">
                Eslogan que quiera el ram
              </span>
            </div>
          </button>

          {/* Rating */}
          <div
            className="flex justify-center space-x-2"
            role="img"
            aria-label="5 estrellas"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
            ))}
          </div>

          {/* Description */}
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Café 100% orgánico de especialidad cultivado en las montañas de
            Chiapas, México
          </p>

          {/* Navigation Links */}
          <nav
            className="flex justify-center space-x-8 text-stone-500"
            aria-label="Enlaces de navegación"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="hover:text-amber-400 transition-colors text-lg"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Divider */}
          <div className="h-px w-full max-w-lg mx-auto bg-gradient-to-r from-transparent via-stone-700 to-transparent" />

          {/* Copyright */}
          <p className="text-stone-500">
            © {currentYear} Pakal Kape. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
