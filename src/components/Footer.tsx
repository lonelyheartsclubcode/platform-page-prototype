import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">Amigo Platform</h2>
            <p className="text-gray-400 mb-4">
              Empowering enterprises with next-generation AI solutions through intelligent agents, 
              context awareness, and continuous optimization.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                  aria-label={social}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-2">
              {['Core', 'Test', 'Model', 'Documentation'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {['About', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Amigo Inc. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="#" className="text-gray-500 text-sm hover:text-indigo-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 text-sm hover:text-indigo-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 