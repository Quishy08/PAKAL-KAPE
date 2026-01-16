import { Star } from "lucide-react";
import { caracteristicas, fundadores } from "../../data/content";
import cafeImage from "../../assets/finca_cafe.jpg";

const Historia = ({ visibleSections }) => {
  const isVisible = visibleSections.historia;

  return (
    <section
      id="historia"
      className={`py-32 px-4 bg-gradient-to-b from-white to-amber-50/30 relative overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "section-visible" : "section-enter"
      }`}
    >
      {/* Background Effects */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-200 rounded-full filter blur-3xl opacity-10 anim-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-200 rounded-full filter blur-3xl opacity-10 anim-pulse"
        style={{ animationDelay: "1s" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <header
          className={`text-center mb-20 ${
            isVisible ? "anim-slide-down" : "opacity-0"
          }`}
        >
          <h2 className="text-6xl md:text-8xl font-bold text-stone-900 mb-8">
            Nuestra Historia
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
          </div>
        </header>

        <div className="max-w-5xl mx-auto space-y-20">
          {/* Introduction + Image */}
          <article
            className={`${isVisible ? "anim-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-2xl md:text-3xl text-stone-700 leading-relaxed text-center mb-12 font-light">
              Café Pakal Kape nace de la idea de poder crear una marca de café
              en la cual se llegue a{" "}
              <strong className="text-amber-700 font-semibold">
                dignificar y valorar el trabajo de nuestros productores
              </strong>
              , ya que ellos son la base para poder obtener el mejor café con la
              mejor calidad.
            </p>

            <figure className="relative w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={cafeImage}
                alt="Plantación de café Pakal Kape en las montañas de Chiapas"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </figure>
          </article>

          {/* Second Paragraph */}
          <div
            className={`${isVisible ? "anim-slide-right" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-2xl md:text-3xl text-stone-700 leading-relaxed font-light">
              Mediante los diversos procesos de secado y fermentación que
              realizan, hacen que cada grano de café obtenga un{" "}
              <strong className="text-green-700 font-semibold">
                sabor excepcional y único
              </strong>
              . Es por eso que en Pakal Kape, como nuestro nombre lo indica, nos
              dedicamos enteramente a proteger y salvaguardar la integridad y
              calidad de nuestro producto así como la de nuestros productores.
            </p>
          </div>

          {/* Features Grid */}
          <div
            className={`grid md:grid-cols-4 gap-8 mt-20 ${
              isVisible ? "anim-scale" : "opacity-0"
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            {caracteristicas.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <article
                  key={i}
                  className="group text-center transform hover:scale-110 transition-all duration-500"
                  style={{ animationDelay: `${0.8 + i * 0.1}s` }}
                >
                  <div
                    className={`${item.bg} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-all`}
                  >
                    <IconComponent
                      className={`w-12 h-12 ${item.color} group-hover:scale-125 transition-transform`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-600">{item.desc}</p>
                </article>
              );
            })}
          </div>

          {/* Founders Section */}
          <section
            className={`mt-32 ${isVisible ? "anim-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "1s" }}
          >
            <header className="text-center mb-16">
              <h3 className="text-5xl md:text-6xl font-bold text-stone-900 mb-4">
                Fundadores
              </h3>
              <p className="text-xl text-stone-600">
                Visionarios del café de especialidad
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
              {fundadores.map((fundador, i) => (
                <article key={i} className="group text-center">
                  <figure className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                    <img
                      src={fundador.imagen}
                      alt={`${fundador.nombre}, ${fundador.rol} de Pakal Kape`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </figure>
                  <h4 className="text-3xl font-bold text-stone-900 mb-2">
                    {fundador.nombre}
                  </h4>
                  <p className="text-amber-700 text-lg font-semibold mb-3">
                    {fundador.rol}
                  </p>
                  <div
                    className="flex justify-center space-x-1"
                    role="img"
                    aria-label="5 estrellas"
                  >
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-5 h-5 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Historia;
