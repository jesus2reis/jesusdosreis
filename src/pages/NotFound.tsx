import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Página no encontrada - Error 404"
        description="La página que buscas no existe. Vuelve al inicio para explorar el portfolio de Jesús dos Reis."
      />
      
      <main className="flex-grow flex items-center justify-center px-6">
        <div className="max-w-md text-center space-y-8">
          {/* Error Number */}
          <div className="space-y-4">
            <h1 className="text-8xl font-light text-muted-foreground">404</h1>
            <h2 className="text-2xl font-light">Página no encontrada</h2>
          </div>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          
          {/* Action Buttons */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 hover:bg-foreground/90 transition-colors"
            >
              <Home size={20} />
              Volver al inicio
            </Link>
            
            <div className="flex justify-center">
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={16} />
                Página anterior
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
