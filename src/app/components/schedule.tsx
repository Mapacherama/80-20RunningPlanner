"use client";

import React, { useState } from "react";

const initialSchedule = [
  { day: "Monday", planned: 8, completed: 0 },
  { day: "Tuesday", planned: 12, completed: 0 },
  { day: "Wednesday", planned: 0, completed: 0 }, // Rest day
  { day: "Thursday", planned: 12, completed: 0 },
  { day: "Friday", planned: 8, completed: 0 },
  { day: "Saturday", planned: 10, completed: 0 },
  { day: "Sunday", planned: 15, completed: 0 },
];

const Schedule = ({ updateProgress }: { updateProgress: (completed: number) => void }) => {
  const [schedule, setSchedule] = useState(initialSchedule);

  const handleInputChange = (index: number, value: number) => {
    setSchedule((prev) =>
      prev.map((run, i) =>
        i === index
          ? { ...run, completed: Math.min(value, run.planned) } // Prevent over-completing
          : run
      )
    );

    // Update the total completed mileage for progress tracking
    const totalCompleted = schedule.reduce(
      (total, run, i) => total + (i === index ? Math.min(value, run.planned) : run.completed),
      0
    );
    updateProgress(totalCompleted);
  };

  return (
    <div>
      <ul className="list-none p-0">
        {schedule.map((run, index) => (
          <li key={index} className="mb-4">
            <span className="font-bold">{run.day}:</span>{" "}
            {run.planned > 0 ? `${run.planned} km planned` : "Rest"}
            {run.planned > 0 && (
              <input
                type="number"
                value={run.completed}
                min="0"
                max={run.planned}
                className="ml-2 p-1 border rounded"
                onChange={(e) => handleInputChange(index, parseFloat(e.target.value) || 0)}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;