import { useState, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { productos } from "../../data/content";
import { sendWhatsAppMessage } from "../../utils/whatsapp";

const imageModules = import.meta.glob("../../assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
});

const resolveImage = (path) => {
  const filename = path.split("/").pop();
  return imageModules["../../assets/" + filename]?.default ?? null;
};

/* ── Animated slide carousel ─────────────────────────── */
const Carousel = ({ imagenes, nombre, IconComponent }) => {
  const [[current, dir], setState] = useState([0, 0]);
  const total = imagenes.length;

  const paginate = (d) =>
    setState(([c]) => [(c + d + total) % total, d]);

  const variants = {
    enter: (d) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d) => ({ x: d > 0 ? "-35%" : "35%", opacity: 0, scale: 0.97 }),
  };

  return (
    <div className="relative w-full h-full select-none bg-[#111] overflow-hidden">
      <AnimatePresence initial={false} custom={dir} mode="sync">
        <motion.div
          key={current}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {(() => {
            const resolved = resolveImage(imagenes[current]);
            return resolved ? (
              <img
                src={resolved}
                alt={nombre + " " + (current + 1)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <IconComponent className="w-12 h-12 text-white/10" />
              </div>
            );
          })()}
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <motion.button
        onClick={() => paginate(-1)}
        whileHover={{ scale: 1.15, backgroundColor: "rgba(0,0,0,0.85)" }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 flex items-center justify-center bg-black/55 text-white"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-4 h-4" />
      </motion.button>
      <motion.button
        onClick={() => paginate(1)}
        whileHover={{ scale: 1.15, backgroundColor: "rgba(0,0,0,0.85)" }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 flex items-center justify-center bg-black/55 text-white"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-4 h-4" />
      </motion.button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-1.5">
        {imagenes.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setState([i, i > current ? 1 : -1])}
            animate={{ width: i === current ? 20 : 6, backgroundColor: i === current ? "#c9a96e" : "rgba(255,255,255,0.3)" }}
            transition={{ duration: 0.3 }}
            className="h-1 rounded-full"
            aria-label={"Imagen " + (i + 1)}
          />
        ))}
      </div>
    </div>
  );
};

/* ── 3D tilt card ────────────────────────────────────── */
const TiltCard = ({ children, className = "" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

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
      className={className}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

/* ── FadeSlide — slides in from a direction ──────────── */
const FadeSlide = ({ children, delay = 0, fromX = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: fromX, y: fromX === 0 ? 28 : 0 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

/* ── Animating spec row ──────────────────────────────── */
const SpecRow = ({ label, val, delay, inView }) => (
  <motion.div
    className="flex items-baseline gap-4 border-b border-white/[0.06] pb-3"
    initial={{ opacity: 0, x: 18 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    <span className="font-heading text-xs tracking-[0.2em] uppercase text-white/25 w-20 flex-shrink-0">
      {label}
    </span>
    <span className="font-body text-white/60 text-sm">{val}</span>
  </motion.div>
);

/* ── Main section ────────────────────────────────────── */
const Productos = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="productos" className="bg-[#0d0d0d] py-24 sm:py-36 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={titleRef} className="mb-16 sm:mb-20" style={{ perspective: "800px" }}>
          <motion.p
            className="font-heading text-xs sm:text-[13px] tracking-[0.35em] text-[#c9a96e] uppercase mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Productos
          </motion.p>
          <motion.h2
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 40, rotateX: -12 }}
            animate={titleInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformStyle: "preserve-3d" }}
          >
            Nuestros Cafés
          </motion.h2>
        </div>

        {productos.map((producto, idx) => {
          const IconComponent = producto.icon;
          const isReversed = idx % 2 === 1;

          return (
            <ProductBlock
              key={producto.id}
              producto={producto}
              idx={idx}
              isReversed={isReversed}
              IconComponent={IconComponent}
            />
          );
        })}

        <div className="h-px bg-white/[0.06]" />
      </div>
    </section>
  );
};

/* ── Product block — needs its own component for inView ref ── */
const ProductBlock = ({ producto, idx, isReversed, IconComponent }) => {
  const blockRef = useRef(null);
  const inView = useInView(blockRef, { once: true, margin: "-80px" });

  const specs = [
    ["Calidad", producto.calidad],
    ["Variedad", producto.variedad],
    ["Contenido", producto.peso],
  ];

  return (
    <div>
      {/* Animated divider line */}
      <motion.div
        className="h-px bg-white/[0.06] mb-12 sm:mb-16"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        style={{ originX: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />

      <FadeSlide className="mb-10 sm:mb-12">
        <p className="font-heading text-xs tracking-[0.3em] text-white/20 uppercase">
          {String(idx + 1).padStart(2, "0")} /{" "}
          {String(productos.length).padStart(2, "0")}
        </p>
      </FadeSlide>

      <div
        ref={blockRef}
        className={
          "flex flex-col gap-10 sm:gap-14 mb-20 sm:mb-32 " +
          (isReversed ? "lg:flex-row-reverse" : "lg:flex-row")
        }
      >
        {/* ── Carousel with 3D tilt ── */}
        <motion.div
          className="w-full lg:w-[52%] flex-shrink-0"
          initial={{ opacity: 0, x: isReversed ? 60 : -60, rotateY: isReversed ? -12 : 12 }}
          animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
          transition={{ duration: 1, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformPerspective: 900 }}
        >
          <TiltCard className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[500px]">
            <Carousel
              imagenes={producto.imagenes}
              nombre={producto.name}
              IconComponent={IconComponent}
            />
            {/* Reflection / depth shadow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(201,169,110,0.04) 0%, transparent 60%)",
                transform: "translateZ(1px)",
              }}
            />
          </TiltCard>
        </motion.div>

        {/* ── Product info ── */}
        <div className="flex flex-col justify-between py-0 sm:py-4 lg:py-8 flex-1 min-w-0">
          <div>
            <FadeSlide delay={0.12} fromX={isReversed ? -28 : 28}>
              <p className="font-heading text-xs tracking-[0.3em] text-[#c9a96e] uppercase mb-3">
                {producto.tipo}
              </p>
              <h3
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight"
                style={{ perspective: "600px" }}
              >
                <motion.span
                  style={{ display: "block", transformStyle: "preserve-3d" }}
                  initial={{ opacity: 0, rotateX: -20, y: 20 }}
                  animate={inView ? { opacity: 1, rotateX: 0, y: 0 } : {}}
                  transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                >
                  {producto.name}
                </motion.span>
              </h3>
              <p className="font-body text-white/30 text-sm mb-8 sm:mb-10">
                {producto.subtitle}
              </p>
            </FadeSlide>

            <FadeSlide delay={0.22} fromX={isReversed ? -20 : 20}>
              <p className="font-body text-white/55 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-md">
                {producto.descripcion}
              </p>
            </FadeSlide>

            {/* Spec rows */}
            <motion.div
              className="space-y-3 border-t border-white/[0.06] pt-6 mb-10 sm:mb-12"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.28 }}
            >
              {specs.map(([label, val], si) => (
                <SpecRow
                  key={label}
                  label={label}
                  val={val}
                  delay={0.3 + si * 0.07}
                  inView={inView}
                />
              ))}
            </motion.div>
          </div>

          {/* Price + CTA */}
          <FadeSlide delay={0.42} fromX={isReversed ? -20 : 20}>
            <motion.p
              className="font-display text-3xl sm:text-4xl font-bold text-[#c9a96e] mb-5"
              whileHover={{ textShadow: "0 0 30px rgba(201,169,110,0.6)" }}
            >
              {producto.precio}
            </motion.p>
            <motion.button
              onClick={() =>
                sendWhatsAppMessage(producto.name + " (" + producto.tipo + ")")
              }
              whileHover={{
                backgroundColor: "#c9a96e",
                color: "#000",
                boxShadow: "0 0 40px rgba(201,169,110,0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 border border-[#c9a96e]/50 text-[#c9a96e] font-heading text-[10px] tracking-[0.25em] uppercase"
              aria-label={"Ordenar " + producto.name + " por WhatsApp"}
            >
              <MessageCircle className="w-4 h-4" />
              Ordenar por WhatsApp
            </motion.button>
          </FadeSlide>
        </div>
      </div>
    </div>
  );
};

export default Productos;
