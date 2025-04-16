
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, X } from 'lucide-react';

interface NavigationProps {
  title?: string;
  subtitle?: string;
}

const Navigation: React.FC<NavigationProps> = ({ 
  title = "JdR", 
  subtitle = "Brand Designer" 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center border-b border-white/10">
      <div className="flex items-center space-x-1">
        <Link to="/" className="text-xl font-mono">
          {title}
        </Link>
      </div>
      
      <div className="text-right">
        <div className="text-base font-light">{title === "JdR" ? "Jesús dos Reis" : title}</div>
        <div className="text-xs text-muted-foreground">{subtitle}</div>
      </div>
      
      <button onClick={toggleMenu} className="p-1">
        {isMenuOpen ? <X size={20} /> : <Plus size={20} />}
      </button>
      
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-50 p-6 flex flex-col items-center justify-center animate-fade-in">
          <button onClick={toggleMenu} className="absolute top-4 right-6">
            <X size={20} />
          </button>
          <div className="text-2xl space-y-6 text-center">
            <div><Link to="/" onClick={toggleMenu} className="hover:underline">Home</Link></div>
            <div><Link to="/about" onClick={toggleMenu} className="hover:underline">About</Link></div>
            <div><Link to="/contact" onClick={toggleMenu} className="hover:underline">Contact</Link></div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
