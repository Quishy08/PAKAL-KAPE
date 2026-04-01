import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { navItems, brandInfo } from "../../data/content";
import logo from "../../assets/logo_pakal.jpeg";

const Navbar = ({ scrolled, mobileMenuOpen, setMobileMenuOpen, activeSection, scrollTo }) => {
  return (
    <>
      <nav
        className={
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 " +
          (scrolled ? "bg-black/95 backdrop-blur-xl border-b border-white/5" : "")
        }
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <button
              onClick={() => scrollTo("inicio")}
              className="flex items-center gap-3 group"
              aria-label="Ir a inicio"
            >
              <img
                src={logo}
                alt="Pakal Kape"
                className="h-7 w-auto rounded-full opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <span className="font-heading font-semibold text-white text-xs tracking-[0.25em] uppercase hidden sm:block">
                {brandInfo.name}
              </span>
            </button>

            <nav className="hidden md:flex items-center gap-10" aria-label="Navegación principal">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={
                    "font-heading text-xs tracking-[0.25em] uppercase transition-colors duration-300 " +
                    (activeSection === item.id
                      ? "text-[#c9a96e]"
                      : "text-white/50 hover:text-white")
                  }
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              className="md:hidden text-white/70 hover:text-white p-2 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-10" aria-label="Navegación móvil">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => scrollTo(item.id)}
                  className="font-display text-4xl sm:text-5xl text-white hover:text-[#c9a96e] transition-colors duration-300"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
