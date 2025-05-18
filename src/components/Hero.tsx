import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import ParticleBackground from './ui/ParticleBackground';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-transform duration-1000 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="block text-gray-800 dark:text-white">
              Data Scientist & 
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">
              AI Researcher
            </span>
          </h1>
          
          <p className={`text-xl text-gray-600 dark:text-gray-300 mb-8 transition-all duration-1000 delay-300 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Transforming complex data into meaningful insights and <br className="hidden md:block" />
            building intelligent solutions for tomorrow's challenges
          </p>
          
          <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-500 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <a 
              href="#projects" 
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-transparent border-2 border-teal-500 text-teal-500 dark:text-teal-400 hover:bg-teal-500 hover:text-white dark:hover:text-white rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} className="text-gray-700 dark:text-gray-300" />
        </a>
      </div>
    </section>
  );
};

export default Hero;