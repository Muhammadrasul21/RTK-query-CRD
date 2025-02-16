import React from "react";

const Likes = () => {
  const likedItems = [
    { id: 1, title: "Frontend Development", desc: "React, Tailwind, Redux" },
    { id: 2, title: "Coding Challenges", desc: "LeetCode, CodeWars, HackerRank" },
    { id: 3, title: "UI/UX Design", desc: "Figma, Adobe XD, Material Design" },
    { id: 4, title: "Artificial Intelligence", desc: "Machine Learning, Neural Networks" },
    { id: 5, title: "Open Source Contributions", desc: "GitHub, Pull Requests, Community" },
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Liked Items</h2>
      <div className="space-y-4">
        {likedItems.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-md shadow-sm flex justify-between items-center"
          >
            <div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
            <button className="text-red-500 hover:text-red-600">❌</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Likes;
