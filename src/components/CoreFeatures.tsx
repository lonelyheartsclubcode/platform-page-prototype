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
  const videoRef = useRef<HTMLDivElement>(null);
  
  // Feature card data
  const features = [
    {
      title: "Agent",
      description: "Cognitive system that mirrors human expert reasoning",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "Context Graph",
      description: "Decision frameworks that provide precise control over agent behavior",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: "Memory",
      description: "Storage system that maintains history and preferences across sessions",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Knowledge",
      description: "Secure repository containing your organization's proprietary information",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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
      
      // Animate video placeholder
      gsap.fromTo(
        videoRef.current,
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 80%"
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
        
        {/* Video placeholder */}
        <div ref={videoRef} className="max-w-5xl mx-auto mb-20">
          <div className="relative aspect-video rounded-md overflow-hidden shadow-sm border border-gray-100">
            {/* Interface mockup */}
            <div className="absolute inset-0 bg-gray-50 p-6 flex items-center justify-center">
              <div className="w-full max-w-4xl">
                <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
                  <div className="bg-gray-50 border-b border-gray-200 px-5 py-3 flex items-center">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="mx-auto w-64 h-5 bg-gray-200 rounded-full"></div>
                  </div>
                  
                  <div className="flex h-[280px]">
                    <div className="w-64 bg-gray-50 border-r border-gray-200 p-4 flex flex-col">
                      <div className="h-8 w-full bg-amigo-mint/10 rounded-md mb-4"></div>
                      <div className="space-y-3 flex-1">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="flex items-center">
                            <div className="w-6 h-6 rounded-full bg-amigo-mint/20 mr-2 flex-shrink-0"></div>
                            <div className="h-4 bg-gray-200 rounded-md flex-1"></div>
                          </div>
                        ))}
                      </div>
                      <div className="h-8 w-full bg-amigo-mint/20 mt-4 rounded-md"></div>
                    </div>
                    
                    <div className="flex-1 p-6 flex flex-col">
                      <div className="flex mb-4">
                        <div className="w-10 h-10 rounded-full bg-amigo-mint/20 flex items-center justify-center mr-3 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amigo-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <div className="h-3 bg-gray-200 rounded-md w-36 mb-2"></div>
                          <div className="h-2.5 bg-gray-100 rounded-md w-24"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2.5 mb-6 flex-1">
                        <div className="h-3 bg-gray-200 rounded-md w-full"></div>
                        <div className="h-3 bg-gray-200 rounded-md w-full"></div>
                        <div className="h-3 bg-gray-200 rounded-md w-5/6"></div>
                        <div className="h-3 bg-gray-200 rounded-md w-4/6"></div>
                      </div>
                      
                      <div className="flex justify-end">
                        <div className="h-9 w-28 bg-amigo-mint rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Overlay play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100 group hover:bg-amigo-mint transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amigo-mint group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Process visualization */}
        <div className="mb-20">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
            
            <div className="relative z-10 grid grid-cols-3 gap-4">
              {['Knowledge Capture', 'Agent Development', 'Deployment'].map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm border border-amigo-mint/50 mb-4">
                    <div className="w-10 h-10 rounded-full bg-amigo-mint/10 flex items-center justify-center text-amigo-mint font-bold text-lg">
                      {i + 1}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg mb-1 text-amigo-text">{step}</div>
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
              className="bg-white rounded-md p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
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
        <div className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-100 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-amigo-text">Our Process</h3>
              <p className="text-amigo-text-secondary mb-6">
                We deliver expert-level performance from day one while maintaining enterprise-grade security and control.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-amigo-mint/10 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-amigo-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-amigo-text-secondary">5,000+ simulated scenarios before deployment</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-amigo-mint/10 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-amigo-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-amigo-text-secondary">Proprietary context graph technology</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-amigo-mint/10 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-amigo-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-amigo-text-secondary">95% of expert decision-making captured</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-amigo-mint mb-2">4-6</div>
                <div className="text-amigo-text-secondary font-medium">weeks to deployment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures; 