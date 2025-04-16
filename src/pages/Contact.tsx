
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white animate-fade-in">
      <Navigation />
      
      <main className="flex-grow p-6">
        <Link to="/" className="inline-flex items-center gap-2 hover:underline mb-8">
          <ArrowLeft size={16} />
          <span>Back</span>
        </Link>
        
        <h1 className="text-3xl font-light mb-12">Get in touch</h1>
        
        <div className="max-w-2xl">
          <p className="text-lg font-light mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="space-y-6 mb-12">
            <div>
              <h2 className="text-xl mb-2">Email</h2>
              <a 
                href="mailto:hola@jesusdosreis.com"
                className="text-lg hover:underline"
              >
                hola@jesusdosreis.com
              </a>
            </div>
            
            <div>
              <h2 className="text-xl mb-2">LinkedIn</h2>
              <a 
                href="https://linkedin.com/in/username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl mb-2">Location</h2>
            <p className="text-lg font-light">Based in Madrid, Spain</p>
            <p className="text-lg font-light">Available for remote work and travel opportunities</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
