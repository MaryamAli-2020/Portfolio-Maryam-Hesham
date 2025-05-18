import { useInView } from '../hooks/useInView';
import SkillBar from './ui/SkillBar';
import { skillData } from '../data/skills';

const Skills = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section 
      id="skills" 
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-all duration-700 ${
          isInView ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-gray-800 dark:text-white">Technical </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-500">Skills</span>
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div className={`transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
                Programming & Data Science
              </h3>
              
              <div className="space-y-6">
                {skillData.technical.map((skill, index) => (
                  <SkillBar 
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    color={skill.color}
                    delay={index * 0.1}
                    isVisible={isInView}
                  />
                ))}
              </div>
            </div>
            
            <div className={`transition-all duration-700 delay-400 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
                Tools & Frameworks
              </h3>
              
              <div className="space-y-6">
                {skillData.tools.map((skill, index) => (
                  <SkillBar 
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    color={skill.color}
                    delay={index * 0.1}
                    isVisible={isInView}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className={`mt-16 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md transition-all duration-700 delay-600 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Areas of Expertise
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skillData.expertise.map((item, index) => (
                <div 
                  key={item}
                  className={`bg-white dark:bg-gray-700 py-3 px-4 rounded-lg shadow-sm text-center transition-all duration-500 hover:shadow-md hover:-translate-y-1 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <span className="text-gray-700 dark:text-gray-200 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;