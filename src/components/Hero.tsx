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
  const professionRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  
  // Add state for profession switching
  const [currentProfession, setCurrentProfession] = useState("Doctors");
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
      
      // Video placeholder animation
      gsap.fromTo(
        videoRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.2, ease: "power2.out" }
      );
    });
    
    // Simple profession text change with GSAP animation
    let currentIndex = 0;
    const professionTween = gsap.to(professionRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      paused: true,
      onComplete: () => {
        currentIndex = (currentIndex + 1) % professions.length;
        setCurrentProfession(professions[currentIndex]);
        gsap.to(professionRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5
        });
      }
    });
    
    const intervalId = setInterval(() => {
      professionTween.restart();
    }, 4000);
    
    return () => {
      ctx.revert();
      clearInterval(intervalId);
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="pt-32 pb-24 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center md:space-x-12">
          <div ref={headingRef} className="max-w-2xl md:w-1/2 mt-12 md:mt-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-amigo-text leading-tight">
              Build AI <br />
              <span 
                ref={professionRef} 
                className="text-amigo-mint inline-block"
              >
                {currentProfession}
              </span>
            </h1>
            
            <p className="text-xl text-amigo-text-secondary mb-10">
              The complete AI operating system for building, testing, and optimizing intelligent agents
            </p>
            
            <button 
              ref={buttonRef}
              className="px-8 py-3.5 bg-amigo-mint text-amigo-text rounded-md text-lg font-medium hover:shadow-lg transition-all flex items-center group"
            >
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          
          <div ref={videoRef} className="md:w-1/2">
            <div className="relative w-full aspect-video rounded-md overflow-hidden shadow-sm border border-gray-100">
              {/* Video placeholder - subtle gradient background */}
              <div className="absolute inset-0 bg-gray-50"></div>
              
              {/* Interface elements - more enterprise looking */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-md bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden">
                  {/* Header bar */}
                  <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="mx-auto w-72 h-5 bg-gray-200 rounded-full"></div>
                  </div>
                  
                  {/* Content area */}
                  <div className="p-5">
                    <div className="flex items-center mb-5">
                      <div className="w-10 h-10 rounded-full bg-amigo-mint/10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amigo-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="h-2.5 w-28 bg-gray-200 rounded-full"></div>
                        <div className="h-2 w-20 bg-gray-100 rounded-full mt-1.5"></div>
                      </div>
                      <div className="ml-auto">
                        <div className="h-8 w-8 rounded-full bg-amigo-mint/10 border border-amigo-mint/30 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amigo-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Message content */}
                    <div className="space-y-2.5 mb-5">
                      <div className="h-2 w-full bg-gray-100 rounded-full"></div>
                      <div className="h-2 w-full bg-gray-100 rounded-full"></div>
                      <div className="h-2 w-4/5 bg-gray-100 rounded-full"></div>
                    </div>
                    
                    {/* Action buttons */}
                    <div className="flex items-center justify-between">
                      <div className="h-8 w-36 bg-gray-100 rounded-md"></div>
                      <div className="h-8 w-20 bg-amigo-mint/10 border border-amigo-mint/30 rounded-md"></div>
                    </div>
                    
                    {/* Status indicators */}
                    <div className="mt-4 flex items-center space-x-3">
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></div>
                        <div className="h-2 w-12 bg-gray-100 rounded-full"></div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-amigo-mint mr-1.5"></div>
                        <div className="h-2 w-16 bg-gray-100 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sierra-like badges/indicators */}
              <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                <div className="bg-white rounded-full py-1 px-3 shadow-sm border border-gray-100 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-amigo-mint mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs text-gray-600 font-medium">Verified</span>
                </div>
                <div className="bg-white rounded-full py-1 px-3 shadow-sm border border-gray-100 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-amigo-mint mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-xs text-gray-600 font-medium">Secure</span>
                </div>
              </div>
              
              {/* Overlay play button - more enterprise style */}
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
      </div>
    </section>
  );
};

export default Hero; 