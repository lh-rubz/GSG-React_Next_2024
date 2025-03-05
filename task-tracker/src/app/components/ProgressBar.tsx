interface ProgressBarProps {
    completedTasks: number;
    totalTasks: number;
  }
  
  const ProgressBar = ({ completedTasks, totalTasks }: ProgressBarProps) => {
    return (
      <div className="mb-6">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500" style={{ width: `${(completedTasks / totalTasks) * 100}%` }}></div>
        </div>
        <p className="text-sm mt-2 text-gray-600">{completedTasks} of {totalTasks} tasks completed</p>
      </div>
    );
  };
  
  export default ProgressBar;