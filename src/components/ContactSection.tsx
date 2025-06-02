
import React from 'react';

interface ContactSectionProps {
  title?: string;
  email?: string;
  linkedin?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title = "Contacto",
  email = "hola@jesusdosreis.com",
  linkedin = "LinkedIn"
}) => {
  return (
    <div className="py-12 px-6 border-b border-border">
      <h2 className="mb-6 text-base">{title}</h2>
      <div className="space-y-4">
        <div>
          <a href={`mailto:${email}`} className="text-lg hover:underline">
            {email}
          </a>
        </div>
        <div>
          <a 
            href="https://www.linkedin.com/in/jesusdosreis/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-lg hover:underline"
          >
            {linkedin}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
