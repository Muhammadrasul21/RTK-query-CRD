import React from "react";

const Settings = () => {
  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Language</label>
          <select className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300">
            <option>English</option>
            <option>Uzbek</option>
            <option>Russian</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Notifications</label>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="email" className="w-4 h-4" />
            <label htmlFor="email">Email Notifications</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="sms" className="w-4 h-4" />
            <label htmlFor="sms">SMS Notifications</label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Dark Mode</label>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="dark-mode" className="w-4 h-4" />
            <label htmlFor="dark-mode">Enable Dark Mode</label>
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
