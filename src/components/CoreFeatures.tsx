import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CoreFeatures = () => {
  // Refs for animations
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<HTMLDivElement[]>([]);
  
  // Feature card data
  const features = [
    {
      title: "Agent",
      description: "Cognitive system that mirrors human expert reasoning",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Context Graph",
      description: "Decision frameworks that provide precise control over agent behavior",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: "Memory",
      description: "Storage system that maintains history and preferences across sessions",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: "Knowledge",
      description: "Secure repository containing your organization's proprietary information",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  // Set up refs
  const setFeatureRef = (el: HTMLDivElement | null, index: number) => {
    if (el) featureRefs.current[index] = el;
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%"
          }
        }
      );
      
      // Animate feature cards
      gsap.fromTo(
        featureRefs.current,
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featureRefs.current[0],
            start: "top 75%"
          }
        }
      );
    });
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div ref={titleRef} className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amigo-text">
            Intelligent AI Frontline
          </h2>
          <p className="text-xl text-amigo-text-secondary">
            Build and deploy AI agents in weeks, not months
          </p>
        </div>
        
        {/* Process visualization */}
        <div className="mb-20">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
            
            <div className="relative z-10 grid grid-cols-3 gap-4">
              {['Knowledge Capture', 'Agent Development', 'Deployment'].map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-amigo-mint mb-4 flex items-center justify-center text-white font-bold text-xl">
                    {i + 1}
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg mb-1">{step}</div>
                    <div className="text-sm text-amigo-text-secondary">
                      {i === 0 ? 'Map expert decision-making' : 
                       i === 1 ? 'Build cognitive models' : 
                                'Complete within weeks'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              ref={(el) => setFeatureRef(el as HTMLDivElement, index)}
              className="bg-amigo-bg rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-amigo-mint mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-amigo-text">
                {feature.title}
              </h3>
              <p className="text-amigo-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Feature highlight */}
        <div className="bg-amigo-bg rounded-lg overflow-hidden max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-amigo-text">Our Process</h3>
              <p className="text-amigo-text-secondary mb-6">
                We deliver expert-level performance from day one while maintaining enterprise-grade security and control.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-amigo-mint flex-shrink-0 flex items-center justify-center text-white mr-3">✓</div>
                  <span className="text-amigo-text-secondary">5,000+ simulated scenarios before deployment</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-amigo-mint flex-shrink-0 flex items-center justify-center text-white mr-3">✓</div>
                  <span className="text-amigo-text-secondary">Proprietary context graph technology</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-amigo-mint flex-shrink-0 flex items-center justify-center text-white mr-3">✓</div>
                  <span className="text-amigo-text-secondary">95% of expert decision-making captured</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-amigo-mint/40 to-amigo-pink/40 p-8 flex items-center justify-center">
              <div className="w-full max-w-xs aspect-square bg-white/80 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-amigo-mint mb-2">4-6</div>
                  <div className="text-amigo-text-secondary">weeks to deployment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures; 