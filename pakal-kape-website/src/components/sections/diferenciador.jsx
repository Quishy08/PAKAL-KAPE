import { Star } from "lucide-react";

const Diferenciador = ({ visibleSections }) => {
  const isVisible = visibleSections.historia;

  return (
    <section
      className={`py-32 px-4 bg-gradient-to-br from-stone-900 via-amber-900 to-stone-900 text-white relative overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "section-visible" : "section-enter"
      }`}
    >
      {/* Background Stars */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute anim-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <Star className="w-4 h-4 text-white" />
          </div>
        ))}
      </div>

      <div
        className={`max-w-6xl mx-auto text-center relative z-10 ${
          isVisible ? "anim-scale" : "opacity-0"
        }`}
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-16">
          ¿Qué Hace Este Café <span className="text-amber-400">Diferente?</span>
        </h2>

        <div className="relative">
          <div
            className="absolute -inset-8 bg-gradient-to-r from-amber-600/20 via-orange-500/20 to-amber-600/20 rounded-full filter blur-3xl"
            aria-hidden="true"
          />
          <p className="relative text-3xl md:text-4xl leading-relaxed font-light px-8">
            Nuestro café es una{" "}
            <span className="text-amber-300 font-bold">
              expresión auténtica
            </span>
            , ya que cuidamos y supervisamos minuciosamente cada etapa del
            proceso del grano, desde el cultivo de los cerezos hasta llegar a tu
            taza, garantizando así la expresión auténtica de cada una de sus
            identidades.
          </p>
        </div>

        <div
          className="mt-12 flex justify-center space-x-3"
          role="img"
          aria-label="5 estrellas"
        >
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-10 h-10 text-amber-400 fill-amber-400 anim-pulse"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciador;
