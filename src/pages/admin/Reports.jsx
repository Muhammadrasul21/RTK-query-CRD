import React from "react";

const Reports = () => {
  const reports = [
    { title: "Monthly Report", date: "January 2025" },
    { title: "Annual Report", date: "2024" },
    { title: "Weekly Summary", date: "Week 6, 2025" },
    { title: "Daily Activity", date: "February 16, 2025" },
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Reports</h2>
      <div className="space-y-4">
        {reports.map((report, index) => (
          <div key={index} className="border p-4 rounded-md shadow-sm">
            <h3 className="font-medium">{report.title}</h3>
            <p className="text-sm text-gray-600">{report.date}</p>
            <button className="mt-2 text-blue-500 hover:underline">View</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
