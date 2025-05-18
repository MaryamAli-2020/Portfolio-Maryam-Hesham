import { useInView } from '../hooks/useInView';
import { publicationData } from '../data/publications';

const Publications = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section 
      id="publications" 
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-6 transition-all duration-700 ${
          isInView ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-gray-800 dark:text-white">Research & </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">Publications</span>
        </h2>
        
        <p className={`text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
          isInView ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          My contributions to academic research and industry publications in data science and artificial intelligence.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {publicationData.map((pub, index) => (
              <div 
                key={index}
                className={`bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {pub.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    {pub.journal}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {pub.date}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {pub.abstract}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.keywords.map(keyword => (
                    <span 
                      key={keyword} 
                      className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                
                {pub.doi && (
                  <a 
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
                  >
                    DOI: {pub.doi}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;