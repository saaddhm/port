import { useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Briefcase, GraduationCap } from "lucide-react";
import { experiences, education } from "@/lib/data";

const Experience = () => {
  const { observeElements } = useIntersectionObserver();

  useEffect(() => {
    observeElements();
  }, [observeElements]);

  return (
    <section id="parcours" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-inter mb-12 text-center animate-on-scroll">
          <span className="border-b-4 border-primary pb-2">Parcours</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold font-inter mb-6 animate-on-scroll flex items-center">
              <Briefcase className="text-primary mr-3 h-6 w-6" />
              Expérience Professionnelle
            </h3>
            
            <div className="timeline-container animate-on-scroll">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item mb-8">
                  <div className="mb-1 font-bold font-inter text-lg">{exp.title}</div>
                  <div className="mb-1 text-primary font-medium">{exp.company}</div>
                  <div className="mb-2 text-sm text-gray-600">{exp.period}</div>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold font-inter mb-6 animate-on-scroll flex items-center">
              <GraduationCap className="text-primary mr-3 h-6 w-6" />
              Formation
            </h3>
            
            <div className="timeline-container animate-on-scroll">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item mb-8">
                  <div className="mb-1 font-bold font-inter text-lg">{edu.degree}</div>
                  <div className="mb-1 text-primary font-medium">{edu.institution}</div>
                  <div className="mb-2 text-sm text-gray-600">{edu.period}</div>
                  <p className="text-gray-700">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
