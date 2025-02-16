import React from "react";

const Analytic = () => {
  const stats = [
    { title: "Total Users", value: "5,420" },
    { title: "Monthly Active Users", value: "1,230" },
    { title: "Daily Visits", value: "340" },
    { title: "New Subscribers", value: "78" },
    { title: "Average Session Time", value: "5 minutes" },
    { title: "Page Views", value: "12,430" },
  ];

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-between p-3 border-b">
            <span className="text-gray-600">{stat.title}</span>
            <span className="font-semibold">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytic;
