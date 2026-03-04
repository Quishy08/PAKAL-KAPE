import { MessageCircle } from "lucide-react";
import { productos } from "../../data/content";
import { sendWhatsAppMessage } from "../../utils/whatsapp";

const Productos = ({ visibleSections }) => {
  const isVisible = visibleSections.productos;

  return (
    <section
      id="productos"
      className={
        "py-32 px-4 bg-gradient-to-b from-white to-stone-50 relative overflow-hidden transition-opacity duration-1000 " +
        (isVisible ? "section-visible" : "section-enter")
      }
    >
      <div
        className="absolute top-20 right-10 w-96 h-96 bg-green-200 rounded-full filter blur-3xl opacity-20 anim-float"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-amber-200 rounded-full filter blur-3xl opacity-20 anim-float"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <header
          className={
            "text-center mb-24 " + (isVisible ? "anim-slide-down" : "opacity-0")
          }
        >
          <h2 className="font-display text-6xl md:text-8xl font-bold text-gray-900 mb-8">
            Nuestros Productos
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-green-600 to-transparent" />
          </div>
          <p className="font-body text-2xl text-gray-600 font-light">
            Selección exclusiva de café de especialidad y chocolate artesanal
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-16">
          {productos.map((producto) => {
            const IconComponent = producto.icon;

            return (
              <article
                key={producto.id}
                className={
                  "group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border-2 border-gray-200 hover:border-green-600 " +
                  (isVisible ? "anim-slide-up" : "opacity-0") +
                  (producto.popular ? " ring-4 ring-green-500" : "")
                }
                style={{ animationDelay: producto.delay }}
              >
                {producto.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full text-sm font-bold shadow-xl anim-pulse">
                    ⭐ MÁS POPULAR
                  </div>
                )}

                <figure className="relative w-full h-80 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-amber-800 via-gray-900 to-black flex items-center justify-center">
                    <div className="text-center text-white/60">
                      <IconComponent className="w-24 h-24 mx-auto mb-4" />
                      <p className="text-lg">Imagen de {producto.name}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  <figcaption className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-heading text-3xl font-bold text-white mb-2">
                      {producto.name}
                    </h3>
                    <p className="text-green-400 text-lg font-semibold">
                      {producto.subtitle}
                    </p>
                  </figcaption>
                </figure>

                <div className="p-8 space-y-6">
                  <p className="text-gray-700 text-lg text-center font-medium">
                    {producto.altura}
                  </p>

                  <ul
                    className="space-y-3"
                    aria-label={"Características de " + producto.name}
                  >
                    {producto.features.map((feature, j) => (
                      <li
                        key={j}
                        className="flex items-center space-x-3 text-gray-700"
                      >
                        <span
                          className="w-2 h-2 rounded-full bg-green-600 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="font-body text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => sendWhatsAppMessage(producto.name)}
                    className="w-full mt-8 py-5 rounded-full font-heading font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white"
                    aria-label={"Ordenar " + producto.name + " por WhatsApp"}
                  >
                    <MessageCircle className="w-6 h-6" aria-hidden="true" />
                    <span>Ordenar por WhatsApp</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Productos;
