import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    title: 'Reinforcement Learning & Finetuning',
    description: 'Systematic, data-driven cycles that progressively elevate your AI agents from baseline performance to superhuman levels.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: 'Cost Optimization',
    description: 'Strategic model tuning that drives efficiency and reduces operational expenses.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    )
  }
];

const ModelFeatures = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const visualRef = useRef<HTMLDivElement>(null);
  
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
      
      // Circle animation
      const circles = visualRef.current?.querySelectorAll('.circle');
      if (circles && circles.length > 0) {
        gsap.fromTo(
          circles,
          { 
            scale: 0,
            opacity: 0
          },
          { 
            scale: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: visualRef.current,
              start: "top 70%",
              toggleActions: "play none none none"
            }
          }
        );
      }
      
      // Cards animation
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
              delay: 0.4 + (index * 0.2),
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
      id="model" 
      ref={sectionRef}
      className="py-20 bg-indigo-900 text-white"
    >
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-indigo-800 text-indigo-200 rounded-full mb-3">
            Model
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Optimization Engine
          </h2>
          <p className="text-lg text-indigo-200 max-w-3xl mx-auto">
            Stay ahead with Model—our engine for relentless innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div ref={cardsRef} className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  ref={el => {
                    cards.current[index] = el;
                  }}
                  className="bg-indigo-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 hover:bg-indigo-700 transition-all duration-300 border border-indigo-700"
                >
                  <div className="text-indigo-300 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-indigo-200">
                    {feature.description}
                  </p>
                </div>
              ))}
              
              <p className="text-indigo-200 mt-6">
                Model ensures your solution remains at the bleeding edge of AI, continuously adapting and scaling to meet your enterprise needs.
              </p>
            </div>
          </div>
          
          <div ref={visualRef} className="relative h-80 flex items-center justify-center">
            {/* Neural network visualization */}
            <div className="relative w-full h-full">
              {/* Central node */}
              <div className="circle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 7H7v6h6V7z" />
                  <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* First layer nodes */}
              <div className="circle absolute top-1/4 left-1/4 w-12 h-12 bg-indigo-500 rounded-full shadow-lg animate-pulse"></div>
              <div className="circle absolute top-3/4 left-1/4 w-12 h-12 bg-indigo-500 rounded-full shadow-lg animate-pulse animation-delay-1000"></div>
              <div className="circle absolute top-1/2 left-1/6 w-12 h-12 bg-indigo-500 rounded-full shadow-lg animate-pulse animation-delay-2000"></div>
              
              {/* Second layer nodes */}
              <div className="circle absolute top-1/4 right-1/4 w-12 h-12 bg-purple-500 rounded-full shadow-lg animate-pulse animation-delay-500"></div>
              <div className="circle absolute top-3/4 right-1/4 w-12 h-12 bg-purple-500 rounded-full shadow-lg animate-pulse animation-delay-1500"></div>
              <div className="circle absolute top-1/2 right-1/6 w-12 h-12 bg-purple-500 rounded-full shadow-lg animate-pulse animation-delay-2500"></div>
              
              {/* Connection lines - these will be created with CSS */}
              <div className="absolute inset-0 z-0">
                <svg className="w-full h-full" viewBox="0 0 400 300" style={{ position: 'absolute' }}>
                  {/* Lines from layer 1 to center */}
                  <line x1="100" y1="75" x2="200" y2="150" stroke="rgba(165, 180, 252, 0.5)" strokeWidth="2" />
                  <line x1="100" y1="225" x2="200" y2="150" stroke="rgba(165, 180, 252, 0.5)" strokeWidth="2" />
                  <line x1="70" y1="150" x2="200" y2="150" stroke="rgba(165, 180, 252, 0.5)" strokeWidth="2" />
                  
                  {/* Lines from center to layer 2 */}
                  <line x1="200" y1="150" x2="300" y2="75" stroke="rgba(165, 180, 252, 0.5)" strokeWidth="2" />
                  <line x1="200" y1="150" x2="300" y2="225" stroke="rgba(165, 180, 252, 0.5)" strokeWidth="2" />
                  <line x1="200" y1="150" x2="330" y2="150" stroke="rgba(165, 180, 252, 0.5)" strokeWidth="2" />
                  
                  {/* Animated pulse along the lines */}
                  <circle r="4" fill="white" opacity="0.8" className="animate-move-line">
                    <animateMotion
                      path="M100,75 L200,150"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="4" fill="white" opacity="0.8" className="animate-move-line">
                    <animateMotion
                      path="M100,225 L200,150"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="4" fill="white" opacity="0.8" className="animate-move-line">
                    <animateMotion
                      path="M70,150 L200,150"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelFeatures; 