
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ExperienceItem from '../components/ExperienceItem';
import ContactSection from '../components/ContactSection';
import { useExperiences } from '@/hooks/useExperiences';
import { useEducation } from '@/hooks/useEducation';
import { useAboutContent } from '@/hooks/useAboutContent';

const About = () => {
  const { data: experiences, isLoading: experiencesLoading } = useExperiences();
  const { data: education, isLoading: educationLoading } = useEducation();
  const { data: aboutContent, isLoading: aboutLoading } = useAboutContent();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      
      <main className="flex-grow">
        <div className="py-16 px-6 border-b border-border">
          <h1 className="text-5xl font-light mb-12">Acerca de Mí</h1>
          
          {/* Two column layout with text on left and photo placeholder on right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl">
            {/* Text Content - Takes 2/3 of the space */}
            <div className="lg:col-span-2">
              <div className="space-y-8 max-w-4xl">
                {aboutLoading ? (
                  <p className="text-2xl font-light leading-relaxed">Cargando...</p>
                ) : (
                  <>
                    {aboutContent?.about_full.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-2xl font-light leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </>
                )}
              </div>
            </div>
            
            {/* Photo Placeholder - Takes 1/3 of the space */}
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] bg-muted/20 border border-border/30 rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="text-base">Foto de Jesús</p>
                  <p className="text-sm opacity-60">Marcador</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-12 px-6 border-b border-border">
          <h2 className="text-lg mb-6">Experiencia</h2>
          <div className="grid md:grid-cols-1 gap-0">
            {experiencesLoading ? (
              <div>Cargando experiencias...</div>
            ) : experiences?.map((exp, index) => (
              <ExperienceItem 
                key={exp.id}
                title={exp.company}
                position={exp.role}
                period={exp.years}
                description={exp.description}
                showDivider={index < (experiences.length - 1)}
              />
            ))}
          </div>
        </div>
        
        <div className="py-12 px-6 border-b border-border">
          <h2 className="text-lg mb-6">Educación y Cursos de Desarrollo</h2>
          <div className="grid md:grid-cols-1 gap-0">
            {educationLoading ? (
              <div>Cargando educación...</div>
            ) : education?.map((edu, index) => (
              <ExperienceItem 
                key={edu.id}
                title={edu.course}
                position={edu.school}
                period={edu.years}
                description={edu.description}
                showDivider={index < (education.length - 1)}
              />
            ))}
          </div>
        </div>
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
