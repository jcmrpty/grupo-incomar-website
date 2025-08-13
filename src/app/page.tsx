export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Hero Section - Sin espacio superior */}
      <section className="relative overflow-hidden pt-4 pb-20" itemScope itemType="https://schema.org/Organization">
        {/* Background gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tl from-blue-300/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content - Texto */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* H1 optimizado SEO con keywords principales */}
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight"
                  itemProp="name"
                >
                  Freight Forwarder y Logística Internacional{' '}
                  <span className="text-blue-600">
                    desde Panamá hacia el mundo
                  </span>
                </h1>
                
                {/* Párrafo optimizado con LSI keywords */}
                <p 
                  className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg"
                  itemProp="description"
                >
                  Grupo Incomar es su socio estratégico Freight Forwarder 
                  y logística internacional. +25 años conectando empresas centroamericanas 
                  con el mundo.
                </p>
              </div>

              {/* CTA Button */}
              <div>
                <a
                  href="https://wa.me/50766340008?text=Solicito%20cotización"
  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
>
  Solicitar Cotización
</a>
              </div>
            </div>

            {/* Right Content - Imagen del barco optimizada */}
            <div className="relative h-[600px] overflow-hidden rounded-2xl border-4 border-blue-500 shadow-2xl">
              <img 
                src="/images/container-ship-hero.jpg"
                alt="Barco carguero de contenedores en puerto - Servicios de freight forwarding y transporte marítimo internacional de Grupo Incomar desde Panamá hacia Centroamérica"
                className="absolute right-0 h-full w-[180%] object-cover object-left-top"
                width={800}
                height={600}
                loading="eager"
                itemProp="image"
              />
              
            
            </div>
          </div>
        </div>
      </section>
      

      {/* Sección adicional placeholder para contenido futuro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Próximamente: Más secciones optimizadas
          </h2>
          <p className="text-gray-600">
            Servicios, Casos de Éxito, Testimonios, FAQ y más...
          </p>
        </div>
      </section>
    </div>
  );
}