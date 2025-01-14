import React from "react";

interface ProgressTrackerProps {
  totalPlanned: number; // Total planned mileage for the week
  totalCompleted: number; // Total mileage completed so far
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ totalPlanned, totalCompleted }) => {
  // Calculate the percentage of completion
  const percentage = Math.min(Math.round((totalCompleted / totalPlanned) * 100), 100);

  return (
    <div className="w-full bg-gray-200 rounded-lg">
      <div
        className="bg-blue-600 text-xs font-medium text-white text-center p-1 leading-none rounded-lg"
        style={{ width: `${percentage}%` }}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressTracker;