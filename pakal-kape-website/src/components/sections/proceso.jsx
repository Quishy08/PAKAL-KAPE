import { procesosData } from "../../data/content";

const Proceso = ({ visibleSections }) => {
  const isVisible = visibleSections.proceso;

  return (
    <section
      id="proceso"
      className={`py-32 px-4 bg-gradient-to-b from-white to-stone-100 transition-opacity duration-1000 ${
        isVisible ? "section-visible" : "section-enter"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header
          className={`text-center mb-24 ${
            isVisible ? "anim-slide-down" : "opacity-0"
          }`}
        >
          <h2 className="text-6xl md:text-8xl font-bold text-stone-900 mb-8">
            Nuestro Proceso
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-green-600 to-transparent" />
          </div>
        </header>

        {/* Process Steps */}
        <div className="space-y-32">
          {procesosData.map((step, i) => {
            const IconComponent = step.icon;
            const animationClass =
              step.position === "left" ? "anim-slide-right" : "anim-slide-left";

            return (
              <article
                key={i}
                className={`flex flex-col ${
                  step.position === "right"
                    ? "lg:flex-row-reverse"
                    : "lg:flex-row"
                } items-center gap-16 ${
                  isVisible ? animationClass : "opacity-0"
                }`}
                style={{ animationDelay: step.delay }}
              >
                {/* Icon Circle */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-full filter blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`}
                      aria-hidden="true"
                    />
                    <div
                      className={`relative w-72 h-72 mx-auto bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all transform group-hover:scale-110 group-hover:rotate-6`}
                    >
                      <IconComponent className="w-36 h-36 text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-5xl md:text-6xl font-bold text-stone-900">
                    {step.title}
                  </h3>
                  <p
                    className={`text-3xl font-semibold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}
                  >
                    {step.subtitle}
                  </p>
                  <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Proceso;
