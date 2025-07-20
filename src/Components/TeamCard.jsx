// src/components/TeamCard.jsx
import React from 'react';

export default function TeamCard({ title, description, onClick }) {
  return (
    <div className="bg-[#1e1e1e] p-6 rounded-2xl shadow-md flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-red-600 mb-2">{title}</h2>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
      <button
        className="mt-6 bg-red-600 text-white py-2 px-4 rounded-full w-fit self-start hover:bg-red-700 transition"
        onClick={onClick}
      >
        View Members
      </button>
    </div>
  );
}
