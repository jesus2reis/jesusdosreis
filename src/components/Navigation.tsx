
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, X, Moon, Sun } from 'lucide-react';
import { Switch } from './ui/switch';
import { useTheme } from '../hooks/useTheme';

interface NavigationProps {
  title?: string;
  subtitle?: string;
}

const Navigation: React.FC<NavigationProps> = ({ 
  title = "JdR", 
  subtitle = "Brand Designer" 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center border-b border-white/10 dark:border-white/10 border-black/10">
      <div className="flex items-center space-x-1">
        <Link to="/" className="text-xl font-mono hover:animate-spin">
          {title}
        </Link>
      </div>
      
      <div className="text-center">
        <div className="text-base font-light">{title === "JdR" ? "Jesús dos Reis" : title}</div>
        <div className="text-xs text-muted-foreground">{subtitle}</div>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        
        <div className="flex items-center space-x-2">
          {theme === 'dark' ? (
            <Moon size={18} className="text-yellow-300" />
          ) : (
            <Sun size={18} className="text-yellow-500" />
          )}
          <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
        </div>
      </div>
      
      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="p-1 md:hidden">
        {isMenuOpen ? <X size={20} /> : <Plus size={20} />}
      </button>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black dark:bg-black z-50 p-6 flex flex-col items-center justify-center animate-fade-in md:hidden">
          <button onClick={toggleMenu} className="absolute top-4 right-6">
            <X size={20} />
          </button>
          <div className="text-2xl space-y-6 text-center">
            <div><Link to="/" onClick={toggleMenu} className="hover:underline">Home</Link></div>
            <div><Link to="/about" onClick={toggleMenu} className="hover:underline">About</Link></div>
            <div><Link to="/contact" onClick={toggleMenu} className="hover:underline">Contact</Link></div>
            
            <div className="flex items-center justify-center space-x-2 pt-6">
              {theme === 'dark' ? (
                <Moon size={18} className="text-yellow-300" />
              ) : (
                <Sun size={18} className="text-yellow-500" />
              )}
              <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
