import { useState } from "react";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { productos } from "../../data/content";
import { sendWhatsAppMessage } from "../../utils/whatsapp";

const imageModules = import.meta.glob("../../assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
});

const resolveImage = (path) => {
  // path comes as "/src/assets/filename.jpg" → key is "../../assets/filename.jpg"
  const filename = path.split("/").pop();
  const key = "../../assets/" + filename;
  return imageModules[key]?.default ?? null;
};

const Carousel = ({ imagenes, nombre, IconComponent }) => {
  const [current, setCurrent] = useState(0);
  const total = imagenes.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className="relative w-full h-full select-none">
      {imagenes.map((src, i) => (
        <div
          key={i}
          className={
            "absolute inset-0 transition-opacity duration-500 " +
            (i === current ? "opacity-100 z-10" : "opacity-0 z-0")
          }
        >
          <img
            src={resolveImage(src) ?? src}
            alt={nombre + " — imagen " + (i + 1)}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "flex";
            }}
          />
          <div
            className="w-full h-full bg-gradient-to-br from-amber-900 via-stone-800 to-black items-center justify-center"
            style={{ display: "none" }}
          >
            <div className="text-center text-white/50">
              <IconComponent className="w-20 h-20 mx-auto mb-3" />
              <p className="text-base">Pakal Kape</p>
            </div>
          </div>
        </div>
      ))}

      {/* Fallback if no images loaded yet */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-stone-800 to-black flex items-center justify-center z-0">
        <div className="text-center text-white/30">
          <IconComponent className="w-20 h-20 mx-auto mb-3" />
          <p className="text-base">Pakal Kape</p>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-all"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition-all"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {imagenes.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={
              "w-2.5 h-2.5 rounded-full transition-all " +
              (i === current ? "bg-white scale-125" : "bg-white/50")
            }
            aria-label={"Ir a imagen " + (i + 1)}
          />
        ))}
      </div>
    </div>
  );
};

const Productos = ({ visibleSections }) => {
  const isVisible = visibleSections.productos;

  return (
    <section
      id="productos"
      className={
        "py-16 sm:py-24 lg:py-32 px-4 bg-gradient-to-b from-white to-stone-50 relative overflow-hidden transition-opacity duration-1000 " +
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

      <div className="max-w-6xl mx-auto relative z-10">
        <header
          className={
            "text-center mb-12 sm:mb-20 lg:mb-24 " + (isVisible ? "anim-slide-down" : "opacity-0")
          }
        >
          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-bold text-gray-900 mb-6 sm:mb-8">
            Nuestros Productos
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-4 sm:mb-6">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-green-600 to-transparent" />
          </div>
          <p className="font-body text-base sm:text-xl md:text-2xl text-gray-600 font-light">
            Café de especialidad Geisha — directo de Jaltenango, Chiapas
          </p>
        </header>

        <div className="flex flex-col gap-10 sm:gap-16 lg:gap-20">
          {productos.map((producto) => {
            const IconComponent = producto.icon;

            return (
              <article
                key={producto.id}
                className={
                  "group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all overflow-hidden border-2 border-gray-100 hover:border-green-500 " +
                  (isVisible ? "anim-slide-up" : "opacity-0")
                }
                style={{ animationDelay: producto.delay }}
              >
                <div className="flex flex-col lg:flex-row min-h-0 lg:min-h-[520px]">
                  {/* Carousel — left side on desktop */}
                  <div className="relative w-full lg:w-[45%] h-56 sm:h-72 lg:h-auto flex-shrink-0 overflow-hidden">
                    <Carousel
                      imagenes={producto.imagenes}
                      nombre={producto.name}
                      IconComponent={IconComponent}
                    />
                    {/* Overlay gradient fading into card on desktop */}
                    <div className="hidden lg:block absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-white z-20" />
                  </div>

                  {/* Info — right side */}
                  <div className="flex flex-col justify-between p-5 sm:p-8 lg:p-12 flex-1">
                    {/* Header */}
                    <div>
                      <p className="font-body text-xs sm:text-sm font-semibold tracking-widest text-green-600 uppercase mb-2">
                        {producto.tipo}
                      </p>
                      <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-1">
                        {producto.name}
                      </h3>
                      <p className="font-heading text-base sm:text-xl text-amber-700 font-semibold mb-4 sm:mb-5">
                        {producto.subtitle}
                      </p>

                      <p className="font-body text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-8">
                        {producto.descripcion}
                      </p>

                      {/* Details grid */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-5 sm:mb-8">
                        <div className="bg-stone-50 rounded-xl px-4 py-3">
                          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Calidad</p>
                          <p className="text-sm font-semibold text-gray-800">{producto.calidad}</p>
                        </div>
                        <div className="bg-stone-50 rounded-xl px-4 py-3">
                          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Variedad</p>
                          <p className="text-sm font-semibold text-gray-800">{producto.variedad}</p>
                        </div>
                        <div className="bg-stone-50 rounded-xl px-4 py-3">
                          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Contenido</p>
                          <p className="text-sm font-semibold text-gray-800">{producto.peso}</p>
                        </div>
                        <div className="bg-green-50 rounded-xl px-4 py-3 border border-green-200">
                          <p className="text-xs text-green-600 uppercase tracking-wide mb-1">Precio</p>
                          <p className="text-lg font-bold text-green-700">{producto.precio}</p>
                        </div>
                      </div>

                      {/* Features list */}
                      <ul className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-8" aria-label={"Características de " + producto.name}>
                        {producto.features.map((feature, j) => (
                          <li key={j} className="flex items-center space-x-3 text-gray-700">
                            <span
                              className="w-2 h-2 rounded-full bg-green-600 flex-shrink-0"
                              aria-hidden="true"
                            />
                            <span className="font-body text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() =>
                        sendWhatsAppMessage(
                          producto.name + " (" + producto.tipo + ")"
                        )
                      }
                      className="w-full py-5 rounded-full font-heading font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white"
                      aria-label={"Ordenar " + producto.name + " por WhatsApp"}
                    >
                      <MessageCircle className="w-6 h-6" aria-hidden="true" />
                      <span>Ordenar por WhatsApp</span>
                    </button>
                  </div>
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
