import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { brandInfo, contactInfo } from "../../data/content";

const IconInstagram = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

const IconFacebook = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
import logo from "../../assets/logo_pakal.jpeg";

/* ── animation variants ─────────────────────────────── */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

// Each letter flips in on Y-axis
const letterVariant = {
  hidden: { opacity: 0, rotateX: -90, y: 20 },
  visible: (i) => ({
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { delay: 0.35 + i * 0.045, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── component ──────────────────────────────────────── */
const Hero = ({ scrollTo }) => {
  const { scrollY } = useScroll();
  // Subtle parallax on the whole content block
  const y = useTransform(scrollY, [0, 600], [0, -60]);

  const letters = brandInfo.name.split("");

  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-[#080808] flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        style={{ y }}
        className="text-center max-w-5xl mx-auto w-full"
      >
        {/* ── Logo — boxy editorial style ── */}
        <motion.div variants={fadeUp} className="mb-10 sm:mb-14">
          <div className="relative w-44 sm:w-64 mx-auto">
            {/* Corner bracket accents */}
            <div className="absolute -top-2 -left-2 w-5 h-5 border-t border-l border-[#c9a96e]/60 z-10 pointer-events-none" />
            <div className="absolute -top-2 -right-2 w-5 h-5 border-t border-r border-[#c9a96e]/60 z-10 pointer-events-none" />
            <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b border-l border-[#c9a96e]/60 z-10 pointer-events-none" />
            <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b border-r border-[#c9a96e]/60 z-10 pointer-events-none" />
            {/* Subtle outer glow border */}
            <div className="absolute inset-0 border border-[#c9a96e]/15 pointer-events-none" />
            <motion.img
              src={logo}
              alt="Pakal Kape logo"
              className="w-full h-auto object-cover block"
              whileHover={{ scale: 1.03, filter: "brightness(1.08)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>

        {/* ── Label ── */}
        <motion.p
          variants={fadeUp}
          className="font-heading text-xs sm:text-[13px] tracking-[0.35em] text-[#c9a96e] uppercase mb-7 sm:mb-9"
        >
          Café de Especialidad · Jaltenango, Chiapas · México
        </motion.p>

        {/* ── Letter-by-letter title ── */}
        <h1
          className="font-display font-black text-white leading-none tracking-tighter mb-8 sm:mb-10 perspective-[800px]"
          style={{ fontSize: "clamp(3.2rem, 13vw, 10rem)" }}
          aria-label={brandInfo.name}
        >
          {letters.map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariant}
              initial="hidden"
              animate="visible"
              whileHover={char !== " " ? { color: "#c9a96e", y: -8, transition: { duration: 0.18, ease: "easeOut" } } : {}}
              className="inline-block cursor-default"
              style={{ transformStyle: "preserve-3d" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* ── Animated gold divider ── */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-5 mb-8 sm:mb-10"
        >
          <motion.div
            className="h-px bg-[#c9a96e]"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 48, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
          <p className="font-heading text-[11px] sm:text-xs tracking-[0.3em] text-white/30 uppercase whitespace-nowrap">
            Compromiso · Origen · Pasión
          </p>
          <motion.div
            className="h-px bg-[#c9a96e]"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 48, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* ── Tagline ── */}
        <motion.p
          variants={fadeUp}
          className="font-body font-light text-sm sm:text-base text-white/40 max-w-sm sm:max-w-md mx-auto leading-relaxed mb-10 sm:mb-14"
        >
          {brandInfo.description}
        </motion.p>

        {/* ── CTA buttons with hover glow ── */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-14"
        >
          <motion.button
            onClick={() => scrollTo("productos")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="font-heading text-xs sm:text-[13px] tracking-[0.25em] uppercase px-10 py-4 bg-[#c9a96e] text-black hover:bg-[#d4b57e] transition-colors duration-300 shadow-[0_0_30px_rgba(201,169,110,0.25)] hover:shadow-[0_0_50px_rgba(201,169,110,0.45)]"
          >
            Explorar Productos
          </motion.button>
          <motion.button
            onClick={() => scrollTo("historia")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="font-heading text-xs sm:text-[13px] tracking-[0.25em] uppercase px-10 py-4 border border-white/15 text-white/60 hover:text-white hover:border-white/40 transition-colors duration-300"
          >
            Nuestra Historia
          </motion.button>
        </motion.div>

        {/* ── Social icons ── */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-6"
        >
          <div className="h-px w-8 bg-white/8" />
          <motion.a
            href={contactInfo.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Pakal Kape"
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="text-white/25 hover:text-[#c9a96e] transition-colors duration-300"
          >
            <IconInstagram className="w-4 h-4" />
          </motion.a>
          <motion.a
            href={contactInfo.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook de Pakal Kape"
            whileHover={{ scale: 1.2, rotate: -15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="text-white/25 hover:text-[#c9a96e] transition-colors duration-300"
          >
            <IconFacebook className="w-4 h-4" />
          </motion.a>
          <div className="h-px w-8 bg-white/8" />
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.button
        onClick={() => scrollTo("historia")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        aria-label="Desplazar hacia abajo"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-white/15" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
