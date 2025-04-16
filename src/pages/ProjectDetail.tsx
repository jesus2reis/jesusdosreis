
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const projects = [
  { 
    id: 1, 
    title: "Project 1 name", 
    client: "Positif",
    role: "Art Direction, Graphic Design",
    year: "2017",
    challenge: loremIpsum,
    solution: loremIpsum,
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=800"
    ]
  },
  { 
    id: 2, 
    title: "Project 2 name", 
    client: "Bluedot",
    role: "Brand Strategy, Visual Identity",
    year: "2019",
    challenge: loremIpsum,
    solution: loremIpsum,
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=800",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&h=800"
    ]
  },
  // Add more project details for other IDs
  { 
    id: 3, 
    title: "Project 3 name", 
    client: "Artemis",
    role: "UX/UI Design",
    year: "2020",
    challenge: loremIpsum,
    solution: loremIpsum,
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=800", 
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=800"
    ]
  },
  { 
    id: 4, 
    title: "Project 4 name", 
    client: "Nova",
    role: "Branding, Print Design",
    year: "2021",
    challenge: loremIpsum,
    solution: loremIpsum,
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=800", 
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=800"
    ] 
  },
  { 
    id: 5, 
    title: "Project 5 name", 
    client: "Zenith",
    role: "Art Direction",
    year: "2022",
    challenge: loremIpsum,
    solution: loremIpsum,
    images: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&h=800", 
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=800"
    ]
  },
  { 
    id: 6, 
    title: "Project 6 name", 
    client: "Momentum",
    role: "UI Design, Web Development",
    year: "2023",
    challenge: loremIpsum,
    solution: loremIpsum,
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=800", 
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=800"
    ]
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || "1");
  const project = projects.find(p => p.id === projectId) || projects[0];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white animate-fade-in">
      <Navigation title={project.title} subtitle="" />
      
      <main className="flex-grow">
        <div className="p-6">
          <Link to="/" className="inline-flex items-center gap-2 hover:underline mb-8">
            <ArrowLeft size={16} />
            <span>Back</span>
          </Link>
          
          <h1 className="text-2xl font-light mb-12">{project.title}</h1>
          
          <div className="details-grid mb-12">
            <div className="border-t border-white/10 pt-4">
              <div className="text-xs text-muted-foreground mb-1">Client</div>
              <div className="text-sm">{project.client}</div>
            </div>
            <div className="border-t border-white/10 pt-4"> </div>
            
            <div className="border-t border-white/10 pt-4">
              <div className="text-xs text-muted-foreground mb-1">Role</div>
              <div className="text-sm">{project.role}</div>
            </div>
            <div className="border-t border-white/10 pt-4"> </div>
            
            <div className="border-t border-white/10 pt-4">
              <div className="text-xs text-muted-foreground mb-1">Year</div>
              <div className="text-sm">{project.year}</div>
            </div>
            <div className="border-t border-white/10 pt-4"> </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-lg mb-4">Challenge</h2>
            <p className="text-base font-light">{project.challenge}</p>
          </div>
          
          <div className="mb-16">
            <h2 className="text-lg mb-4">Solution</h2>
            <p className="text-base font-light">{project.solution}</p>
          </div>
        </div>
        
        {project.images.map((image, index) => (
          <div key={index} className="border-t border-white/10 h-[60vh] flex items-center justify-center relative overflow-hidden">
            <img 
              src={image} 
              alt={`Project image ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
