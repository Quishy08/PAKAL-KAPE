import { MessageCircle } from "lucide-react";
import { productos } from "../../data/content";
import { sendWhatsAppMessage } from "../../utils/whatsapp";

const Productos = ({ visibleSections }) => {
  const isVisible = visibleSections.productos;

  return (
    <section
      id="productos"
      className={`py-32 px-4 bg-gradient-to-b from-white via-amber-50/20 to-white relative overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "section-visible" : "section-enter"
      }`}
    >
      {/* Background Effects */}
      <div
        className="absolute top-20 right-10 w-96 h-96 bg-amber-300 rounded-full filter blur-3xl opacity-10 anim-float"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-green-300 rounded-full filter blur-3xl opacity-10 anim-float"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <header
          className={`text-center mb-24 ${
            isVisible ? "anim-slide-down" : "opacity-0"
          }`}
        >
          <h2 className="text-6xl md:text-8xl font-bold text-stone-900 mb-8">
            Nuestros Productos
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
          </div>
          <p className="text-2xl text-stone-600 font-light">
            Selección exclusiva de café de especialidad y chocolate artesanal
          </p>
        </header>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-16">
          {productos.map((producto) => {
            const IconComponent = producto.icon;

            return (
              <article
                key={producto.id}
                className={`group relative ${
                  isVisible ? "anim-slide-up" : "opacity-0"
                } ${producto.popular ? "lg:scale-105" : ""}`}
                style={{ animationDelay: producto.delay }}
              >
                {/* Popular Badge */}
                {producto.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-full text-sm font-bold shadow-xl anim-pulse">
                    ⭐ MÁS POPULAR
                  </div>
                )}

                {/* Product Image */}
                <figure className="relative w-full h-80 rounded-3xl overflow-hidden mb-8 shadow-2xl group-hover:shadow-3xl transition-all">
                  <img
                    src={producto.imagen}
                    alt={producto.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent" />
                  <figcaption className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {producto.name}
                    </h3>
                    <p className="text-amber-300 text-lg font-semibold">
                      {producto.subtitle}
                    </p>
                  </figcaption>
                </figure>

                {/* Product Details */}
                <div className="space-y-6">
                  <p className="text-stone-600 text-lg text-center font-medium">
                    {producto.altura}
                  </p>

                  {/* Features List */}
                  <ul
                    className="space-y-3"
                    aria-label={`Características de ${producto.name}`}
                  >
                    {producto.features.map((feature, j) => (
                      <li
                        key={j}
                        className="flex items-center space-x-3 text-stone-700"
                      >
                        <span
                          className="w-2 h-2 rounded-full bg-amber-600 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => sendWhatsAppMessage(producto.name)}
                    className="w-full mt-8 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white"
                    aria-label={`Ordenar ${producto.name} por WhatsApp`}
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
