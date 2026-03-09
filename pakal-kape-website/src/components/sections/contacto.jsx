import {
  MessageCircle,
  Mountain,
  Sparkles,
  Mail,
  Instagram,
  Facebook,
} from "lucide-react";
import { contactInfo } from "../../data/content";
import { sendWhatsAppMessage } from "../../utils/whatsapp";

const Contacto = ({ visibleSections }) => {
  const isVisible = visibleSections.contacto;

  return (
    <section
      id="contacto"
      className={
        "py-16 sm:py-24 lg:py-32 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden transition-opacity duration-1000 " +
        (isVisible ? "section-visible" : "section-enter")
      }
    >
      <div
        className="absolute inset-0 opacity-5 anim-rotate"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div
        className={
          "max-w-5xl mx-auto text-center relative z-10 " +
          (isVisible ? "anim-scale" : "opacity-0")
        }
      >
        <header className="mb-16">
          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-bold mb-8 sm:mb-12">
            Contáctanos
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-16">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
          </div>
        </header>

        <div className="space-y-12">
          <p className="font-body text-xl sm:text-3xl md:text-4xl font-light leading-relaxed">
            ¿Interesado en nuestros productos de café de especialidad?
          </p>
          <p className="font-body text-base sm:text-xl md:text-2xl text-green-400 font-light">
            Contáctanos para más información sobre nuestros cafés Geisha
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12">
            <button
              onClick={() =>
                sendWhatsAppMessage(
                  "información sobre productos",
                  contactInfo.phoneNumber,
                )
              }
              className="group bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-2xl text-base sm:text-lg font-bold transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-3 font-heading"
            >
              <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <div className="text-sm opacity-90">WhatsApp</div>
                <div className="text-lg">{contactInfo.phoneNumber}</div>
              </div>
            </button>

            <a
              href={"mailto:" + contactInfo.email}
              className="group bg-amber-700 hover:bg-amber-800 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-2xl text-base sm:text-lg font-bold transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-3 font-heading min-w-0"
            >
              <Mail className="w-7 h-7 group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <div className="text-sm opacity-90">Email</div>
                <div className="text-sm sm:text-lg break-all">{contactInfo.email}</div>
              </div>
            </a>
          </div>

          <div className="mt-16 pt-12 border-t border-white/20">
            <p className="font-body text-xl text-green-400 mb-6">
              Síguenos en redes sociales
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 p-4 rounded-full transition-all transform hover:scale-110"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href={contactInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 hover:bg-blue-600 p-4 rounded-full transition-all transform hover:scale-110"
              >
                <Facebook className="w-8 h-8" />
              </a>
            </div>
          </div>

          <div className="mt-20 pt-12 border-t border-white/20 space-y-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Sparkles className="w-6 h-6 text-green-500" />
              <p className="font-heading text-green-500 text-2xl font-semibold">
                Fundadores
              </p>
              <Sparkles className="w-6 h-6 text-green-500" />
            </div>
            <p className="font-heading text-xl sm:text-3xl font-bold">
              {contactInfo.fundadores}
            </p>
            <p className="font-body text-xl text-gray-300 flex items-center justify-center space-x-2">
              <Mountain className="w-5 h-5" />
              <span>{contactInfo.location}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
