import React from 'react';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo optimizado SEO */}
          <div className="flex items-center space-x-3">
            <img 
              src="/images/logo-incomar.png" 
              alt="Grupo Incomar - Freight Forwarding y Logística Internacional Panamá"
              className="w-10 h-10 object-contain"
              width={40}
              height={40}
            />
          </div>

          {/* Navigation semántica */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Navegación principal">
            <a 
              href="#" 
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
              aria-label="Página de inicio - Grupo Incomar"
            >
              Inicio
            </a>
            <a 
              href="#nosotros" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              aria-label="Información sobre Grupo Incomar"
            >
              Nosotros
            </a>
            <a 
              href="#servicios" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              aria-label="Servicios de freight forwarding y logística"
            >
              Servicios
            </a>
            <a 
              href="#casos-exito" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              aria-label="Casos de éxito en freight forwarding"
            >
              Casos de Éxito
            </a>
            <a 
              href="#noticias" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              aria-label="Noticias del sector logístico"
            >
              Noticias
            </a>
            <a 
              href="#contacto" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              aria-label="Contactar a Grupo Incomar"
            >
              Contacto
            </a>
          </nav>

          {/* CTA Button optimizado */}
          <a
            href="https://wa.me/50766340008"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl min-h-[44px] min-w-[44px] flex items-center"
            aria-label="Llamar a Grupo Incomar para solicitar cotización freight forwarding"
          >
            Solicitar Cotización
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;