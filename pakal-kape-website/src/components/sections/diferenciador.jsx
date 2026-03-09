import { Star } from "lucide-react";

const Diferenciador = ({ visibleSections }) => {
  const isVisible = visibleSections.historia;

  return (
    <section
      className={
        "py-16 sm:py-24 lg:py-32 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden transition-opacity duration-1000 " +
        (isVisible ? "section-visible" : "section-enter")
      }
    >
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute anim-float"
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: Math.random() * 3 + "s",
            }}
          >
            <Star className="w-4 h-4 text-white" />
          </div>
        ))}
      </div>

      <div
        className={
          "max-w-6xl mx-auto text-center relative z-10 " +
          (isVisible ? "anim-scale" : "opacity-0")
        }
      >
        <h2 className="font-display text-3xl sm:text-5xl md:text-7xl font-bold mb-8 sm:mb-16">
          ¿Qué Hace Este Café <span className="text-green-400">Diferente?</span>
        </h2>
        <div className="relative">
          <div
            className="absolute -inset-8 bg-gradient-to-r from-green-600/20 via-amber-500/20 to-green-600/20 rounded-full filter blur-3xl"
            aria-hidden="true"
          />
          <p className="relative font-body text-base sm:text-xl md:text-3xl leading-relaxed px-4 sm:px-8 text-gray-100">
            Nuestro café es una{" "}
            <span className="text-green-400 font-bold">
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
              className="w-10 h-10 text-green-500 fill-green-500 anim-pulse"
              style={{ animationDelay: i * 0.15 + "s" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diferenciador;
