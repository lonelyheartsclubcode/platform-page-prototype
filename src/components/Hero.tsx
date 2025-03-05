import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for the animation sequence
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
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
      
      // Add a "floating" effect to the background gradient
      gsap.to(heroRef.current, {
        backgroundPosition: "100% 100%",
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
    
    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 background-animate overflow-hidden pt-16"
      style={{ backgroundSize: "200% 200%", backgroundPosition: "0% 0%" }}
    >
      {/* Abstract shapes for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 
          ref={headingRef} 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          The Amigo Platform:<br />
          <span className="text-indigo-300">Where AI Meets Enterprise Excellence</span>
        </h1>
        
        <p 
          ref={subheadingRef}
          className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto mb-10"
        >
          Empowering enterprises with next-generation AI solutions.
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="#platform"
            className="px-8 py-4 bg-white text-indigo-900 rounded-full text-lg font-semibold hover:bg-indigo-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore Platform
          </Link>
          <Link 
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Get Started Today →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero; 