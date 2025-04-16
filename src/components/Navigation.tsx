
import React, { useState, useEffect, useRef } from 'react';
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
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && 
          menuRef.current && 
          !menuRef.current.contains(event.target as Node) &&
          buttonRef.current && 
          !buttonRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);
  
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center border-b border-white/10">
      <div className="flex items-center space-x-1">
        <Link to="/" className="text-xl font-mono">
          {title}
        </Link>
      </div>
      
      <div className="text-center">
        <div className="text-base font-light">{title === "JdR" ? "Jesús dos Reis" : title}</div>
        <div className="text-xs text-muted-foreground">{subtitle}</div>
      </div>
      
      <button ref={buttonRef} onClick={toggleMenu} className="p-1">
        {isMenuOpen ? <X size={20} /> : <Plus size={20} />}
      </button>
      
      {isMenuOpen && (
        <div ref={menuRef} className="fixed inset-0 bg-black z-50 p-6 flex flex-col items-center justify-center animate-fade-in">
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
