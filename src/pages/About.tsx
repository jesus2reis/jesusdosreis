import React from 'react';
import SplitLayout from '../components/layout/SplitLayout';
import ExperienceItem from '../components/ExperienceItem';
import { useExperiences } from '@/hooks/useExperiences';
import { useEducation } from '@/hooks/useEducation';
import { useAboutContent } from '@/hooks/useAboutContent';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const About = () => {
  const { data: experiences, isLoading: experiencesLoading } = useExperiences();
  const { data: education, isLoading: educationLoading } = useEducation();
  const { data: aboutContent, isLoading: aboutLoading } = useAboutContent();

  return (
    <SplitLayout>
      {/* Page Header */}
      <header className="flex items-center gap-4 p-4 border-b border-border">
        <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft size={18} />
        </Link>
        <span className="text-sm font-medium uppercase tracking-wide">Sobre mí</span>
      </header>

      {/* Main Content */}
      <section className="border-b border-border">
        <div className="p-8 lg:p-12">
          {/* Hero Text */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl">
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {aboutLoading ? (
                  <p className="text-2xl lg:text-3xl font-light leading-relaxed">Cargando...</p>
                ) : (
                  <>
                    <h1 className="text-2xl lg:text-3xl xl:text-4xl font-light leading-relaxed">
                      {aboutContent?.about_full.split('\n\n')[0] || 
                        "Soy un diseñador de marca con sede en Madrid, trabajando con estudios y startups durante más de 10 años."
                      }
                    </h1>
                    {aboutContent?.about_full.split('\n\n').slice(1).map((paragraph, index) => (
                      <p key={index} className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </>
                )}
                
                {/* LinkedIn Link */}
                <div className="pt-4">
                  <a 
                    href="https://www.linkedin.com/in/jesusdosreis/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground underline transition-colors"
                  >
                    Conecta conmigo en LinkedIn
                  </a>
                </div>
              </div>
            </div>
            
            {/* Photo */}
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] w-full max-w-sm">
                <img 
                  src="/images/jesus/jesusdosreis.jpg" 
                  alt="Jesús dos Reis" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="border-b border-border">
        <header className="section-header">
          Experiencia
        </header>
        <div className="p-6 lg:p-8">
          {experiencesLoading ? (
            <div className="text-muted-foreground">Cargando experiencias...</div>
          ) : experiences?.map((exp, index) => (
            <ExperienceItem 
              key={exp.id} 
              title={exp.company} 
              position={exp.role} 
              period={exp.years} 
              description={exp.description} 
              showDivider={index < experiences.length - 1} 
            />
          ))}
        </div>
      </section>
      
      {/* Education Section */}
      <section className="border-b border-border">
        <header className="section-header">
          Educación
        </header>
        <div className="p-6 lg:p-8">
          {educationLoading ? (
            <div className="text-muted-foreground">Cargando educación...</div>
          ) : education?.map((edu, index) => (
            <ExperienceItem 
              key={edu.id} 
              title={edu.course} 
              position={edu.school} 
              period={edu.years} 
              description={edu.description} 
              showDivider={index < education.length - 1} 
            />
          ))}
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="p-8 lg:p-12">
        <h2 className="text-xl lg:text-2xl font-light mb-4">¿Tienes un proyecto en mente?</h2>
        <Link 
          to="/contact"
          className="inline-block py-3 px-6 bg-foreground text-background text-sm font-medium uppercase tracking-wide hover:bg-foreground/90 transition-colors"
        >
          Contacto
        </Link>
      </section>
    </SplitLayout>
  );
};

export default About;