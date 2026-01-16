import { MessageCircle, Mountain, Sparkles } from "lucide-react";
import { contactInfo } from "../../data/content";
import { sendWhatsAppMessage } from "../../utils/whatsapp";

const Contacto = ({ visibleSections }) => {
  const isVisible = visibleSections.contacto;

  return (
    <section
      id="contacto"
      className={`py-32 px-4 bg-gradient-to-br from-stone-900 via-amber-900 to-stone-900 text-white relative overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "section-visible" : "section-enter"
      }`}
    >
      {/* Background Pattern */}
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
        className={`max-w-5xl mx-auto text-center relative z-10 ${
          isVisible ? "anim-scale" : "opacity-0"
        }`}
      >
        {/* Header */}
        <header className="mb-16">
          <h2 className="text-6xl md:text-8xl font-bold mb-12">Contáctanos</h2>
          <div className="flex items-center justify-center space-x-4 mb-16">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>
        </header>

        {/* Content */}
        <div className="space-y-12">
          <p className="text-3xl md:text-4xl font-light leading-relaxed">
            ¿Interesado en nuestros productos de café de especialidad?
          </p>
          <p className="text-2xl text-amber-300 font-light">
            Contáctanos para más información sobre nuestros cafés Geisha y
            chocolate artesanal
          </p>

          {/* WhatsApp Button */}
          <button
            onClick={() =>
              sendWhatsAppMessage(
                "información sobre productos",
                contactInfo.phoneNumber
              )
            }
            className="group bg-green-600 hover:bg-green-700 text-white px-16 py-6 rounded-full text-2xl font-bold transition-all transform hover:scale-110 shadow-2xl shadow-green-600/50 hover:shadow-green-600/80 flex items-center justify-center space-x-4 mx-auto"
            aria-label="Enviar mensaje por WhatsApp"
          >
            <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform" />
            <span>Chatear por WhatsApp</span>
          </button>

          {/* Contact Info */}
          <div className="mt-20 pt-12 border-t border-white/20 space-y-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Sparkles className="w-6 h-6 text-amber-400" />
              <p className="text-amber-400 text-2xl font-semibold">
                Fundadores
              </p>
              <Sparkles className="w-6 h-6 text-amber-400" />
            </div>
            <p className="text-3xl font-bold">{contactInfo.fundadores}</p>
            <p className="text-xl text-stone-300 flex items-center justify-center space-x-2">
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
