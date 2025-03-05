import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const ctx = gsap.context(() => {
      // Text animation
      gsap.fromTo(
        textRef.current,
        { 
          y: 50, 
          opacity: 0 
        },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
      
      // Button animation
      gsap.fromTo(
        buttonRef.current,
        { 
          scale: 0.8, 
          opacity: 0 
        },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.6,
          delay: 0.4,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
      
      // Button hover animation
      if (buttonRef.current) {
        buttonRef.current.addEventListener('mouseenter', () => {
          gsap.to(buttonRef.current, {
            scale: 1.05,
            duration: 0.3,
            ease: "power1.out"
          });
        });
        
        buttonRef.current.addEventListener('mouseleave', () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power1.out"
          });
        });
      }
      
    }, sectionRef);
    
    return () => ctx.revert(); // Cleanup
  }, []);
  
  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 bg-amigo-bg text-amigo-text relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500 rounded-full opacity-20 mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/3 -right-24 w-80 h-80 bg-purple-500 rounded-full opacity-20 mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/3 w-72 h-72 bg-indigo-400 rounded-full opacity-20 mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={textRef}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Experience the full spectrum of AI innovation
          </h2>
          <p className="text-lg md:text-xl text-amigo-text-secondary mb-10">
            Transform how your enterprise engages with intelligent, adaptive AI solutions.
          </p>
          
          <Link 
            href="#"
            ref={buttonRef}
            className="inline-block px-8 py-4 bg-amigo-mint text-amigo-text rounded-full text-lg font-medium shadow-sm hover:shadow-md hover:opacity-90 transition-all"
          >
            Get Started Today →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA; 