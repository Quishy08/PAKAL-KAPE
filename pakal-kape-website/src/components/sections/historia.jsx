import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import cafeImage from "../../assets/finca_mejorada.jpg";

const FadeUp = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const stats = [
  { value: "84", unit: "pts", label: "Specialty Coffee Association" },
  { value: "1600–1900", unit: "msnm", label: "Altitud de cultivo" },
  { value: "Geisha", unit: "", label: "Variedad exclusiva" },
  { value: "100%", unit: "orgánico", label: "Certificado" },
];

const Historia = () => (
  <section id="historia" className="bg-[#f5f2ec] py-24 sm:py-36 px-6 sm:px-10">
    <div className="max-w-5xl mx-auto">
      <FadeUp>
        <p className="font-heading text-xs sm:text-[13px] tracking-[0.35em] text-[#c9a96e] uppercase mb-10 sm:mb-14">
          Historia
        </p>
      </FadeUp>

      <FadeUp delay={0.08}>
        <p className="font-display text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a] leading-snug mb-14 sm:mb-20 max-w-4xl">
          Café Pakal Kape nace de la idea de crear una marca de café en la cual
          se llegue a{" "}
          <em className="not-italic text-[#8b6914]">
            dignificar y valorar el trabajo de nuestros productores
          </em>
          , ya que ellos son la base para obtener el mejor café con la mejor
          calidad.
        </p>
      </FadeUp>

      {/* Full-bleed image */}
      <FadeUp delay={0.12} className="mb-14 sm:mb-20">
        <div className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden">
          <img
            src={cafeImage}
            alt="Plantaciones de café Pakal Kape en las montañas de Chiapas"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </FadeUp>

      {/* Stats */}
      <FadeUp delay={0.08} className="mb-14 sm:mb-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#e0dbd3]">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#f5f2ec] p-6 sm:p-8">
              <p className="font-display text-2xl sm:text-3xl font-bold text-[#1a1a1a] leading-tight">
                {stat.value}
                {stat.unit && (
                  <span className="text-sm sm:text-base font-normal text-[#c9a96e] ml-1">
                    {stat.unit}
                  </span>
                )}
              </p>
              <p className="font-body text-[11px] text-[#999] mt-2 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </FadeUp>

      {/* Second paragraph */}
      <FadeUp delay={0.08}>
        <p className="font-body text-base sm:text-lg md:text-xl text-[#555] leading-relaxed max-w-3xl">
          Mediante los diversos procesos de secado y fermentación que realizan,
          hacen que cada grano de café obtenga un{" "}
          <strong className="text-[#1a1a1a] font-semibold">
            sabor excepcional y único
          </strong>
          . En Pakal Kape nos dedicamos enteramente a proteger y salvaguardar la
          integridad y calidad de nuestro producto, así como la de nuestros
          productores.
        </p>
      </FadeUp>
    </div>
  </section>
);

export default Historia;
