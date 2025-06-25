import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import CertificateCard from './ui/CertificateCard';
import { certificateData, CertificateCategory } from '../data/certificates';

const Certificates = () => {
  const [ref, isInView] = useInView({ threshold: 0.05 });
  const [activeFilter, setActiveFilter] = useState<CertificateCategory | 'all'>('all');

  const categories: { value: CertificateCategory | 'all'; label: string }[] = [
    { value: 'all', label: 'All Certificates' },
    { value: 'machine-learning', label: 'Machine Learning' },
    { value: 'data-science', label: 'Data Science' },
    { value: 'ai', label: 'AI' },
    { value: 'analytics', label: 'Analytics' },
    { value: 'cloud-computing', label: 'Cloud Computing' },
    { value: 'programming', label: 'Programming' }
  ];

  const filteredCertificates = activeFilter === 'all' 
    ? certificateData 
    : certificateData.filter(certificate => certificate.category === activeFilter);

  return (
    <section 
      id="certificates" 
      ref={ref} 
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-6 transition-all duration-700 ${
          isInView ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-gray-800 dark:text-white">Professional </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">Certificates</span>
        </h2>
        
        <p className={`text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
          isInView ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          Recognized certifications and achievements that validate my expertise in data science, machine learning, and related technologies.
        </p>

        {/* Mobile-friendly filter buttons */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 transition-all duration-700 delay-300 ${
          isInView ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveFilter(category.value)}
              className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeFilter === category.value
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Responsive grid - 3 columns on desktop, 1 on mobile with unified widths */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCertificates.map((certificate, index) => (
            <CertificateCard 
              key={certificate.id}
              certificate={certificate} 
              isVisible={isInView} 
              delay={index * 0.1 + 0.4}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;