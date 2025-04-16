
import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

interface NavigationProps {
  title?: string;
  subtitle?: string;
}

const Navigation: React.FC<NavigationProps> = ({ 
  title = "JdR", 
  subtitle = "Brand Designer" 
}) => {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center border-b border-white/10">
      <div className="flex items-center space-x-1">
        <Link to="/" className="text-xl font-mono">
          {title}
        </Link>
      </div>
      
      <div className="text-right">
        <div className="font-light">{title === "JdR" ? "Jesús dos Reis" : title}</div>
        <div className="text-sm text-muted-foreground">{subtitle}</div>
      </div>
      
      <Link to="/contact" className="p-1">
        <Plus size={20} />
      </Link>
    </nav>
  );
};

export default Navigation;
