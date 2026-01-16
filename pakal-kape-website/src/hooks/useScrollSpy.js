import { useState, useEffect } from "react";

export const useScrollSpy = (sectionIds) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      // Detectar si hay scroll
      setScrolled(window.scrollY > 50);

      // Detectar sección activa
      const current = sectionIds.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }

      // Detectar secciones visibles para animaciones
      sectionIds.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible =
            rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
          setVisibleSections((prev) => ({ ...prev, [section]: isVisible }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar una vez al montar

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return { scrolled, activeSection, visibleSections };
};
