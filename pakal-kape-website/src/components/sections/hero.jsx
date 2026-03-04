import { Coffee, ChevronDown } from "lucide-react";
import { brandInfo } from "../../data/content";
import logo from "../../assets/logo_pakal.jpeg";

const Hero = ({ scrollTo }) => {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-stone-900 to-black"
    >
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute anim-float"
            style={{
              left: 10 + i * 12 + "%",
              top: 15 + (i % 4) * 20 + "%",
              animationDelay: i * 0.5 + "s",
              animationDuration: 3 + i * 0.3 + "s",
            }}
          >
            <Coffee className="w-6 h-6 md:w-10 md:h-10 text-green-500/30" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="anim-fade">
          <div className="mb-8 bg-green-900/20 backdrop-blur-sm p-8 rounded-3xl inline-block border-2 border-green-600">
            <img
              src={logo}
              alt="Pakal Kape"
              className="h-128 md:h-100 w-auto mx-auto"
            />
          </div>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
            {brandInfo.name}
          </h1>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-green-500" />
            <p className="font-heading text-xl md:text-2xl text-green-400 font-medium tracking-widest uppercase">
              {brandInfo.tagline}
            </p>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-green-500" />
          </div>

          <p className="font-body text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mb-16 leading-relaxed">
            {brandInfo.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => scrollTo("productos")}
              className="group bg-green-600 hover:bg-green-700 text-white px-12 py-5 rounded-full font-heading text-lg font-semibold transition-all transform hover:scale-110 shadow-2xl shadow-green-600/50 flex items-center justify-center space-x-3"
            >
              <span>Explorar Productos</span>
              <Coffee className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("historia")}
              className="bg-amber-700 hover:bg-amber-800 text-white px-12 py-5 rounded-full font-heading text-lg font-semibold transition-all transform hover:scale-110 border-2 border-amber-600 shadow-xl"
            >
              Nuestra Historia
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo("historia")}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 anim-float"
        aria-label="Desplazar hacia abajo"
      >
        <ChevronDown className="w-12 h-12 text-green-500" />
      </button>
    </section>
  );
};

export default Hero;
