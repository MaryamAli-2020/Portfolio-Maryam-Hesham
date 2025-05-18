import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  visible: boolean;
}

const BackToTop = ({ visible }: BackToTopProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-purple-600 text-white shadow-md hover:bg-purple-700 hover:shadow-lg transition-all duration-300 z-40 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Back to top"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ArrowUp size={20} className={`transition-transform duration-300 ${isHovered ? '-translate-y-1' : 'translate-y-0'}`} />
    </button>
  );
};

export default BackToTop;