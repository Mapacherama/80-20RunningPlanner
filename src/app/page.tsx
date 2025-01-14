import React from "react";
import Schedule from "./Schedule"; // Component for the weekly schedule
import ProgressTracker from "./ProgressTracker"; // Component for the progress bar

const LandingPage = () => {
  return (
    <div className="font-sans p-5 max-w-3xl mx-auto text-center">
      {/* Hero Section */}
      <section className="bg-gray-100 p-10 rounded-lg mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">80/20 Marathon Training</h1>
        <p className="text-lg text-gray-600 mb-6">
          Optimize your marathon training by focusing on what truly matters.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Get Started
        </button>
      </section>

      {/* Weekly Schedule Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Weekly Training Schedule</h2>
        <Schedule />
      </section>

      {/* Progress Bar Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Your Weekly Progress</h2>
        <ProgressTracker totalPlanned={65} totalCompleted={32} />
      </section>
    </div>
  );
};

export default LandingPage;