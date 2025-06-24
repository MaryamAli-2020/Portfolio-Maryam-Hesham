import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  isVisible: boolean;
  delay: number;
}

const ProjectCard = ({ project, isVisible, delay }: ProjectCardProps) => {
  const categoryColors = {
    'machine-learning': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'data-analytics': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'nlp': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
    'web-development': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
    'ai': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
    'automation': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
  };

  return (
    <div 
      className={`
        bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl 
        transition-all duration-500 w-full max-w-full
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
        }
      `}
      style={{ 
        transitionDelay: `${delay}s`,
        minHeight: 'auto' // Ensures card takes proper height on mobile
      }}
    >
      {/* Image Section - Responsive height */}
      <div className="h-40 sm:h-48 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy" // Better mobile performance
          onError={(e) => {
            // Fallback for broken images
            const target = e.target as HTMLImageElement;
            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4yZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
          }}
        />
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
          <span className={`
            text-xs font-medium px-2 py-1 rounded-full
            ${categoryColors[project.category] || 'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200'}
          `}>
            {project.category.split('-').join(' ')}
          </span>
        </div>
      </div>
      
      {/* Content Section - Better mobile spacing */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-white leading-tight">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
          {project.description}
        </p>
        
        {/* Technologies - Better mobile wrapping */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {project.technologies.map(tech => (
            <span 
              key={tech} 
              className="text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links - Mobile-friendly layout */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="
                text-sm font-medium flex items-center justify-center sm:justify-start
                text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 
                transition-colors py-2 px-4 sm:p-0 bg-purple-50 dark:bg-purple-900/20 sm:bg-transparent
                rounded-lg sm:rounded-none
              "
            >
              <ExternalLink size={16} className="mr-2" /> 
              View Demo
            </a>
          )}
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="
                text-sm font-medium flex items-center justify-center sm:justify-start
                text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white 
                transition-colors py-2 px-4 sm:p-0 bg-gray-100 dark:bg-gray-600 sm:bg-transparent
                rounded-lg sm:rounded-none
              "
            >
              <Github size={16} className="mr-2" /> 
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;