import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Linkedin } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useAboutContent } from '@/hooks/useAboutContent';

interface SplitLayoutProps {
  children: React.ReactNode;
}

const SplitLayout: React.FC<SplitLayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const { data: aboutContent } = useAboutContent();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen flex">
      {/* Fixed Left Sidebar - Hidden on mobile */}
      <aside className="hidden lg:flex lg:w-80 xl:w-96 h-screen sticky top-0 flex-col border-r border-border bg-sidebar">
        {/* Sidebar Header */}
        <div className="p-6 border-b border-border">
          <Link to="/" className="block">
            <span className="text-sm font-medium tracking-wide uppercase">Portfolio</span>
          </Link>
        </div>

        {/* Sidebar Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Identity */}
          <div className="mb-8">
            <Link to="/" className="block">
              <h1 className="text-lg font-semibold leading-tight mb-3">Jesús dos Reis</h1>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {aboutContent?.about_short || 
                "Diseñador de marca con sede en Madrid, transformando startups en marcas reconocibles a través de diseño de identidad."
              }
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-8">
            <Link 
              to="/contact"
              className="block w-full py-3 px-4 bg-foreground text-background text-center text-sm font-medium uppercase tracking-wide hover:bg-foreground/90 transition-colors"
            >
              Contacto
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mb-8 text-muted-foreground">
            <a 
              href="https://www.linkedin.com/in/jesusdosreis/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:hola@jesusdosreis.com"
              className="hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            <Link 
              to="/" 
              className={`block py-2 text-sm hover:text-foreground transition-colors ${
                location.pathname === '/' ? 'text-foreground font-medium' : 'text-muted-foreground'
              }`}
            >
              Proyectos
            </Link>
            <Link 
              to="/about" 
              className={`block py-2 text-sm hover:text-foreground transition-colors ${
                location.pathname === '/about' ? 'text-foreground font-medium' : 'text-muted-foreground'
              }`}
            >
              Sobre mí
            </Link>
            <Link 
              to="/contact" 
              className={`block py-2 text-sm hover:text-foreground transition-colors ${
                location.pathname === '/contact' ? 'text-foreground font-medium' : 'text-muted-foreground'
              }`}
            >
              Contacto
            </Link>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Jesús dos Reis
          </p>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-background border-b border-border">
        <div className="flex items-center justify-between p-4">
          <Link to="/" className="text-lg font-semibold">Jesús dos Reis</Link>
          <button ref={buttonRef} onClick={toggleMenu} className="p-2">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          ref={menuRef} 
          className="lg:hidden fixed inset-0 z-50 bg-background p-6 flex flex-col animate-fade-in"
        >
          <div className="flex justify-between items-center mb-8">
            <span className="text-lg font-semibold">Jesús dos Reis</span>
            <button onClick={toggleMenu}>
              <X size={20} />
            </button>
          </div>
          <nav className="space-y-4 text-xl">
            <Link to="/" onClick={toggleMenu} className="block py-2">Proyectos</Link>
            <Link to="/about" onClick={toggleMenu} className="block py-2">Sobre mí</Link>
            <Link to="/contact" onClick={toggleMenu} className="block py-2">Contacto</Link>
          </nav>
          <div className="mt-auto flex gap-6">
            <a href="https://www.linkedin.com/in/jesusdosreis/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="mailto:hola@jesusdosreis.com">
              <Mail size={20} />
            </a>
          </div>
        </div>
      )}

      {/* Main Content Area - Scrollable */}
      <main className="flex-1 lg:ml-0 pt-16 lg:pt-0">
        {children}
      </main>
    </div>
  );
};

export default SplitLayout;
