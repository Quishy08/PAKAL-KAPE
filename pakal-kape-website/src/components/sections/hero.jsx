import { Coffee, ChevronDown } from "lucide-react";

const Hero = ({ scrollTo }) => {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-900 via-amber-900 to-stone-800"
    >
      {/* Floating Coffee Beans */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute anim-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.3}s`,
            }}
          >
            <Coffee className="w-6 h-6 md:w-10 md:h-10 text-amber-300/20" />
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="anim-fade">
          <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold text-white mb-6 tracking-tight">
            PAKAL KAPE
          </h1>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-400" />
            <p className="text-3xl md:text-5xl text-amber-300 italic font-light">
              Escudo del Café
            </p>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-400" />
          </div>

          <p className="text-xl md:text-3xl text-stone-200 max-w-4xl mx-auto mb-16 leading-relaxed font-light">
            Café de especialidad 100% orgánico de las montañas de Chiapas,
            México
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => scrollTo("productos")}
              className="group bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-full text-lg font-semibold transition-all transform hover:scale-110 shadow-2xl shadow-amber-600/50 flex items-center justify-center space-x-3"
            >
              <span>Explorar Productos</span>
              <Coffee className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("historia")}
              className="bg-white/10 hover:bg-white/20 text-white px-12 py-5 rounded-full text-lg font-semibold transition-all transform hover:scale-110 border-2 border-white/40 backdrop-blur-sm"
            >
              Nuestra Historia
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollTo("historia")}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 anim-float"
        aria-label="Desplazar hacia abajo"
      >
        <ChevronDown className="w-12 h-12 text-white/80" />
      </button>
    </section>
  );
};

export default Hero;
