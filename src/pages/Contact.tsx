
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <div className="border-b border-gray-200">
        <Navigation />
      </div>
      
      <main className="flex-grow">
        {/* Hero Section - Alineado a la izquierda */}
        <div className="py-20 px-6 text-left bg-gray-50">
          <h1 className="text-6xl font-light mb-6 text-black">Ponte en contacto</h1>
          <p className="text-2xl font-light text-gray-700 max-w-3xl leading-relaxed">
            Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tu visión.
          </p>
        </div>

        {/* Contact Information - Alineado a la izquierda */}
        <div className="py-16 px-6">
          <div className="max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              
              {/* Contact Methods */}
              <div>
                <h2 className="text-3xl font-light mb-8 text-black">Información de Contacto</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium text-black mb-2">Email</h3>
                    <a 
                      href="mailto:hola@jesusdosreis.com"
                      className="text-2xl text-gray-700 hover:text-black transition-colors underline"
                    >
                      hola@jesusdosreis.com
                    </a>
                    <p className="text-lg text-gray-600 mt-1">Método de contacto principal</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-black mb-2">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/username" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-2xl text-gray-700 hover:text-black transition-colors underline"
                    >
                      Perfil de LinkedIn
                    </a>
                    <p className="text-lg text-gray-600 mt-1">Red profesional</p>
                  </div>
                </div>
              </div>

              {/* Location & Availability */}
              <div>
                <h2 className="text-3xl font-light mb-8 text-black">Ubicación y Trabajo</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium text-black mb-2">Con base en</h3>
                    <p className="text-2xl text-gray-700">Madrid, España</p>
                    <p className="text-lg text-gray-600 mt-1">Disponible para reuniones locales</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-black mb-2">Modalidades de Trabajo</h3>
                    <div className="space-y-2">
                      <p className="text-lg text-gray-700">• Proyectos remotos en todo el mundo</p>
                      <p className="text-lg text-gray-700">• Colaboración presencial en Madrid</p>
                      <p className="text-lg text-gray-700">• Oportunidades de viaje consideradas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-16 p-8 bg-gray-50 rounded-lg text-left">
              <p className="text-xl text-gray-700">
                <strong>Tiempo de Respuesta:</strong> Normalmente respondo en 24-48 horas
              </p>
              <p className="text-lg text-gray-600 mt-2">
                ¡Espero conocer tu proyecto!
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
