import { useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";


const Projects = () => {
  const { observeElements } = useIntersectionObserver();

  useEffect(() => {
    observeElements();
  }, [observeElements]);

  return (
    <section id="projets" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-inter mb-12 text-center animate-on-scroll">
          <span className="border-b-4 border-primary pb-2">Mes Projets</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 animate-on-scroll ${
                index % 3 === 1 ? 'stagger-1' : index % 3 === 2 ? 'stagger-2' : ''
              }`}
            >
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
              <img src={project.img} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-inter mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={`${tech.bgColor} ${tech.textColor} text-xs px-2 py-1 rounded`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between">
                  {/* <a href={project.demoLink} className="text-primary hover:underline font-medium flex items-center" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" /> Voir le projet
                  </a> */}
                  <a href={project.githubLink} className="text-gray-700  hover:text-black" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="text-center mt-12">
          <a href="#" className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors animate-on-scroll">
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
              </svg>
              Voir tous les projets
            </span>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
