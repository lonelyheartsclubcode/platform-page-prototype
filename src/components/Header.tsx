import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          Amigo
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          {['Platform', 'Solutions', 'Pricing', 'About'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link 
            href="#contact"
            className="hidden md:inline-block px-6 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </Link>
          
          <button className="md:hidden text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 