
import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  email?: string;
  year?: number;
  name?: string;
  title?: string;
}

const Footer: React.FC<FooterProps> = ({
  email = "hello@jesusdosreis.com",
  year = new Date().getFullYear(),
  name = "Jesús dos Reis",
  title = "Brand Designer"
}) => {
  return (
    <footer className="w-full py-4 px-6 border-t border-white/10 dark:border-white/10 border-black/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-xs">© {year} {name}</span>
      </div>
      
      <div className="text-xs text-muted-foreground">{title}</div>
      
      <a href={`mailto:${email}`} className="text-xs hover:underline">
        {email}
      </a>
    </footer>
  );
};

export default Footer;
