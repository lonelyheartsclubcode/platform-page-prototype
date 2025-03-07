import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ModelFeatures = () => {
  // Refs for animations
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<HTMLDivElement[]>([]);
  const chartRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  
  // Feature card data
  const features = [
    {
      title: "Reinforcement Learning",
      description: "Process thousands of interactions to enhance decision quality",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Targeted Finetuning",
      description: "Focus on specific capabilities with domain-specific parameters",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: "Cost Optimization",
      description: "Reduce computational requirements while preserving performance",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
      
      // Animate chart
      gsap.fromTo(
        chartRef.current,
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: chartRef.current,
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div ref={titleRef} className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amigo-text">
            The Optimization Engine
          </h2>
          <p className="text-xl text-amigo-text-secondary">
            How your AI gets better over time
          </p>
        </div>
        
        {/* Video placeholder */}
        <div ref={videoRef} className="max-w-5xl mx-auto mb-20">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative aspect-video">
              {/* Video content */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100"></div>
              
              {/* Model optimization visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-4xl p-6">
                  <div className="relative h-[240px]">
                    {/* Baseline */}
                    <div className="absolute left-0 bottom-[60px] right-0 border-t border-dashed border-gray-300"></div>
                    <div className="absolute left-4 bottom-[60px] bg-white px-2 text-xs text-gray-500 transform -translate-y-1/2">
                      Initial
                    </div>
                    
                    {/* Human level */}
                    <div className="absolute left-0 bottom-[120px] right-0 border-t border-dashed border-gray-300"></div>
                    <div className="absolute left-4 bottom-[120px] bg-white px-2 text-xs text-gray-500 transform -translate-y-1/2">
                      Human
                    </div>
                    
                    {/* Performance curve */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 240" preserveAspectRatio="none">
                      {/* Initial curve */}
                      <path 
                        d="M0,180 C50,180 100,170 150,160 C200,150 250,140 300,130 C350,120 400,110 450,100" 
                        stroke="#E2E8F0" 
                        strokeWidth="2" 
                        fill="none"
                        strokeDasharray="5,5"
                      />
                      
                      {/* Optimized curve */}
                      <path 
                        d="M0,180 C50,180 100,160 150,130 C200,100 250,80 300,60 C350,40 400,30 450,20" 
                        stroke="#B4E4DB" 
                        strokeWidth="3" 
                        fill="none"
                      />
                      
                      {/* Area under curve */}
                      <path 
                        d="M0,240 L0,180 C50,180 100,160 150,130 C200,100 250,80 300,60 C350,40 400,30 450,20 L450,240 Z" 
                        fill="url(#gradient)" 
                        opacity="0.1"
                      />
                      
                      {/* Gradient definition */}
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#B4E4DB" />
                          <stop offset="100%" stopColor="#FFFFFF" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Optimization points */}
                    <div className="absolute left-[25%] bottom-[130px] w-6 h-6 rounded-full bg-white border-2 border-amigo-mint flex items-center justify-center text-xs font-bold">1</div>
                    <div className="absolute left-[50%] bottom-[100px] w-6 h-6 rounded-full bg-white border-2 border-amigo-mint flex items-center justify-center text-xs font-bold">2</div>
                    <div className="absolute left-[75%] bottom-[60px] w-6 h-6 rounded-full bg-white border-2 border-amigo-mint flex items-center justify-center text-xs font-bold">3</div>
                    
                    {/* Time markers */}
                    <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-500">
                      <span>Start</span>
                      <span>30 Days</span>
                      <span>90 Days</span>
                      <span>180 Days</span>
                    </div>
                    
                    {/* Performance indicator */}
                    <div className="absolute top-4 right-4 bg-white rounded-lg shadow-sm p-3">
                      <div className="text-xs text-gray-500 mb-1">Performance Gain</div>
                      <div className="text-2xl font-bold text-amigo-mint">+15-30%</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Animated elements */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amigo-mint rounded-full animate-ping"></div>
              <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-amigo-pink rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
              
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
        
        {/* Performance chart */}
        <div ref={chartRef} className="mb-20 max-w-4xl mx-auto">
          <div className="bg-amigo-bg rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-center text-amigo-text">Performance Improvement Over Time</h3>
            
            <div className="relative h-[200px] mb-6">
              {/* Progress chart */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-300"></div>
              <div className="absolute left-0 bottom-0 top-0 w-[1px] bg-gray-300"></div>
              
              {/* Initial performance line */}
              <div className="absolute left-0 bottom-[60px] right-0 border-t border-dashed border-gray-400"></div>
              <div className="absolute left-[-5px] bottom-[60px] text-xs text-amigo-text-secondary">
                Initial
              </div>
              
              {/* Human baseline line */}
              <div className="absolute left-0 bottom-[100px] right-0 border-t border-dashed border-gray-400"></div>
              <div className="absolute left-[-5px] bottom-[100px] text-xs text-amigo-text-secondary">
                Human
              </div>
              
              {/* Performance curve */}
              <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                <path 
                  d="M0,140 C30,140 60,130 100,120 C150,105 200,80 250,60 C300,45 350,35 400,25" 
                  stroke="#B4E4DB" 
                  strokeWidth="3" 
                  fill="none"
                />
                <path 
                  d="M0,140 C30,140 60,130 100,120 C150,105 200,80 250,60 C300,45 350,35 400,25" 
                  stroke="rgba(180, 228, 219, 0.2)" 
                  strokeWidth="12" 
                  fill="none"
                />
              </svg>
              
              {/* Time markers */}
              <div className="absolute bottom-[-20px] left-0 w-full flex justify-between text-xs text-amigo-text-secondary">
                <span>Start</span>
                <span>30 Days</span>
                <span>90 Days</span>
                <span>180 Days</span>
              </div>
              
              {/* Performance indicators */}
              <div className="absolute top-4 right-4 bg-white/80 rounded p-2 shadow-sm">
                <div className="text-xs text-amigo-text-secondary mb-1">Performance Gain</div>
                <div className="text-2xl font-bold text-amigo-mint">+15-30%</div>
                <div className="text-xs text-amigo-text-secondary">in first 90 days</div>
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
        
        {/* Optimization steps */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-amigo-text text-center">
                Optimization Process
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {['Establish Baseline', 'Run Enhancement Cycles', 'Scale Capabilities'].map((step, i) => (
                  <div key={i} className="text-center">
                    <div className="w-14 h-14 rounded-full bg-amigo-mint mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                      {i + 1}
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-amigo-text">{step}</h4>
                    <p className="text-sm text-amigo-text-secondary">
                      {i === 0 ? 
                        'Match human performance with clear metrics and guardrails' : 
                      i === 1 ? 
                        'Use real interactions to systematically improve decision-making' : 
                        'Expand capabilities as performance exceeds human-level benchmarks'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-amigo-mint/10 p-4 text-center">
              <p className="text-amigo-text-secondary">
                Model is how your AI evolves from matching human performance to exceeding it
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelFeatures; 