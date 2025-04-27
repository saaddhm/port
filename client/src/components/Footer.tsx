import { Link } from "wouter";
import { GitPullRequest, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className=" py-8" style={{ backgroundColor: "#1a202c", color: "#fff" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <a className="text-white font-inter font-bold text-xl">Saad Dahmane</a>
            </Link>
            <p className="text-gray-400 mt-2">Développeur Full Stack</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="#accueil" className="hover:text-primary transition-colors">Accueil</a>
            <a href="#apropos" className="hover:text-primary transition-colors">À Propos</a>
            <a href="#competences" className="hover:text-primary transition-colors">Compétences</a>
            <a href="#parcours" className="hover:text-primary transition-colors">Parcours</a>
            <a href="#projets" className="hover:text-primary transition-colors">Projets</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        
        <hr className="border-gray-700 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Saad Dahmane. Tous droits réservés.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/saad-dahmane-58a736191" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/saaddhm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitPullRequest"
            >
              <GitPullRequest className="w-5 h-5" />
            </a>
            {/* <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
