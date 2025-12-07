import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Contact = () => {
  return (
    <>
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

      {/* Proceso Section */}
      <section className="border-b border-border">
        <header className="p-4 border-b border-border">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Proceso
          </span>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {/* Step 1 - Reunión */}
          <div className="p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full border-2 border-foreground flex items-center justify-center text-sm font-medium">
                1
              </span>
              <h3 className="text-2xl font-medium">Reunión</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Todo comienza con una sesión de trabajo (presencial o virtual) para alinear objetivos.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Analizamos el momento de tu negocio, tu audiencia y tus necesidades para establecer una base estratégica sólida antes de empezar a diseñar. No damos pasos a ciegas.
            </p>
          </div>
          
          {/* Step 2 - Diseño */}
          <div className="p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full border-2 border-foreground flex items-center justify-center text-sm font-medium">
                2
              </span>
              <h3 className="text-2xl font-medium">Diseño</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Para garantizar una ruta clara, primero definimos el estilo visual a través de moodboards.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Una vez validada la dirección artística, desarrollo y te presento 2 propuestas de identidad distintas. Cada opción está justificada conceptualmente para que evaluemos cuál eleva mejor la percepción de tu marca.
            </p>
          </div>
          
          {/* Step 3 - Entrega */}
          <div className="p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full border-2 border-foreground flex items-center justify-center text-sm font-medium">
                3
              </span>
              <h3 className="text-2xl font-medium">Entrega</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Tras elegir la propuesta ganadora, refino los detalles y genero todos los activos necesarios.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Recibes el paquete completo de archivos y las guías de estilo según lo que hayamos definido, listo para que tu marca empiece a comunicar con autoridad.
            </p>
          </div>
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
    </>
  );
};

export default Contact;
