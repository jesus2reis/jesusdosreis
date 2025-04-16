
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const projects = [
  { 
    id: 1, 
    title: "Project 1 name", 
    client: "Positif",
    role: "Art Direction, Graphic Design",
    year: "2017",
    challenge: "A clear and compelling summary of the problem or opportunity the brand, organization, or client was facing. Focus on the tension. Why did this project need to exist? What was at stake? Highlight any cultural, social, or market context that made the challenge meaningful or urgent.",
    solution: "Explain the big idea behind the solution — what was created and why it matters. Describe how design, strategy, naming, and storytelling came together to address the challenge. Mention how the concept translated into visual identity, language, and experience. Keep it bold, human, and full of purpose. Focus less on deliverables and more on transformation.",
    images: ["", "", ""]
  },
  { 
    id: 2, 
    title: "Project 2 name", 
    client: "Bluedot",
    role: "Brand Strategy, Visual Identity",
    year: "2019",
    challenge: "A clear and compelling summary of the problem or opportunity the brand was facing. Focus on the tension. Why did this project need to exist?",
    solution: "Explain the big idea behind the solution — what was created and why it matters. Describe how design and strategy came together to address the challenge.",
    images: ["", ""]
  },
  // Add more project details here
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
          
          <h1 className="text-3xl font-light mb-12">{project.title}</h1>
          
          <div className="details-grid mb-12">
            <div className="border-t border-white/10 pt-4">
              <div className="text-sm text-muted-foreground mb-1">Client</div>
              <div>{project.client}</div>
            </div>
            <div className="border-t border-white/10 pt-4"> </div>
            
            <div className="border-t border-white/10 pt-4">
              <div className="text-sm text-muted-foreground mb-1">Role</div>
              <div>{project.role}</div>
            </div>
            <div className="border-t border-white/10 pt-4"> </div>
            
            <div className="border-t border-white/10 pt-4">
              <div className="text-sm text-muted-foreground mb-1">Year</div>
              <div>{project.year}</div>
            </div>
            <div className="border-t border-white/10 pt-4"> </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-xl mb-4">Challenge</h2>
            <p className="text-lg font-light">{project.challenge}</p>
          </div>
          
          <div className="mb-16">
            <h2 className="text-xl mb-4">Solution</h2>
            <p className="text-lg font-light">{project.solution}</p>
          </div>
        </div>
        
        {project.images.map((image, index) => (
          <div key={index} className="border-t border-white/10 h-[60vh] flex items-center justify-center">
            <div className="text-white/10 text-2xl font-light">Project Image {index + 1}</div>
          </div>
        ))}
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
