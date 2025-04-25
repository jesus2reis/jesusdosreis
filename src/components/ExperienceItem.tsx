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
  return <div className="py-4 border-b border-white/10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-pointer gap-1" onClick={() => setIsOpen(!isOpen)}>
        <div>
          <h3 className="transition-all duration-300 hover:translate-x-2 text-xl">{title}</h3>
          <p className="text-sm text-muted-foreground transition-all duration-300 hover:translate-x-2">{position}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm">{period}</span>
          <span>{isOpen ? <Minus size={16} /> : <Plus size={16} />}</span>
        </div>
      </div>
      
      {isOpen && <div className="pt-4 text-sm text-muted-foreground">
          <p>{description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie."}</p>
        </div>}
    </div>;
};
export default ExperienceItem;