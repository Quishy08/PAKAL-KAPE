import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { procesosData } from "../../data/content";

/* ── Individual step row with 3D entrance ────────────── */
const StepRow = ({ step, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const IconComponent = step.icon;

  return (
    <div ref={ref}>
      {/* Border line draws in left → right */}
      <motion.div
        className="h-px bg-[#d8d3ca]"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        style={{ originX: 0 }}
        transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Row content — 3D flip in from top edge */}
      <motion.div
        className="py-10 sm:py-12"
        initial={{ opacity: 0, rotateX: -18, y: 36 }}
        animate={inView ? { opacity: 1, rotateX: 0, y: 0 } : {}}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformPerspective: 900, transformStyle: "preserve-3d" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-12">

          {/* Number + floating icon */}
          <div className="flex items-center sm:items-start gap-5 flex-shrink-0">

            {/* Number flips in on Y-axis */}
            <motion.span
              className="font-display text-5xl sm:text-6xl font-bold text-[#8a8178] leading-none tabular-nums"
              initial={{ opacity: 0, rotateY: -80 }}
              animate={inView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{
                duration: 0.75,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ display: "inline-block", transformPerspective: 400 }}
            >
              {String(index + 1).padStart(2, "0")}
            </motion.span>

            {/* Icon pops in then floats */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -30 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
                delay: 0.3,
              }}
              className="mt-1 sm:mt-3"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.35,
                }}
              >
                <IconComponent className="w-5 h-5 text-[#c9a96e]" />
              </motion.div>
            </motion.div>
          </div>

          {/* Text — slides in from right */}
          <div className="flex-1">
            <motion.h3
              className="font-display text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-1"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              {step.title}
            </motion.h3>

            <motion.p
              className="font-heading text-xs tracking-[0.25em] text-[#c9a96e] uppercase mb-4"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              {step.subtitle}
            </motion.p>

            <motion.p
              className="font-body text-[#666] text-sm sm:text-base leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            >
              {step.description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* ── Section ─────────────────────────────────────────── */
const Proceso = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="proceso" className="bg-[#f5f2ec] py-24 sm:py-36 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">

        {/* Header with 3D title */}
        <div ref={titleRef} className="mb-16 sm:mb-20" style={{ perspective: "700px" }}>
          <motion.p
            className="font-heading text-xs sm:text-[13px] tracking-[0.35em] text-[#c9a96e] uppercase mb-4"
            initial={{ opacity: 0, y: 18 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Proceso
          </motion.p>
          <motion.h2
            className="font-display text-4xl sm:text-5xl font-bold text-[#1a1a1a]"
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            animate={titleInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 1, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformStyle: "preserve-3d" }}
          >
            Nuestro Proceso
          </motion.h2>
        </div>

        {/* Steps */}
        <div>
          {procesosData.map((step, i) => (
            <StepRow key={i} step={step} index={i} />
          ))}

          {/* Final closing line */}
          <motion.div
            className="h-px bg-[#d8d3ca]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            style={{ originX: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </section>
  );
};

export default Proceso;
