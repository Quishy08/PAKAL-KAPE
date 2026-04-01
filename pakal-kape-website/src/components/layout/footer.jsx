import { navItems, brandInfo } from "../../data/content";
import logo from "../../assets/logo_pakal.jpeg";

const Footer = ({ scrollTo }) => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black border-t border-white/5 py-10 sm:py-12 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <button
            onClick={() => scrollTo("inicio")}
            className="flex items-center gap-3 group"
            aria-label="Ir a inicio"
          >
            <img
              src={logo}
              alt="Pakal Kape"
              className="h-7 w-auto rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
            />
            <span className="font-heading text-xs tracking-[0.25em] uppercase text-white/50 group-hover:text-white/80 transition-colors">
              {brandInfo.name}
            </span>
          </button>

          <nav className="flex flex-wrap gap-x-7 gap-y-2" aria-label="Footer navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-heading text-xs tracking-[0.2em] uppercase text-white/25 hover:text-white/60 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <p className="font-body text-xs text-white/15">
            © {year} ESPORO &amp; Pakal Kape · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
