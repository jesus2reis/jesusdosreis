
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <div className="border-b border-gray-200">
        <Navigation />
      </div>
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="py-20 px-6 text-center bg-gray-50">
          <h1 className="text-6xl font-light mb-6 text-black">Get in touch</h1>
          <p className="text-2xl font-light text-gray-700 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        {/* Contact Information */}
        <div className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              
              {/* Contact Methods */}
              <div>
                <h2 className="text-3xl font-light mb-8 text-black">Contact Information</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium text-black mb-2">Email</h3>
                    <a 
                      href="mailto:hola@jesusdosreis.com"
                      className="text-2xl text-gray-700 hover:text-black transition-colors underline"
                    >
                      hola@jesusdosreis.com
                    </a>
                    <p className="text-lg text-gray-600 mt-1">Primary contact method</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-black mb-2">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/username" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-2xl text-gray-700 hover:text-black transition-colors underline"
                    >
                      LinkedIn Profile
                    </a>
                    <p className="text-lg text-gray-600 mt-1">Professional network</p>
                  </div>
                </div>
              </div>

              {/* Location & Availability */}
              <div>
                <h2 className="text-3xl font-light mb-8 text-black">Location & Work</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium text-black mb-2">Based in</h3>
                    <p className="text-2xl text-gray-700">Madrid, Spain</p>
                    <p className="text-lg text-gray-600 mt-1">Available for local meetings</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-black mb-2">Work Arrangements</h3>
                    <div className="space-y-2">
                      <p className="text-lg text-gray-700">• Remote projects worldwide</p>
                      <p className="text-lg text-gray-700">• On-site collaboration in Madrid</p>
                      <p className="text-lg text-gray-700">• Travel opportunities considered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-16 p-8 bg-gray-50 rounded-lg text-center">
              <p className="text-xl text-gray-700">
                <strong>Response Time:</strong> I typically respond within 24-48 hours
              </p>
              <p className="text-lg text-gray-600 mt-2">
                Looking forward to hearing about your project!
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
