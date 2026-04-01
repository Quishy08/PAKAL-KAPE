import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

const Diferenciador = () => (
  <section className="bg-[#080808] py-24 sm:py-36 px-6 sm:px-10">
    <div className="max-w-4xl mx-auto text-center">
      <FadeUp>
        <p className="font-heading text-xs sm:text-[13px] tracking-[0.35em] text-[#c9a96e] uppercase mb-10 sm:mb-14">
          Lo que nos diferencia
        </p>
      </FadeUp>

      <FadeUp delay={0.08}>
        <p className="font-display text-3xl sm:text-4xl md:text-5xl text-white leading-snug mb-10 sm:mb-12">
          Cuidamos y supervisamos minuciosamente cada etapa del proceso del
          grano,{" "}
          <span className="text-[#c9a96e]">
            desde el cultivo de los cerezos hasta llegar a tu taza
          </span>
          , garantizando la expresión auténtica de su identidad.
        </p>
      </FadeUp>

      <FadeUp delay={0.16}>
        <div className="flex items-center justify-center gap-5">
          <div className="h-px w-8 bg-[#c9a96e]/30" />
          <p className="font-heading text-xs tracking-[0.3em] text-white/20 uppercase">
            De la finca · A tu taza
          </p>
          <div className="h-px w-8 bg-[#c9a96e]/30" />
        </div>
      </FadeUp>
    </div>
  </section>
);

export default Diferenciador;
