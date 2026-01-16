import { useState } from "react";
import { useScrollSpy } from "./hooks/useScrollSpy";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Hero from "./components/sections/hero";
import Historia from "./components/sections/historia";
import Diferenciador from "./components/sections/diferenciador";
import Productos from "./components/sections/productos";
import Proceso from "./components/sections/proceso";
import Contacto from "./components/sections/contacto";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionIds = ["inicio", "historia", "productos", "proceso", "contacto"];
  const { scrolled, activeSection, visibleSections } = useScrollSpy(sectionIds);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 overflow-x-hidden">
      <Navbar
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeSection={activeSection}
        scrollTo={scrollTo}
      />

      <main>
        <Hero scrollTo={scrollTo} />
        <Historia visibleSections={visibleSections} />
        <Diferenciador visibleSections={visibleSections} />
        <Productos visibleSections={visibleSections} />
        <Proceso visibleSections={visibleSections} />
        <Contacto visibleSections={visibleSections} />
      </main>

      <Footer scrollTo={scrollTo} />
    </div>
  );
}

export default App;
