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
              The complete AI platform for building, testing, and optimizing intelligent agents
            </p>
            
            <button 
              ref={buttonRef}
              className="px-8 py-4 bg-amigo-mint text-amigo-text rounded-lg text-lg font-medium hover:shadow-lg transition-all flex items-center"
            >
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div ref={videoRef} className="md:w-1/2">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              {/* Video placeholder - animated gradient and interface elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-amigo-mint/30 to-amigo-pink/30 animate-pulse"></div>
              
              {/* Interface elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-amigo-mint flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="h-3 w-24 bg-gray-200 rounded-full"></div>
                      <div className="h-2 w-16 bg-gray-100 rounded-full mt-1"></div>
                    </div>
                    <div className="ml-auto">
                      <div className="h-8 w-8 rounded-full bg-amigo-mint flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="h-2 w-full bg-gray-100 rounded-full"></div>
                    <div className="h-2 w-5/6 bg-gray-100 rounded-full"></div>
                    <div className="h-2 w-4/6 bg-gray-100 rounded-full"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-40 bg-amigo-mint/20 rounded-full"></div>
                    <div className="h-8 w-20 bg-amigo-mint rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Animated dots in the background */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-amigo-mint rounded-full animate-ping"></div>
              <div className="absolute bottom-8 right-12 w-2 h-2 bg-amigo-pink rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-4 w-2 h-2 bg-amigo-mint rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              
              {/* Overlay play button */}
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
      </div>
    </section>
  );
};

export default Hero; 