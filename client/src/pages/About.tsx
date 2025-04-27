import { useEffect } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import profile from '../assets/images/profile.png';
const About = () => {
  const { observeElements } = useIntersectionObserver();

  useEffect(() => {
    observeElements();
  }, [observeElements]);

  return (
    <section id="apropos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-8 text-center animate-on-scroll">
            <span className="border-b-4 border-primary pb-2">À Propos</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="w-full md:w-1/3 animate-on-scroll">
              <div 
                className="rounded-full w-48 h-48 mx-auto bg-gray-200 shadow-lg flex items-center justify-center overflow-hidden"
              >
                <img 
                  src={profile} 
                  alt="Saad Dahmane" 
                  className="rounded-full w-full h-full object-cover  "
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <p className="text-lg mb-6 leading-relaxed animate-on-scroll">
                Développeur Full Stack avec 3 ans d'expérience, passionné par la création d'applications web et mobiles robustes. 
                J'ai développé une expertise en React, Angular, Node.js, Java, Python, et méthodes agiles.
              </p>
              
              <p className="text-lg mb-6 leading-relaxed animate-on-scroll stagger-1">
                Mon objectif est de créer des solutions technologiques qui répondent précisément aux besoins des utilisateurs 
                tout en étant performantes et évolutives. Je m'efforce constamment d'améliorer mes compétences techniques et 
                de rester à jour avec les dernières tendances du développement web.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8 animate-on-scroll stagger-2">
                <a 
                  href="#contact" 
                  className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition-colors text-sm flex items-center"
                >
                  <Mail className="mr-2 h-4 w-4" /> Me contacter
                </a>
                {/* <a 
                  href="#" 
                  className="bg-secondary text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors text-sm flex items-center"
                >
                  <Download className="mr-2 h-4 w-4" /> Télécharger mon CV
                </a> */}
                <a 
                  href="https://github.com/saaddhm" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-md font-medium hover:bg-black transition-colors text-sm flex items-center"
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/saad-dahmane-58a736191/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-700 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-800 transition-colors text-sm flex items-center"
                >
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
