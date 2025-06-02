
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  title?: string;
  subtitle?: string;
}

const Navigation: React.FC<NavigationProps> = ({
  title = "Jesús dos Reis"
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node) && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
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
      <div className="flex flex-col">
        <Link to="/" className="group">
          <div className="text-5xl font-light">
            {title}
          </div>
        </Link>
      </div>
      
      {/* Desktop Navigation - Cambio a texto negro */}
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/about" className={`hover:underline text-lg text-black hover:text-black/80 transition-colors ${location.pathname === '/about' ? 'underline' : ''}`}>
          Sobre mí
        </Link>
        <Link to="/contact" className={`hover:underline text-lg text-black hover:text-black/80 transition-colors ${location.pathname === '/contact' ? 'underline' : ''}`}>
          Contacto
        </Link>
      </div>
      
      {/* Mobile Navigation Button */}
      <div className="md:hidden flex items-center space-x-2">
        <button ref={buttonRef} onClick={toggleMenu} className="p-1">
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="fixed inset-0 bg-black z-50 p-6 flex flex-col items-center justify-center animate-fade-in md:hidden">
          <button onClick={toggleMenu} className="absolute top-4 right-6 text-white">
            <X size={20} />
          </button>
          <div className="text-2xl space-y-6 text-center">
            <div><Link to="/about" onClick={toggleMenu} className="hover:underline text-white">Sobre mí</Link></div>
            <div><Link to="/contact" onClick={toggleMenu} className="hover:underline text-white">Contacto</Link></div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
