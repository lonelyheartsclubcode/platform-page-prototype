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
                  Your Roadmap to AI Excellence
                </h2>
                <p className="text-xl text-amigo-text-secondary max-w-3xl mx-auto">
                  Our approach takes you from concept to enterprise-wide deployment
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                {[
                  { 
                    title: "Define",
                    description: "Identify high-value use cases and establish success metrics", 
                    duration: "2-3 weeks" 
                  },
                  { 
                    title: "Deploy", 
                    description: "Configure and roll out your agent in a controlled environment", 
                    duration: "6-8 weeks" 
                  },
                  { 
                    title: "Monitor", 
                    description: "Track performance against benchmarks and refine based on data", 
                    duration: "8-12 weeks" 
                  },
                  { 
                    title: "Expand", 
                    description: "Extend capabilities across channels and business functions", 
                    duration: "8+ weeks" 
                  }
                ].map((step, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-amigo-mint flex items-center justify-center text-white font-bold text-lg">
                      {i + 1}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-amigo-text">{step.title}</h3>
                    <p className="text-sm text-amigo-text-secondary mb-2">
                      {step.description}
                    </p>
                    <div className="text-xs font-medium text-amigo-mint">
                      {step.duration}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mb-8">
                <p className="text-xl font-bold text-amigo-text">
                  Experience enterprise-grade AI in weeks, not months
                </p>
              </div>
              
              <div className="text-center">
                <Link 
                  href="#"
                  ref={buttonRef}
                  className="inline-block px-8 py-4 bg-amigo-mint text-amigo-text rounded-lg text-lg font-medium shadow-sm hover:shadow-md transition-all"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 