import { useCallback } from "react";

export const useIntersectionObserver = () => {
  const observeElements = useCallback(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
    
    // Cleanup function
    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  return { observeElements };
};
