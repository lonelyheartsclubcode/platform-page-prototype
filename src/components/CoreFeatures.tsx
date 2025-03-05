import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    title: 'Agent',
    description: 'Your intelligent, context-aware representative—whether managing client engagement, legal advisory, or specialized expert roles.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: 'Context Graph',
    description: 'A dynamic blueprint mapping out flows and decision points for consistent, reliable interactions.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
      </svg>
    )
  },
  {
    title: 'Memory',
    description: 'A robust system capturing past interactions to enrich every new conversation.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    )
  },
  {
    title: 'Knowledge',
    description: 'A deep repository that powers accurate and insightful responses.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
      </svg>
    )
  }
];

const CoreFeatures = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { 
          y: 50, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
      
      // Cards animation with stagger
      cards.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { 
              y: 50, 
              opacity: 0 
            },
            { 
              y: 0, 
              opacity: 1, 
              duration: 0.6,
              delay: 0.2 + (index * 0.1),
              scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 70%",
                toggleActions: "play none none none"
              }
            }
          );
        }
      });
    }, sectionRef);
    
    return () => ctx.revert(); // Cleanup
  }, []);
  
  return (
    <section 
      id="core" 
      ref={sectionRef}
      className="py-20 bg-amigo-bg"
    >
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-amigo-pink bg-opacity-60 text-amigo-text rounded-full mb-3">
            Core
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-amigo-text mb-4">
            Intelligent AI Frontline
          </h2>
          <p className="text-lg text-amigo-text-secondary max-w-3xl mx-auto">
            At the heart of Amigo lies Core—a fully integrated suite that drives your AI front office.
          </p>
        </div>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={el => {
                cards.current[index] = el;
              }}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-amigo-text mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-amigo-text mb-3">
                {feature.title}
              </h3>
              <p className="text-amigo-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-amigo-text-secondary max-w-3xl mx-auto">
            Core is the engine that drives real-world, client-facing AI interactions—ensuring your solution not only meets but exceeds expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures; 