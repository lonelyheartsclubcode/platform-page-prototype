import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const TestFeatures = () => {
  // Refs for animations
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<HTMLDivElement[]>([]);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  
  // Feature card data
  const features = [
    {
      title: "Performance Scorecards",
      description: "Measure agent effectiveness across 30+ dimensions",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Real-time Dashboards",
      description: "Visualize KPIs, usage patterns, and performance trends",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: "Persona Simulations",
      description: "Test with 50+ user personas before deployment",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
      
      // Animate dashboard
      gsap.fromTo(
        dashboardRef.current,
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: dashboardRef.current,
            start: "top 85%"
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
    <section ref={sectionRef} className="py-24 bg-amigo-bg">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div ref={titleRef} className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amigo-text">
            The Observability Layer
          </h2>
          <p className="text-xl text-amigo-text-secondary">
            Complete visibility into AI performance
          </p>
        </div>
        
        {/* Video placeholder */}
        <div ref={videoRef} className="max-w-5xl mx-auto mb-20">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative aspect-video">
              {/* Video content */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100"></div>
              
              {/* Dashboard elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-4xl grid grid-cols-3 gap-4 p-6">
                  {/* Chart 1 */}
                  <div className="col-span-2 bg-white rounded-lg shadow-sm p-4 h-[200px]">
                    <div className="h-5 w-40 bg-gray-200 rounded-full mb-4"></div>
                    <div className="flex items-end h-[140px] space-x-2">
                      {[60, 75, 45, 80, 65, 90, 70, 85].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center">
                          <div 
                            className="w-full bg-amigo-mint rounded-t-sm" 
                            style={{height: `${h}%`}}
                          ></div>
                          <div className="text-xs text-gray-400 mt-1">{i+1}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg shadow-sm p-4">
                      <div className="h-4 w-20 bg-gray-200 rounded-full mb-2"></div>
                      <div className="text-3xl font-bold text-amigo-mint">94%</div>
                      <div className="h-3 w-16 bg-gray-100 rounded-full mt-1"></div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm p-4">
                      <div className="h-4 w-24 bg-gray-200 rounded-full mb-2"></div>
                      <div className="text-3xl font-bold text-amigo-mint">+28%</div>
                      <div className="h-3 w-20 bg-gray-100 rounded-full mt-1"></div>
                    </div>
                    
                    <div className="bg-white rounded-lg shadow-sm p-4">
                      <div className="h-4 w-16 bg-gray-200 rounded-full mb-2"></div>
                      <div className="text-3xl font-bold text-amigo-mint">9.2</div>
                      <div className="h-3 w-12 bg-gray-100 rounded-full mt-1"></div>
                    </div>
                  </div>
                  
                  {/* Bottom row */}
                  <div className="col-span-3 grid grid-cols-4 gap-4 mt-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="bg-white rounded-lg shadow-sm p-4 flex items-center">
                        <div className="w-10 h-10 rounded-full bg-amigo-mint/20 flex items-center justify-center mr-3">
                          <div className="w-5 h-5 rounded-full bg-amigo-mint"></div>
                        </div>
                        <div className="flex-1">
                          <div className="h-3 w-16 bg-gray-200 rounded-full mb-1"></div>
                          <div className="h-2 w-12 bg-gray-100 rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Animated elements */}
              <div className="absolute top-6 right-6 flex space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-amigo-mint rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amigo-mint ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dashboard visualization */}
        <div ref={dashboardRef} className="mb-20 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-4 overflow-hidden">
            <div className="bg-white rounded border border-gray-100 h-[280px] flex flex-col">
              <div className="h-12 flex items-center px-4 border-b border-gray-100">
                <div className="font-medium text-lg text-amigo-text">Performance Dashboard</div>
                <div className="ml-auto flex space-x-2">
                  <div className="w-20 h-6 bg-gray-100 rounded"></div>
                  <div className="w-20 h-6 bg-gray-100 rounded"></div>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                <div className="col-span-2 bg-gray-50 rounded p-4 flex flex-col">
                  <div className="text-sm font-medium mb-2 text-amigo-text">Conversation Quality</div>
                  <div className="flex-1 flex items-end">
                    <div className="w-full flex items-end h-[120px] space-x-1">
                      {[75, 82, 79, 85, 90, 86, 94].map((h, i) => (
                        <div key={i} className="flex-1 bg-amigo-mint rounded-t" style={{height: `${h}%`}}></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded p-4">
                  <div className="text-sm font-medium mb-2 text-amigo-text">Performance Metrics</div>
                  <div className="space-y-3">
                    {['Accuracy', 'Satisfaction', 'Task Completion'].map((metric, i) => (
                      <div key={i} className="w-full">
                        <div className="flex justify-between text-xs mb-1">
                          <span>{metric}</span>
                          <span>{85 + i * 5}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-amigo-mint rounded-full" style={{width: `${85 + i * 5}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              ref={(el) => setFeatureRef(el as HTMLDivElement, index)}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
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
        
        {/* Process steps */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-amigo-text text-center">
              How We Measure Success
            </h3>
            
            <div className="space-y-6">
              {['Pre-Launch Validation', 'Performance Monitoring', 'Continuous Improvement'].map((step, i) => (
                <div key={i} className="flex">
                  <div className="w-10 h-10 rounded-full bg-amigo-mint flex-shrink-0 flex items-center justify-center text-white font-bold mt-1 mr-4">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 text-amigo-text">{step}</h4>
                    <p className="text-amigo-text-secondary">
                      {i === 0 ? 
                        '10,000+ simulated interactions with diverse personas before deployment' : 
                      i === 1 ? 
                        'LLM judges evaluate conversations against custom success criteria' : 
                        'A/B testing and user feedback refine agent behavior for optimal outcomes'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-amigo-mint/10 p-4 text-center">
            <p className="text-amigo-text-secondary">
              Transform subjective impressions into quantifiable metrics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestFeatures; 