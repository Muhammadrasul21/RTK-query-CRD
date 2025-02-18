import React from "react";
import { reports } from "@/static";

const Reports = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto bg-gray-900 text-white shadow-lg rounded-lg">
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
