import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const announcementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for the animation sequence
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.fromTo(
        announcementRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      )
      .fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.4"
      )
      .fromTo(
        subheadingRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6" // Start slightly before the previous animation finishes
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      );
    });
    
    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-amigo-bg overflow-hidden pt-16"
    >
      <div 
        ref={announcementRef}
        className="absolute top-32 mx-auto py-2 px-4 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm"
      >
        <span className="inline-block mr-2 px-2 py-1 text-xs font-medium bg-amigo-pink rounded-full">New</span>
        <span className="text-sm text-amigo-text">Announcing our $6.3M raise to create our vision for the future</span>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center mt-24">
        <h1 
          ref={headingRef} 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-amigo-text leading-tight mb-6"
        >
          The Amigo Platform:<br />
          <span className="text-amigo-text-secondary">Where AI Meets Enterprise Excellence</span>
        </h1>
        
        <p 
          ref={subheadingRef}
          className="text-xl md:text-2xl text-amigo-text-secondary max-w-3xl mx-auto mb-10"
        >
          Empowering enterprises with next-generation AI solutions.
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="#platform"
            className="px-8 py-3 bg-amigo-mint text-amigo-text rounded-full text-lg font-medium hover:opacity-90 transition-all shadow-sm hover:shadow-md"
          >
            Explore Platform
          </Link>
          <Link 
            href="#contact"
            className="px-8 py-3 bg-transparent border-2 border-amigo-text text-amigo-text rounded-full text-lg font-medium hover:bg-amigo-text/10 transition-colors"
          >
            Get Started Today →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero; 