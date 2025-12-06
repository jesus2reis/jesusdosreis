import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Linkedin } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useSidebarContent } from '@/hooks/useSidebarContent';

const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const { data: sidebarContent } = useSidebarContent();

  const title = sidebarContent?.title || 'Director Creativo & Brand Designer';
  const slogan = sidebarContent?.slogan || 'Démosle a tu negocio la marca que se merece.';
  const availableStatus = sidebarContent?.available_status || 'Abierto para trabajar nuevos proyectos';
  const linkedIn = sidebarContent?.social_links?.linkedin || 'https://www.linkedin.com/in/jesusdosreis/';
  const contactEmail = sidebarContent?.contact_email || 'hola@jesusdosreis.com';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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
    <>
      {/* Fixed Left Sidebar - Hidden on mobile */}
      <aside className="hidden lg:flex lg:w-80 xl:w-96 h-screen sticky top-0 flex-col border-r border-border bg-sidebar flex-shrink-0">
        {/* Sidebar Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          {/* Logo/Name */}
          <div className="pb-6">
            <Link to="/" className="block">
              <h1 className="text-3xl font-light tracking-tight">JESÚS(2)REIS</h1>
            </Link>
          </div>

          {/* Divider */}
          <div className="border-t border-border mb-6"></div>

          {/* Role */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              {title}
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-border mb-6"></div>

          {/* Tagline */}
          <div className="py-6">
            <p className="text-2xl font-light leading-tight">
              {slogan}
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-border mb-8"></div>

          {/* Availability Indicator */}
          <div className="mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-slow"></span>
            <span className="text-sm text-green-600">
              {availableStatus}
            </span>
          </div>

          {/* CTA Button */}
          <div className="mb-10">
            <Link 
              to="/contact"
              className="block w-full py-4 px-6 bg-foreground text-background text-center text-sm font-medium tracking-wide hover:bg-foreground/90 transition-colors"
            >
              Contacto
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mb-10 text-muted-foreground">
            <a 
              href={linkedIn}
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href={`mailto:${contactEmail}`}
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
        <div className="p-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Jesús dos Reis
          </p>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-background border-b border-border">
        <div className="flex items-center justify-between p-4">
          <Link to="/" className="text-xl font-light tracking-tight">JESÚS(2)REIS</Link>
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
            <span className="text-xl font-light tracking-tight">JESÚS(2)REIS</span>
            <button onClick={toggleMenu}>
              <X size={20} />
            </button>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">
            {title}
          </p>
          
          <p className="text-xl font-light leading-tight mb-6">
            {slogan}
          </p>
          
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-slow"></span>
            <span className="text-sm text-green-600">
              {availableStatus}
            </span>
          </div>
          
          <nav className="space-y-4 text-xl">
            <Link to="/" onClick={toggleMenu} className="block py-2">Proyectos</Link>
            <Link to="/about" onClick={toggleMenu} className="block py-2">Sobre mí</Link>
            <Link to="/contact" onClick={toggleMenu} className="block py-2">Contacto</Link>
          </nav>
          <div className="mt-auto flex gap-6">
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${contactEmail}`}>
              <Mail size={20} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
