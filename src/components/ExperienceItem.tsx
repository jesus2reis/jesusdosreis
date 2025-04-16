
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  position: string;
  period: string;
  description?: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  position,
  period,
  description
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4 border-b border-white/10">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h3 className="text-lg">{title} <span className="text-muted-foreground">— {position}</span></h3>
        </div>
        <div className="flex items-center gap-4">
          <span>{period}</span>
          <span>{isOpen ? <Minus size={16} /> : <Plus size={16} />}</span>
        </div>
      </div>
      
      {isOpen && description && (
        <div className="pt-4 text-sm text-muted-foreground">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default ExperienceItem;
