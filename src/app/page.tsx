'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CoreFeatures from '../components/CoreFeatures';
import TestFeatures from '../components/TestFeatures';
import ModelFeatures from '../components/ModelFeatures';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

// Define custom animation classes in the global.css
import gsap from 'gsap';

export default function Home() {
  // Initialize animations
  useEffect(() => {
    // Define any global animations or settings
    gsap.config({
      nullTargetWarn: false
    });
    
    // Add custom animation for scrolling reveal
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);
  
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CoreFeatures />
      <TestFeatures />
      <ModelFeatures />
      <CTA />
      <Footer />
    </main>
  );
}
