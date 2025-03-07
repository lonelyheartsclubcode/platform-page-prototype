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
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%"
          }
        }
      );
      
      // Button animation
      gsap.fromTo(
        buttonRef.current,
        { scale: 0.95, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.6,
          delay: 0.4,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%"
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
    });
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-amigo-bg"
    >
      <div className="container mx-auto px-4">
        <div ref={contentRef} className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amigo-text">
                  See what Amigo can do for you
                </h2>
                <p className="text-xl text-amigo-text-secondary max-w-3xl mx-auto">
                Experience enterprise-grade AI in weeks, not months.
                </p>
              </div>
              
              <div className="flex justify-center">
                <Link 
                  href="#"
                  ref={buttonRef}
                  className="inline-block px-10 py-4 bg-amigo-mint text-amigo-text rounded-lg text-lg font-medium shadow-sm hover:shadow-md transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 border-t border-gray-100">
              {[
                { title: "Define", duration: "2-3 weeks" },
                { title: "Deploy", duration: "6-8 weeks" },
                { title: "Monitor", duration: "8-12 weeks" },
                { title: "Expand", duration: "8+ weeks" }
              ].map((step, i) => (
                <div key={i} className="p-6 text-center border-r last:border-r-0 border-gray-100">
                  <div className="text-lg font-bold text-amigo-text mb-1">{step.title}</div>
                  <div className="text-sm text-amigo-text-secondary">{step.duration}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 