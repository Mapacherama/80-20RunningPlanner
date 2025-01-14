import React, { useState } from "react";

// Example schedule data
const initialSchedule = [
  { day: "Monday", planned: 8 },
  { day: "Tuesday", planned: 12 },
  { day: "Wednesday", planned: 0 }, // Rest day
  { day: "Thursday", planned: 12 },
  { day: "Friday", planned: 8 },
  { day: "Saturday", planned: 10 },
  { day: "Sunday", planned: 15 },
];

const Schedule = () => {
  const [schedule] = useState(initialSchedule);

  return (
    <div>
      <ul className="list-none p-0">
        {schedule.map((run, index) => (
          <li key={index} className="mb-4">
            <span className="font-bold">{run.day}:</span>{" "}
            {run.planned > 0 ? `${run.planned} km` : "Rest"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;