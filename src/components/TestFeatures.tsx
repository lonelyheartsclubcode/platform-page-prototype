import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    title: 'Scorecards & Metrics',
    description: 'Real-time KPIs that measure success and highlight improvement opportunities.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
      </svg>
    )
  },
  {
    title: 'Persona Simulations',
    description: 'Run thousands of simulated conversations before deployment—stress-testing agent behaviors to ensure they align with your objectives.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    )
  }
];

const TestFeatures = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);
  
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
      
      // Animation for the image/illustration
      gsap.fromTo(
        imageRef.current,
        { 
          x: -50, 
          opacity: 0 
        },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 70%",
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
              x: 50, 
              opacity: 0 
            },
            { 
              x: 0, 
              opacity: 1, 
              duration: 0.6,
              delay: 0.3 + (index * 0.2),
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
      id="test" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-indigo-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-purple-100 text-purple-800 rounded-full mb-3">
            Test
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Observability Layer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Gain complete visibility into your AI's performance with Test.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="order-2 lg:order-1">
            {/* Abstract visualization */}
            <div className="relative w-full h-80 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl overflow-hidden shadow-lg">
              {/* Graph line */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                <path 
                  d="M0,150 C50,120 100,180 150,150 C200,120 250,180 300,150 C350,120 400,180 450,150" 
                  fill="none" 
                  stroke="#6366F1" 
                  strokeWidth="3"
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                  className="animate-draw-line"
                />
                <circle cx="150" cy="150" r="6" fill="#6366F1" className="animate-pulse"/>
                <circle cx="300" cy="150" r="6" fill="#6366F1" className="animate-pulse animation-delay-2000"/>
              </svg>
              
              {/* Floating elements */}
              <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center transform -rotate-6 animate-float">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              
              <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center transform rotate-6 animate-float animation-delay-1000">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              
              <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center transform -rotate-12 animate-float animation-delay-3000">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div ref={cardsRef} className="order-1 lg:order-2 space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                ref={el => {
                  cards.current[index] = el;
                }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-purple-50"
              >
                <div className="text-purple-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
            
            <p className="text-gray-600 mt-6">
              Test empowers you to monitor, optimize, and drive continuous improvement across every interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestFeatures; 