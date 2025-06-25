import { ExternalLink, Calendar, Award } from 'lucide-react';
import { Certificate } from '../../data/certificates';

interface CertificateCardProps {
  certificate: Certificate;
  isVisible: boolean;
  delay: number;
}

const CertificateCard = ({ certificate, isVisible, delay }: CertificateCardProps) => {
  return (
    <div 
      className={`group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden w-full h-full flex flex-col ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Certificate Image - Full width, no placeholder */}
      <div className="relative overflow-hidden w-full">
        <img 
          src={certificate.imageUrl} 
          alt={certificate.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Certificate category badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 dark:bg-gray-800/90 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
            {certificate.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>
        </div>
      </div>

      {/* Certificate Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold text-lg text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 leading-tight">
            {certificate.title}
          </h3>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
          <Award className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm font-medium">{certificate.issuer}</span>
        </div>

        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm">{certificate.issueDate}</span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">
          {certificate.description}
        </p>

        {/* Skills/Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {certificate.skills.slice(0, 4).map((skill, index) => (
              <span 
                key={index}
                className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-xs font-medium"
              >
                {skill}
              </span>
            ))}
            {certificate.skills.length > 4 && (
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded text-xs font-medium">
                +{certificate.skills.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* View Certificate Button */}
        <a
          href={certificate.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full text-teal-800 px-4 py-2 rounded-lg font-medium transition-all duration-300 "
        >
          <span>View Certificate</span>
          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

export default CertificateCard;