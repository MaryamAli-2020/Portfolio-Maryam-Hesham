import { useInView } from '../hooks/useInView';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 ${
            isInView ? 'opacity-100' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-gray-800 dark:text-white">About </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">Me</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className={`md:w-2/5 mb-8 md:mb-0 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="relative">
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
                  <img
                    src="https://i.pinimg.com/736x/d2/36/cf/d236cfa3698a035c7cb56db85dd984be.jpg"
                    alt="Maryam Hesham"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-teal-500/20 rounded-full pointer-events-none"></div>
              </div>
            </div>
            
            <div className={`md:w-3/5 transition-all duration-700 delay-400 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                Maryam Hesham
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm a passionate Data Scientist with a fresh Bachelor's degree in Data Science from Ajman University. My journey in the world of data began during my deep hunting phase for "the new oil", where I discovered my fascination with extracting meaningful insights from complex datasets.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I specialize in machine learning algorithms, natural language processing, and data visualization, with a particular interest in how AI can be used to solve real-world problems. My research focuses on developing more efficient deep learning models for resource-constrained environments.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                When I'm not diving into datasets or fine-tuning models, you can find me contributing to open-source projects, writing technical articles, or exploring the latest developments in LLMs and generative AI.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Education</h4>
                  <p className="text-gray-700 dark:text-gray-300">BSc in Data Science, Ajman University</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-2">Location</h4>
                  <p className="text-gray-700 dark:text-gray-300">Ajman, United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;