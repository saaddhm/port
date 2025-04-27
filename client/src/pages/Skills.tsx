import { useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Code, Server, Smartphone, Database } from "lucide-react";
import { frontendSkills, backendSkills, mobileSkills, databaseSkills, otherSkills } from "@/lib/data";

const Skills = () => {
  const { observeElements } = useIntersectionObserver();

  useEffect(() => {
    observeElements();
  }, [observeElements]);

  return (
    <section id="competences" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-inter mb-12 text-center animate-on-scroll">
          <span className="border-b-4 border-primary pb-2">Compétences</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll">
            <div className="flex items-center mb-4">
              <Code className="text-primary mr-3 h-6 w-6" />
              <h3 className="text-xl font-bold font-inter">Frontend</h3>
            </div>
            <ul className="space-y-2">
              {frontendSkills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Backend */}
          <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll stagger-1">
            <div className="flex items-center mb-4">
              <Server className="text-primary mr-3 h-6 w-6" />
              <h3 className="text-xl font-bold font-inter">Backend</h3>
            </div>
            <ul className="space-y-2">
              {backendSkills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Mobile */}
          <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll stagger-2">
            <div className="flex items-center mb-4">
              <Smartphone className="text-primary mr-3 h-6 w-6" />
              <h3 className="text-xl font-bold font-inter">Mobile</h3>
            </div>
            <ul className="space-y-2">
              {mobileSkills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Bases de données */}
          <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll stagger-3">
            <div className="flex items-center mb-4">
              <Database className="text-primary mr-3 h-6 w-6" />
              <h3 className="text-xl font-bold font-inter">Bases de données</h3>
            </div>
            <ul className="space-y-2">
              {databaseSkills.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Other skills */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md animate-on-scroll">
          <h3 className="text-xl font-bold font-inter mb-4">Autres Compétences</h3>
          <div className="flex flex-wrap gap-2">
            {otherSkills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
