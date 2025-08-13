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
{/* Sección Nosotros */}
<section 
  id="nosotros" 
  className="py-20 bg-white relative overflow-hidden"
  itemScope 
  itemType="https://schema.org/AboutPage"
>
  {/* Background decorativo */}
  <div className="absolute top-0 left-0 w-full h-full">
    <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-50/40 rounded-full blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    
    {/* Header de la sección */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" itemProp="name">
        Más de 25 años conectando{' '}
        <span className="text-blue-600">Centroamérica con el mundo</span>
      </h2>
      
      {/* Descripción principal */}
      <div className="max-w-5xl mx-auto space-y-6">
        <p className="text-xl text-gray-700 leading-relaxed" itemProp="description">
          <strong className="text-blue-600">Freight Forwarding de Clase Mundial desde Panamá</strong>
        </p>
        
        <p className="text-lg text-gray-600 leading-relaxed">
          Grupo Incomar es su freight forwarder de confianza especializado en logística internacional 
          con más de 25 años moviendo carga entre Centroamérica y el mundo. Desde nuestras oficinas en 
          Panamá, Guatemala y República Dominicana, conectamos empresas regionales con mercados globales 
          a través de soluciones logísticas integrales.
        </p>
{/* Sección Servicios */}
<section className="py-20 px-4 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Nuestros Servicios <span className="text-blue-600">Especializados</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Soluciones integrales de freight forwarding y logística internacional 
        adaptadas a las necesidades de su empresa
      </p>
    </div>

    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">
      
      {/* Carga Marítima */}
      <div className="group bg-[#0f172a] w-72 mx-auto p-8 px-6 rounded-xl shadow-lg">
        <div className="flex justify-center">
          <svg
            className="group-hover:-translate-y-6 duration-700 text-[60px] text-[#93c5fd]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        <div className="pt-16 group-hover:-translate-y-6 duration-700 text-center">
          <h3 className="text-3xl font-bold text-white">
            Carga<br />Marítima
          </h3>
        </div>
      </div>

      {/* Carga Terrestre */}
      <div className="group bg-[#1e40af] w-72 mx-auto p-8 px-6 rounded-xl shadow-lg">
        <div className="flex justify-center">
          <svg
            className="group-hover:-translate-y-6 duration-700 text-[60px] text-[#bfdbfe]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>
        <div className="pt-16 group-hover:-translate-y-6 duration-700 text-center">
          <h3 className="text-3xl font-bold text-white">
            Carga<br />Terrestre
          </h3>
        </div>
      </div>

      {/* Trámite Aduanal */}
      <div className="group bg-[#3b82f6] w-72 mx-auto p-8 px-6 rounded-xl shadow-lg">
        <div className="flex justify-center">
          <svg
            className="group-hover:-translate-y-6 duration-700 text-[60px] text-[#dbeafe]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="pt-16 group-hover:-translate-y-6 duration-700 text-center">
          <h3 className="text-3xl font-bold text-white">
            Trámite<br />Aduanal
          </h3>
        </div>
      </div>

      {/* Seguros de Carga */}
      <div className="group bg-[#93c5fd] w-72 mx-auto p-8 px-6 rounded-xl shadow-lg">
        <div className="flex justify-center">
          <svg
            className="group-hover:-translate-y-6 duration-700 text-[60px] text-[#1e40af]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <div className="pt-16 group-hover:-translate-y-6 duration-700 text-center">
          <h3 className="text-3xl font-bold text-gray-900">
            Seguros de<br />Carga
          </h3>
        </div>
      </div>
    </div>

    {/* CTA de servicios */}
    <div className="text-center mt-16">
      <p className="text-gray-600 mb-6 text-lg">
        ¿Necesita una solución logística personalizada para su empresa?
      </p>
      <a
        href="https://wa.me/50766340008?text=Solicito%20información%20sobre%20sus%20servicios"
        className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Solicitar Información
      </a>
    </div>
  </div>
</section>

        {/* Propuesta de valor final */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 mt-6">
          <p className="text-gray-700 leading-relaxed">
            En Grupo Incomar, <strong>cada envío recibe atención personalizada</strong> desde el llenado de contenedores 
            hasta la liberación final, garantizando entregas puntuales y manejo seguro de sus recursos más valiosos.
          </p>
        </div>
      </div>
    </div>

    {/* Stats destacados */}
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl border border-blue-100">
        <div className="text-5xl font-bold text-blue-600 mb-3">25+</div>
        <div className="text-lg font-semibold text-gray-900 mb-2">Años de Experiencia</div>
        <div className="text-gray-600">Liderando el freight forwarding en Centroamérica</div>
      </div>
      
      <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl border border-green-100">
        <div className="text-5xl font-bold text-green-600 mb-3">3</div>
        <div className="text-lg font-semibold text-gray-900 mb-2">Países de Cobertura</div>
        <div className="text-gray-600">Panamá, Guatemala y República Dominicana</div>
      </div>
      
      <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl border border-purple-100">
        <div className="text-5xl font-bold text-purple-600 mb-3">1000+</div>
        <div className="text-lg font-semibold text-gray-900 mb-2">Empresas Atendidas</div>
        <div className="text-gray-600">Confiando en nuestros servicios logísticos</div>
      </div>
    </div>

    {/* Diferenciadores clave */}
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
        ¿Por qué elegir Grupo Incomar?
      </h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div className="text-center p-6 hover:bg-blue-50 rounded-xl transition-colors duration-300">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Experiencia Comprobada</h4>
          <p className="text-gray-600">Más de 25 años respaldando operaciones logísticas exitosas</p>
        </div>

        <div className="text-center p-6 hover:bg-blue-50 rounded-xl transition-colors duration-300">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Respuesta Rápida</h4>
          <p className="text-gray-600">Tiempos de respuesta optimizados y seguimiento en tiempo real</p>
        </div>

        <div className="text-center p-6 hover:bg-blue-50 rounded-xl transition-colors duration-300">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Cobertura Regional</h4>
          <p className="text-gray-600">Red establecida en puntos estratégicos de Centroamérica</p>
        </div>

        <div className="text-center p-6 hover:bg-blue-50 rounded-xl transition-colors duration-300">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Tarifas Competitivas</h4>
          <p className="text-gray-600">Precios justos con la mejor relación costo-beneficio del mercado</p>
        </div>
      </div>
    </div>

    {/* Timeline de crecimiento */}
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Nuestro Crecimiento a Través de los Años
      </h3>
      
      <div className="relative">
        {/* Línea central */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
        
        <div className="space-y-12">
          
          {/* 1999 - Fundación */}
          <div className="relative flex items-center">
            <div className="flex-1 text-right pr-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-2">1999 - Fundación</h4>
                <p className="text-gray-600">Inicio de operaciones en Panamá como freight forwarder especializado</p>
              </div>
            </div>
            <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10"></div>
            <div className="flex-1 pl-8"></div>
          </div>

          {/* 2010 - Expansión Guatemala */}
          <div className="relative flex items-center">
            <div className="flex-1 pr-8"></div>
            <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10"></div>
            <div className="flex-1 text-left pl-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-2">2010 - Expansión Guatemala</h4>
                <p className="text-gray-600">Apertura de sucursal en Guatemala, fortaleciendo presencia centroamericana</p>
              </div>
            </div>
          </div>

          {/* 2018 - República Dominicana */}
          <div className="relative flex items-center">
            <div className="flex-1 text-right pr-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-2">2018 - Rep. Dominicana</h4>
                <p className="text-gray-600">Entrada al mercado caribeño con oficina en República Dominicana</p>
              </div>
            </div>
            <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10"></div>
            <div className="flex-1 pl-8"></div>
          </div>

          {/* 2024 - Líderes Regionales */}
          <div className="relative flex items-center">
            <div className="flex-1 pr-8"></div>
            <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10"></div>
            <div className="flex-1 text-left pl-8">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <h4 className="text-xl font-bold text-blue-900 mb-2">2024 - Líderes Regionales</h4>
                <p className="text-blue-800">Consolidados como uno de los principales freight forwarders de Centroamérica</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Certificaciones y socios (representativo) */}
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Certificaciones y Alianzas Estratégicas
      </h3>
      
      <div className="bg-gray-50 rounded-2xl p-8">
        <div className="grid md:grid-cols-4 gap-8 items-center justify-items-center">
          
          {/* Placeholder para logos de certificaciones */}
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mb-3 mx-auto">
              <span className="text-blue-600 font-bold text-sm">ISO</span>
            </div>
            <p className="text-sm text-gray-600">Certificación ISO</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center mb-3 mx-auto">
              <span className="text-green-600 font-bold text-sm">IATA</span>
            </div>
            <p className="text-sm text-gray-600">Miembro IATA</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mb-3 mx-auto">
              <span className="text-purple-600 font-bold text-sm">FIATA</span>
            </div>
            <p className="text-sm text-gray-600">Asociado FIATA</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-xl flex items-center justify-center mb-3 mx-auto">
              <span className="text-orange-600 font-bold text-sm">ACP</span>
            </div>
            <p className="text-sm text-gray-600">Canal de Panamá</p>
          </div>
        </div>
      </div>
    </div>

    {/* CTA final */}
    <div className="text-center">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          ¿Listo para optimizar tu logística internacional?
        </h3>
        <p className="text-blue-100 mb-6 text-lg">
          Descubre cómo nuestros servicios especializados pueden transformar tu cadena de suministro
        </p>
        <a
          href="#servicios"
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Conocer Nuestros Servicios
        </a>
      </div>
    </div>
  </div>

  {/* Schema.org para AboutPage */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
          "@type": "Organization",
          "name": "Grupo Incomar",
          "foundingDate": "1999",
          "description": "Empresa panameña líder en freight forwarding y logística internacional con más de 25 años de experiencia en Centroamérica y el Caribe.",
          "areaServed": ["Panama", "Guatemala", "Dominican Republic"],
          "knowsAbout": ["Freight Forwarding", "International Logistics", "Maritime Transport", "Customs Clearance"],
          "slogan": "Más de 25 años conectando Centroamérica con el mundo"
        }
      })
    }}
  />
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