import { useRef } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import ftcSeal from "../../assets/FTC-Seal-Full.png";

/* ── 3D tilt wrapper ─────────────────────────────────── */
const TiltSeal = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [14, -14]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-14, 14]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "900px" }}
      className="w-full h-full"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 180, damping: 22 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

/* ── Feature pill ─────────────────────────────────────── */
const Pill = ({ children, delay, inView }) => (
  <motion.span
    className="font-heading text-[10px] sm:text-xs tracking-[0.2em] uppercase px-4 py-2 border border-[#c9a96e]/25 text-white/50"
    initial={{ opacity: 0, y: 10 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.span>
);

/* ── Component ──────────────────────────────────────── */
const FairTrade = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative bg-[#080808] py-24 sm:py-36 px-6 sm:px-10 overflow-hidden"
    >
      {/* Background gold glow blob — purely decorative */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(201,169,110,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-14 lg:gap-24 relative z-10">

        {/* ── Fair Trade Seal ── */}
        <div className="relative flex-shrink-0 w-52 sm:w-64">
          {/* Pulse glow behind the logo */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(201,169,110,0.18) 0%, transparent 68%)" }}
            animate={inView ? { scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] } : {}}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* Slow rotating dashed ring */}
          <motion.div
            className="absolute inset-[-14px] rounded-full border border-dashed border-[#c9a96e]/25 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          />

          {/* Second counter-rotating ring */}
          <motion.div
            className="absolute inset-[-6px] rounded-full border border-[#c9a96e]/10 pointer-events-none"
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />

          {/* Stamp-in animation + 3D tilt */}
          <motion.div
            initial={{ scale: 1.5, rotate: -18, opacity: 0 }}
            animate={inView ? { scale: 1, rotate: 0, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 160, damping: 18, delay: 0.15 }}
          >
            <TiltSeal>
              <img
                src={ftcSeal}
                alt="Certificación Fair Trade"
                className="w-full h-auto object-contain drop-shadow-[0_0_32px_rgba(201,169,110,0.4)]"
                style={{ transform: "translateZ(20px)" }}
              />
            </TiltSeal>
          </motion.div>
        </div>

        {/* ── Text content ── */}
        <div className="text-center lg:text-left">
          <motion.p
            className="font-heading text-xs sm:text-[13px] tracking-[0.35em] text-[#c9a96e] uppercase mb-4"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            Certificación Oficial
          </motion.p>

          <motion.h2
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-5 leading-none"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            Fair{" "}
            <span className="text-[#c9a96e]">Trade</span>
          </motion.h2>

          <motion.p
            className="font-body font-light text-sm sm:text-base text-white/45 leading-relaxed max-w-md mx-auto lg:mx-0 mb-10"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Cada bolsa de Pakal Kape lleva el respaldo de la certificación Fair
            Trade, garantía de que los productores de Jaltenango reciben una
            compensación justa y digna. Un café que sabe mejor porque detrás
            hay un comercio más humano.
          </motion.p>

          {/* Divider */}
          <motion.div
            className="h-px bg-white/[0.06] mb-8 mx-auto lg:mx-0 max-w-md"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={inView ? { scaleX: 1, opacity: 1 } : {}}
            style={{ originX: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            <Pill inView={inView} delay={0.65}>Precio justo al productor</Pill>
            <Pill inView={inView} delay={0.72}>Comercio ético</Pill>
            <Pill inView={inView} delay={0.79}>Comunidades sostenibles</Pill>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FairTrade;
