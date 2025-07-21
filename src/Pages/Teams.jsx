// src/pages/Teams.jsx
import React from "react";
import TeamCard from "../components/TeamCard";

const competencies = [
  {
    title: "AEM",
    description: "Hot Pink. Cat, don't like people. I like myself though.",
  },
  {
    title: "UI",
    description: "Hot Pink. Cat, don't like people. I like myself though.",
  },
  {
    title: "Data",
    description: "Hot Pink. Cat, don't like people. I like myself though.",
  },
  {
    title: "CJM",
    description: "Hot Pink. Cat, don't like people. I like myself though.",
  },
  {
    title: "UX",
    description: "Hot Pink. Cat, don't like people. I like myself though.",
  },
  {
    title: "Workfront",
    description: "Hot Pink. Cat, don't like people. I like myself though.",
  },
];

export default function Teams() {
  return (
    <div className="min-h-screen px-6 py-12 bg-gradient-to-br from-black via-[#1c1b1b] to-[#400101] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-light mb-3">Competencies</h1>
        <p className="text-lg text-gray-300 mb-12">
          The “departments” in the ACS vertical!
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {competencies.map((item, index) => (
            <TeamCard
              key={index}
              title={item.title}
              description={item.description}
              href={"/teams/" + item.title.toLowerCase()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
