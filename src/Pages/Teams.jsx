// src/pages/Teams.jsx
import React from "react";
import TeamCard from "../components/TeamCard";
import teamTimelineInfo from "../Data/teamTimelineInfo.json";

const competencies = [
  {
    title: "AEM",
    description: teamTimelineInfo.AEM.description,
  },
  {
    title: "UI",
    description: teamTimelineInfo.UI.description,
  },
  {
    title: "Data",
    description: teamTimelineInfo.Data.description,
  },
  {
    title: "CJM",
    description: teamTimelineInfo.CJM.description,
  },
  {
    title: "UX",
    description: teamTimelineInfo.UX.description,
  },
  {
    title: "Workfront",
    description: teamTimelineInfo.Workfront.description,
  },
];

export default function Teams() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 text-center mt-32">
        <h1 className="text-5xl md:text-7xl mb-3 text-[#FFF7E1] font-title">
          Competencies
        </h1>
        <p className="text-sm md:text-lg text-[#FFF7E1] mb-12 font-body">
          The departments in the ACS vertical!
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {competencies.map((item, index) => (
            <TeamCard
              key={index}
              title={item.title}
              description={item.description}
              href={"#/teams/" + item.title.toLowerCase()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
