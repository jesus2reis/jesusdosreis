
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="py-20 px-6 text-left">
          <h1 className="text-6xl font-light mb-6">Ponte en contacto</h1>
          <p className="text-2xl font-light text-muted-foreground max-w-3xl leading-relaxed">
            Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tu visión.
          </p>
        </div>

        {/* Contact Information */}
        <div className="py-16 px-6">
          <div className="max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              
              {/* Contact Methods */}
              <div>
                <h2 className="text-3xl font-light mb-8">Información de Contacto</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium mb-2">Email</h3>
                    <a 
                      href="mailto:hola@jesusdosreis.com"
                      className="text-2xl text-muted-foreground hover:text-foreground transition-colors underline"
                    >
                      hola@jesusdosreis.com
                    </a>
                    <p className="text-lg text-muted-foreground mt-1">Método de contacto principal</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-2">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/jesusdosreis/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-2xl text-muted-foreground hover:text-foreground transition-colors underline"
                    >
                      Perfil de LinkedIn
                    </a>
                    <p className="text-lg text-muted-foreground mt-1">Red profesional</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <h2 className="text-3xl font-light mb-8">Ubicación</h2>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Con base en</h3>
                  <p className="text-2xl text-muted-foreground">Madrid, España</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border"></div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
