import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import bgimg from "@/assets/images/bg.jpg";

const Home = () => {
  const { observeElements } = useIntersectionObserver();

  useEffect(() => {
    observeElements();
  }, [observeElements]);

  return (
    <>
      {/* Hero Section */}
      <section id="accueil" className="min-h-screen flex items-center justify-center pt-16" style={{ backgroundImage:  `url(${bgimg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="text-center">
            <p className="text-white font-medium mb-4 animate-on-scroll">
              Bienvenue sur mon portfolio
            </p>
            <h1 className="text-4xl md:text-6xl font-bold font-inter mb-4 animate-on-scroll stagger-1">
              Saad Dahmane
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-8 animate-on-scroll stagger-2">
              Développeur Full Stack
            </h2>
            <div className="flex justify-center space-x-4 animate-on-scroll stagger-3">
              <a
                href="#contact"
                className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors shadow-md"
              >
                Me Contacter
              </a>
              <a
                href="#projets"
                className="border border-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary hover:text-white transition-colors"
              >
                Voir mes projets
              </a>
            </div>
            <div className="mt-16 animate-on-scroll stagger-3">
              <a href="#apropos" className="inline-block">
                <span className=" text-white block text-sm mb-2">En savoir plus</span>
                <ChevronDown className="text-white animate-bounce mx-auto h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Include all sections */}
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
