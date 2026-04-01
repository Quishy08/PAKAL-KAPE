import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import { contactInfo } from "../../data/content";
import { sendWhatsAppMessage } from "../../utils/whatsapp";

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

const Contacto = () => (
  <section id="contacto" className="bg-[#080808] py-24 sm:py-36 px-6 sm:px-10">
    <div className="max-w-5xl mx-auto">
      <FadeUp>
        <p className="font-heading text-xs sm:text-[13px] tracking-[0.35em] text-[#c9a96e] uppercase mb-5">
          Contacto
        </p>
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-5">
          Hablemos
        </h2>
        <p className="font-body font-light text-sm sm:text-base text-white/35 max-w-sm leading-relaxed mb-16 sm:mb-20">
          ¿Interesado en nuestros productos? Contáctanos directamente y con
          gusto te atendemos.
        </p>
      </FadeUp>

      {/* Contact cards */}
      <div className="grid sm:grid-cols-2 gap-3 mb-16 sm:mb-20">
        <FadeUp delay={0.08}>
          <button
            onClick={() =>
              sendWhatsAppMessage(
                "información sobre productos",
                contactInfo.phoneNumber
              )
            }
            className="group w-full p-7 sm:p-9 border border-white/8 hover:border-[#c9a96e]/40 text-left transition-all duration-400"
          >
            <MessageCircle className="w-5 h-5 text-[#c9a96e] mb-5" />
            <p className="font-heading text-xs tracking-[0.25em] text-white/25 uppercase mb-2">
              WhatsApp
            </p>
            <p className="font-body text-white text-base sm:text-lg mb-5">
              {contactInfo.phoneNumber}
            </p>
            <p className="font-heading text-xs tracking-widest text-[#c9a96e] uppercase group-hover:opacity-80 transition-opacity">
              Escribir mensaje →
            </p>
          </button>
        </FadeUp>

        <FadeUp delay={0.13}>
          <a
            href={"mailto:" + contactInfo.email}
            className="group block w-full p-7 sm:p-9 border border-white/8 hover:border-[#c9a96e]/40 text-left transition-all duration-400"
          >
            <Mail className="w-5 h-5 text-[#c9a96e] mb-5" />
            <p className="font-heading text-xs tracking-[0.25em] text-white/25 uppercase mb-2">
              Email
            </p>
            <p className="font-body text-white text-sm sm:text-base break-all mb-5">
              {contactInfo.email}
            </p>
            <p className="font-heading text-xs tracking-widest text-[#c9a96e] uppercase group-hover:opacity-80 transition-opacity">
              Enviar correo →
            </p>
          </a>
        </FadeUp>
      </div>

      <div className="h-px bg-white/[0.06] mb-12 sm:mb-16" />

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
        <FadeUp delay={0.1}>
          <p className="font-heading text-xs tracking-[0.3em] text-white/25 uppercase mb-4">
            Síguenos
          </p>
          <div className="flex gap-5">
            <motion.a
              href={contactInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Pakal Kape"
              whileHover={{ scale: 1.1, color: "#c9a96e" }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="flex items-center gap-3 px-5 py-3 border border-white/8 hover:border-[#c9a96e]/35 text-white/40 hover:text-[#c9a96e] transition-all duration-300"
            >
              <IconInstagram className="w-5 h-5 flex-shrink-0" />
              <span className="font-heading text-xs tracking-[0.2em] uppercase">Instagram</span>
            </motion.a>
            <motion.a
              href={contactInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Pakal Kape"
              whileHover={{ scale: 1.1, color: "#c9a96e" }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="flex items-center gap-3 px-5 py-3 border border-white/8 hover:border-[#c9a96e]/35 text-white/40 hover:text-[#c9a96e] transition-all duration-300"
            >
              <IconFacebook className="w-5 h-5 flex-shrink-0" />
              <span className="font-heading text-xs tracking-[0.2em] uppercase">Facebook</span>
            </motion.a>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="sm:text-right">
            <p className="font-heading text-xs tracking-[0.3em] text-white/20 uppercase mb-2">
              Fundadores
            </p>
            <p className="font-body text-white/55 text-sm">
              {contactInfo.fundadores}
            </p>
            <p className="font-body text-white/20 text-xs mt-1">
              {contactInfo.location}
            </p>
          </div>
        </FadeUp>
      </div>
    </div>
  </section>
);

export default Contacto;
