import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { useScrollSpy } from "./hooks/useScrollSpy";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Hero from "./components/sections/hero";
import Historia from "./components/sections/historia";
import Diferenciador from "./components/sections/diferenciador";
import FairTrade from "./components/sections/fairtrade";
import Productos from "./components/sections/productos";
import Proceso from "./components/sections/proceso";
import Contacto from "./components/sections/contacto";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionIds = ["inicio", "historia", "productos", "proceso", "contacto"];
  const { scrolled, activeSection } = useScrollSpy(sectionIds);
  const { scrollYProgress } = useScroll();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#080808] overflow-x-hidden">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] bg-[#c9a96e] z-[200] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <Navbar
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeSection={activeSection}
        scrollTo={scrollTo}
      />
      <main>
        <Hero scrollTo={scrollTo} />
        <Historia />
        <Diferenciador />
        <FairTrade />
        <Productos />
        <Proceso />
        <Contacto />
      </main>
      <Footer scrollTo={scrollTo} />
    </div>
  );
}

export default App;
