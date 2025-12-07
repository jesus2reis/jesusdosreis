import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useContactContent } from '@/hooks/useContactContent';

const Contact = () => {
  const { data: content, isLoading } = useContactContent();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-pulse text-muted-foreground">Cargando...</div>
      </div>
    );
  }

  return (
    <>
      {/* Page Header */}
      <header className="flex items-center gap-4 p-4 border-b border-border">
        <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft size={18} />
        </Link>
        <span className="text-sm font-medium uppercase tracking-wide">Contacto</span>
      </header>

      {/* Main Content - Claim */}
      <section className="border-b border-border">
        <div className="p-8 lg:p-12">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-light leading-relaxed max-w-3xl mb-8">
            {content?.claim || 'Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tu visión.'}
          </h1>
        </div>
      </section>

      {/* Proceso Section */}
      <section className="border-b border-border">
        <header className="p-4 border-b border-border">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Proceso
          </span>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {content?.process?.map((step) => (
            <div key={step.step} className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full border-2 border-foreground flex items-center justify-center text-sm font-medium">
                  {step.step}
                </span>
                <h3 className="text-2xl font-medium">{step.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Grid - Socials */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
        {/* Email */}
        <div className="p-8 lg:p-12 border-b md:border-b-0 md:border-r border-border">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground block mb-4">
            Email
          </span>
          <a 
            href={`mailto:${content?.email || 'hola@jesusdosreis.com'}`} 
            className="text-xl lg:text-2xl hover:underline"
          >
            {content?.email || 'hola@jesusdosreis.com'}
          </a>
          <p className="text-sm text-muted-foreground mt-2">Método de contacto principal</p>
        </div>
        
        {/* LinkedIn */}
        <div className="p-8 lg:p-12">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground block mb-4">
            {content?.linkedin_label || 'LinkedIn'}
          </span>
          <a 
            href={content?.linkedin_url || 'https://www.linkedin.com/in/jesusdosreis/'} 
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
          <p className="text-xl lg:text-2xl">{content?.location || 'Madrid, España'}</p>
        </div>
      </section>
    </>
  );
};

export default Contact;
