import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#" 
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent"
            >
              Maryam.Hesham
            </a>
            <p className="mt-2 text-gray-400 text-sm">
              Data Scientist & AI Researcher
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-purple-500" />
              <span>© {currentYear} Maryam Hesham</span>
            </p>
            <p className="mt-1 text-gray-500 text-xs">
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;