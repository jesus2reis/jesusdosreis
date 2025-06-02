import React from 'react';
import { Link } from 'react-router-dom';
import { useAboutContent } from '@/hooks/useAboutContent';
interface AboutSectionProps {
  title?: string;
  content?: React.ReactNode;
  showLearnMore?: boolean;
}
const AboutSection: React.FC<AboutSectionProps> = ({
  title = "Sobre mí",
  content,
  showLearnMore = false
}) => {
  const {
    data: aboutContent,
    isLoading
  } = useAboutContent();
  if (isLoading) {
    return <div className="py-12 px-6 border-b border-white/10">
        <h2 className="text-sm mb-6">{title}</h2>
        <div className="text-lg md:text-[18px] font-light w-full">
          <p className="text-2xl">Cargando...</p>
        </div>
      </div>;
  }
  return <div className="py-12 px-6 border-b border-white/10">
      <h2 className="text-sm mb-6">{title}</h2>
      <div className="text-lg md:text-[18px] font-light w-full">
        {content || <p className="text-xl max-w-4xl">
            {aboutContent?.about_short || "Soy un diseñador de marca con sede en Madrid, nacido en Venezuela, con herencia portuguesa. Actualmente trabajo en una agencia creativa, y ocasionalmente acepto proyectos freelance que despiertan interés creativo y desafío estratégico. Mi trabajo se centra en construir identidades de marca significativas combinando estrategia, sistemas de diseño y narrativa visual. Me apasiona especialmente el diseño basado en conceptos que sea claro, consistente y emocionalmente atractivo."}
          </p>}
      </div>
      {showLearnMore && <div className="mt-6">
          <Link to="/about" className="inline-flex items-center text-foreground hover:underline text-lg">
            Conoce más →
          </Link>
        </div>}
    </div>;
};
export default AboutSection;