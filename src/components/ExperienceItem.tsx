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
    <div className={`py-5 ${showDivider ? 'border-b border-border' : ''}`}>
      <div 
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer gap-2" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h3 className="font-medium text-base">{title}</h3>
          <p className="text-sm text-muted-foreground">{position}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">{period}</span>
          <span className="text-muted-foreground">{isOpen ? <Minus size={14} /> : <Plus size={14} />}</span>
        </div>
      </div>
      
      {isOpen && description && (
        <div className="pt-4 text-sm text-muted-foreground leading-relaxed">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default ExperienceItem;
