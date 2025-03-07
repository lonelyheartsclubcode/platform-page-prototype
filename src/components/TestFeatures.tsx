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
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Real-time Dashboards",
      description: "Visualize KPIs, usage patterns, and performance trends",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: "Persona Simulations",
      description: "Test with 50+ user personas before deployment",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
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
    <section ref={sectionRef} className="py-24 bg-gray-50">
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
          <div className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden">
            <div className="relative aspect-video">
              {/* Background */}
              <div className="absolute inset-0 bg-gray-50"></div>
              
              {/* Dashboard elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-4xl p-6">
                  <div className="grid grid-cols-4 gap-4">
                    {/* Main chart */}
                    <div className="col-span-3 bg-white rounded-md shadow-sm p-4 border border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-medium text-amigo-text">Conversation Quality</div>
                        <div className="flex space-x-2">
                          <div className="text-xs px-2 py-1 bg-gray-100 rounded-md">Weekly</div>
                          <div className="text-xs px-2 py-1 bg-amigo-mint/10 rounded-md text-amigo-mint">Monthly</div>
                        </div>
                      </div>
                      <div className="h-[180px] flex items-end">
                        <div className="w-full flex items-end h-full space-x-2">
                          {[60, 75, 45, 80, 65, 90, 70, 85].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center">
                              <div 
                                className="w-full bg-amigo-mint/80 rounded-t-sm"
                                style={{height: `${h}%`}}
                              ></div>
                              <div className="text-xs text-gray-400 mt-1">{i+1}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats cards */}
                    <div className="space-y-4">
                      <div className="bg-white rounded-md shadow-sm p-4 border border-gray-100">
                        <div className="text-xs text-amigo-text-secondary mb-1">Accuracy</div>
                        <div className="text-2xl font-bold text-amigo-text">94%</div>
                        <div className="text-xs flex items-center text-green-500 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                          2.4%
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-md shadow-sm p-4 border border-gray-100">
                        <div className="text-xs text-amigo-text-secondary mb-1">Engagement</div>
                        <div className="text-2xl font-bold text-amigo-text">+28%</div>
                        <div className="text-xs flex items-center text-green-500 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                          5.1%
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-md shadow-sm p-4 border border-gray-100">
                        <div className="text-xs text-amigo-text-secondary mb-1">CSAT</div>
                        <div className="text-2xl font-bold text-amigo-text">9.2</div>
                        <div className="text-xs flex items-center text-green-500 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                          0.8
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Status indicators */}
              <div className="absolute bottom-4 right-4 flex items-center space-x-3">
                <div className="bg-white rounded-full py-1 px-3 shadow-sm border border-gray-100 flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></div>
                  <span className="text-xs text-gray-600 font-medium">Live</span>
                </div>
                <div className="bg-white rounded-full py-1 px-3 shadow-sm border border-gray-100 flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></div>
                  <span className="text-xs text-gray-600 font-medium">Updating</span>
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
        </div>
        
        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
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
        
        {/* Process steps */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-amigo-text text-center">
                How We Measure Success
              </h3>
              
              <div className="space-y-8">
                {['Pre-Launch Validation', 'Performance Monitoring', 'Continuous Improvement'].map((step, i) => (
                  <div key={i} className="flex">
                    <div className="w-10 h-10 rounded-full bg-amigo-mint/10 flex-shrink-0 flex items-center justify-center border border-amigo-mint/30 mt-0.5 mr-5">
                      <span className="text-amigo-mint font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-amigo-text">{step}</h4>
                      <p className="text-amigo-text-secondary text-sm leading-relaxed">
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
            
            <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
              <p className="text-amigo-text-secondary text-sm">
                Transform subjective impressions into quantifiable metrics
              </p>
            </div>
          </div>
        </div>
        
        {/* Dashboard visualization - secondary */}
        <div ref={dashboardRef} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Performance metrics visualization */}
            <div className="bg-white rounded-md shadow-sm border border-gray-100 p-5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-medium text-amigo-text">Performance Metrics</h3>
                <div className="flex space-x-3">
                  <div className="flex items-center text-xs">
                    <div className="w-2 h-2 rounded-full bg-amigo-mint mr-1.5"></div>
                    <span className="text-amigo-text-secondary">Current</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="w-2 h-2 rounded-full bg-gray-300 mr-1.5"></div>
                    <span className="text-amigo-text-secondary">Target</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {['Accuracy', 'Satisfaction', 'Task Completion'].map((metric, i) => (
                  <div key={i} className="w-full">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-amigo-text-secondary">{metric}</span>
                      <span className="font-medium text-amigo-text">{85 + i * 5}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden relative">
                      <div className="h-full bg-amigo-mint rounded-full absolute inset-y-0 left-0" style={{width: `${85 + i * 5}%`}}></div>
                      <div className="h-full border-l border-gray-400 absolute inset-y-0" style={{left: `${92 + i * 3}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Evaluation distribution */}
            <div className="bg-white rounded-md shadow-sm border border-gray-100 p-5">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-medium text-amigo-text">Evaluation Distribution</h3>
                <div className="text-xs px-2 py-1 bg-gray-100 rounded-md">Last 30 days</div>
              </div>
              
              <div className="space-y-3">
                {[
                  { label: 'Excellent', value: 65, color: 'bg-green-500' },
                  { label: 'Good', value: 25, color: 'bg-blue-500' },
                  { label: 'Satisfactory', value: 8, color: 'bg-yellow-500' },
                  { label: 'Needs Improvement', value: 2, color: 'bg-red-500' },
                ].map((item, i) => (
                  <div key={i} className="w-full">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-amigo-text-secondary">{item.label}</span>
                      <span className="font-medium text-amigo-text">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full`} style={{width: `${item.value}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestFeatures; 