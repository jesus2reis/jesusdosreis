import React from 'react';
import SplitLayout from '../components/layout/SplitLayout';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Contact = () => {
  return (
    <SplitLayout>
      {/* Page Header */}
      <header className="flex items-center gap-4 p-4 border-b border-border">
        <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft size={18} />
        </Link>
        <span className="text-sm font-medium uppercase tracking-wide">Contacto</span>
      </header>

      {/* Main Content */}
      <section className="border-b border-border">
        <div className="p-8 lg:p-12">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-light leading-relaxed max-w-3xl mb-8">
            Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tu visión.
          </h1>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
        {/* Email */}
        <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-border">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground block mb-4">
            Email
          </span>
          <a 
            href="mailto:hola@jesusdosreis.com" 
            className="text-xl lg:text-2xl hover:underline"
          >
            hola@jesusdosreis.com
          </a>
          <p className="text-sm text-muted-foreground mt-2">Método de contacto principal</p>
        </div>
        
        {/* LinkedIn */}
        <div className="p-8 lg:p-12">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground block mb-4">
            LinkedIn
          </span>
          <a 
            href="https://www.linkedin.com/in/jesusdosreis/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl lg:text-2xl hover:underline"
          >
            /in/jesusdosreis
          </a>
          <p className="text-sm text-muted-foreground mt-2">Red profesional</p>
        </div>
      </section>

      {/* Location */}
      <section className="border-b border-border">
        <div className="p-8 lg:p-12">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground block mb-4">
            Ubicación
          </span>
          <p className="text-xl lg:text-2xl">Madrid, España</p>
        </div>
      </section>
    </SplitLayout>
  );
};

export default Contact;