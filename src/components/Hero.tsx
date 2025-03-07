import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Add state for profession switching
  const [professionIndex, setProfessionIndex] = useState(0);
  const professions = [
    "Doctors",
    "Lawyers",
    "Financial Advisors",
    "Customer Support",
    "Sales Teams"
  ];
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const ctx = gsap.context(() => {
      // Hero fade in
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );
      
      // Button animation
      gsap.fromTo(
        buttonRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: "power1.out" }
      );
    });
    
    // Add profession switching effect
    const intervalId = setInterval(() => {
      setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 2500);
    
    return () => {
      ctx.revert();
      clearInterval(intervalId);
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="pt-32 pb-24 bg-amigo-bg"
    >
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-amigo-text leading-tight">
            Build AI <span className="text-amigo-mint transition-all duration-700">
              {professions[professionIndex]}
            </span>
          </h1>
          
          <p className="text-xl text-amigo-text-secondary mb-12 max-w-2xl mx-auto">
            The complete AI operating system for building, testing, and optimizing intelligent agents
          </p>
          
          <button 
            ref={buttonRef}
            className="px-8 py-4 bg-amigo-mint text-amigo-text rounded-lg text-lg font-medium hover:shadow-lg transition-all flex items-center mx-auto"
          >
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 