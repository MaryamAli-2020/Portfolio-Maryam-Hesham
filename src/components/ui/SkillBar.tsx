interface SkillBarProps {
  name: string;
  percentage: number;
  color: string;
  delay: number;
  isVisible: boolean;
}

const SkillBar = ({ name, percentage, color, delay, isVisible }: SkillBarProps) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${percentage}%` : '0%',
            backgroundColor: color,
            transitionDelay: `${delay}s`
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;