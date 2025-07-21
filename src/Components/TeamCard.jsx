// src/components/TeamCard.jsx
import React from "react";

export default function TeamCard({ title, description, href }) {
  return (
    <div className="bg-[#FFFFFF]/10 p-6 rounded-2xl shadow-md flex flex-col justify-between items-start">
      <div>
        <h2 className="font-title text-5xl font-bold text-red-600 mb-2 text-left">{title}</h2>
        <p className="font-body text-sm text-[#FFF7E1] text-left">{description}</p>
      </div>
      <a
        href={href}
        className="mt-6 bg-red-600 text-white py-2 px-4 rounded-full w-fit self-start hover:bg-red-700 transition"
      >
        View Members
      </a>
    </div>
  );
}
