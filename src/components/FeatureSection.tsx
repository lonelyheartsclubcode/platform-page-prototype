import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

interface Feature {
  title: string;
  description: string;
}

interface FeatureSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  gradient: boolean;
  iconType: 'cube' | 'chart' | 'bolt';
}

export default function FeatureSection({
  id,
  title,
  subtitle,
  description,
  features,
  gradient = false,
  iconType = 'cube'
}: FeatureSectionProps) {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      
      // Animate section title
      tl.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        { duration: 0.6, y: 0, opacity: 1 }
      );
      
      // Animate subtitle
      tl.fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { duration: 0.5, y: 0, opacity: 1 },
        "-=0.3"
      );
      
      // Animate description
      tl.fromTo(
        descriptionRef.current,
        { y: 20, opacity: 0 },
        { duration: 0.5, y: 0, opacity: 1 },
        "-=0.3"
      );
      
      // Animate feature cards
      tl.fromTo(
        featuresRef.current?.children || [],
        { y: 40, opacity: 0 },
        { duration: 0.6, y: 0, opacity: 1, stagger: 0.1 },
        "-=0.3"
      );
      
      // Animate icon
      tl.fromTo(
        iconRef.current,
        { scale: 0.5, opacity: 0, rotation: -10 },
        { duration: 0.8, scale: 1, opacity: 1, rotation: 0, ease: "back.out(1.7)" },
        "-=1.2"
      );
      
      return () => {
        tl.kill();
      };
    }
  }, [inView]);

  // Render different icons based on iconType
  const renderIcon = () => {
    switch (iconType) {
      case 'cube':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 12L19.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 12L4.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 3L4.5 8L12 13L19.5 8L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'chart':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21H3V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 14L12 9L16 13L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'bolt':
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 3L6 13H12L11 21L18 11H12L13 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
    }
  };

  return (
    <section 
      id={id}
      ref={sectionRef} 
      className={`py-20 px-4 sm:px-6 lg:px-8 ${gradient ? 'bg-gradient-to-b from-[#f8faff] to-white' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-2/5">
            <div className="mb-6">
              <div 
                ref={iconRef}
                className={`w-16 h-16 rounded-lg p-3 ${
                  iconType === 'cube' ? 'bg-indigo-100 text-indigo-600' : 
                  iconType === 'chart' ? 'bg-blue-100 text-blue-600' : 
                  'bg-purple-100 text-purple-600'
                }`}
              >
                {renderIcon()}
              </div>
            </div>
            
            <h2 ref={titleRef} className="text-3xl font-bold text-[#16274C] mb-4">
              {title}
            </h2>
            
            <p ref={subtitleRef} className="text-xl text-[#597298] mb-6">
              {subtitle}
            </p>
            
            <p ref={descriptionRef} className="text-[#597298]">
              {description}
            </p>
          </div>
          
          <div ref={featuresRef} className="md:w-3/5 grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-xl shadow-lg ${
                  gradient ? 'bg-white' : 'bg-[#f8faff]'
                } hover:shadow-xl transition-shadow duration-300 group`}
              >
                <h3 className="text-xl font-semibold text-[#16274C] mb-3 group-hover:text-[#4361EE] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#597298]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 