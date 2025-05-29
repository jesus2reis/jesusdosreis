
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  position: string;
  period: string;
  description?: string;
  showDivider?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  position,
  period,
  description,
  showDivider = true
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`py-4 ${showDivider ? 'border-b border-border/50' : ''}`}>
      <div 
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer gap-1" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h3 className="font-light hover:font-medium text-xl">{title}</h3>
          <p className="text-base text-muted-foreground">{position}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-base">{period}</span>
          <span>{isOpen ? <Minus size={16} /> : <Plus size={16} />}</span>
        </div>
      </div>
      
      {isOpen && (
        <div className="pt-4 text-base text-muted-foreground">
          <p>{description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie."}</p>
        </div>
      )}
    </div>
  );
};

export default ExperienceItem;
